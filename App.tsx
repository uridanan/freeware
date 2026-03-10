import React, { useState, useMemo, useEffect } from 'react';
import { AppCategory, AppStatus, AppItem } from './types';
import AppCard from './components/AppCard';
import CategoryFilter from './components/CategoryFilter';
import AddAppModal from './components/AddAppModal';
import DataManager from './components/DataManager';
import { Box, Info, Plus, Loader2 } from 'lucide-react';

const App: React.FC = () => {
  const [apps, setApps] = useState<AppItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<AppCategory | 'All'>('All');
  const [selectedStatus, setSelectedStatus] = useState<AppStatus | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminToken, setAdminToken] = useState<string | null>(localStorage.getItem('adminToken'));

  // Initial Fetch
  useEffect(() => {
    fetchApps();
    if (adminToken) {
      setIsAdmin(true);
    }
  }, []);

  const fetchApps = async () => {
    try {
      setIsLoading(true);
      const res = await fetch('/api/apps');
      if (res.ok) {
        const data = await res.json();
        setApps(data);
      }
    } catch (err) {
      console.error('Failed to fetch apps:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const saveToBackend = async (updatedApps: AppItem[]) => {
    if (!isAdmin || !adminToken) return;

    try {
      const res = await fetch('/api/apps', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${adminToken}`
        },
        body: JSON.stringify(updatedApps)
      });

      if (!res.ok) {
        if (res.status === 403) {
          handleLogout();
          alert('Session expired. Please log in again.');
        } else {
          throw new Error('Failed to save to backend');
        }
      }
    } catch (err) {
      console.error('Error saving:', err);
      alert('Failed to save changes to the cloud.');
    }
  };

  // Handlers
  const handleUpdateApp = async (id: string, updates: Partial<AppItem>) => {
    const nextApps = apps.map(app => app.id === id ? { ...app, ...updates } : app);
    setApps(nextApps);
    if (isAdmin) await saveToBackend(nextApps);
  };

  const handleDeleteApp = async (id: string) => {
    const nextApps = apps.filter(app => app.id !== id);
    setApps(nextApps);
    if (isAdmin) await saveToBackend(nextApps);
  };

  const handleAddApp = async (newAppData: Omit<AppItem, 'id' | 'iconFallback'>) => {
    const newApp: AppItem = {
      ...newAppData,
      id: crypto.randomUUID(),
      iconFallback: newAppData.name.substring(0, 2).toUpperCase()
    };
    const nextApps = [newApp, ...apps];
    setApps(nextApps);
    if (isAdmin) await saveToBackend(nextApps);
  };

  const handleLogin = async () => {
    if (isAdmin) {
      handleLogout();
      return;
    }

    const password = prompt('Enter Admin Password:');
    if (!password) return;

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('adminToken', data.token);
        setAdminToken(data.token);
        setIsAdmin(true);
      } else {
        alert('Invalid password');
      }
    } catch (err) {
      alert('Login failed');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setAdminToken(null);
    setIsAdmin(false);
  };

  const handleImportApps = async (importedApps: AppItem[]) => {
    // 1. Normalize Data
    const normalizedApps = importedApps.map(app => {
      let status: AppStatus = 'Just In Time';
      if (app.status) {
        const s = app.status.trim().toLowerCase();
        if (s === 'must' || s === 'active') status = 'Must';
        else if (s === 'redundant') status = 'Redundant';
        else if (s.includes('just') || s.includes('time') || s === 'maybe') status = 'Just In Time';
      }

      return {
        ...app,
        status,
        category: app.category || 'Other',
        id: app.id || crypto.randomUUID(),
        iconFallback: app.iconFallback || (app.name ? app.name.substring(0, 2).toUpperCase() : '??')
      };
    });

    setApps(normalizedApps);
    if (isAdmin) await saveToBackend(normalizedApps);

    setSelectedCategory('All');
    setSelectedStatus('All');
    setSearchQuery('');
  };

  const filteredApps = useMemo(() => {
    return apps.filter(app => {
      const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || app.status === selectedStatus;
      const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesStatus && matchesSearch;
    }).sort((a, b) => {
      const statusOrder: Record<AppStatus, number> = { 'Must': 0, 'Just In Time': 1, 'Redundant': 2 };
      if (statusOrder[a.status] !== statusOrder[b.status]) {
        return statusOrder[a.status] - statusOrder[b.status];
      }
      return a.name.localeCompare(b.name);
    });
  }, [apps, selectedCategory, selectedStatus, searchQuery]);

  return (
    <div className="min-h-screen pb-12 bg-slate-50">
      <AddAppModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddApp}
      />

      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm transition-all">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-violet-600 p-2 rounded-xl text-white shadow-md shadow-violet-200">
              <Box size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">Essential Freeware</h1>
              <p className="text-xs text-slate-500 font-medium">Curated App List</p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            {!isLoading && (
              <div className="hidden lg:flex items-center gap-2 text-sm text-slate-500">
                <Info size={16} />
                <span>{apps.length} apps</span>
              </div>
            )}

            {isAdmin && <DataManager apps={apps} onImport={handleImportApps} />}

            {isAdmin && (
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm shadow-violet-200"
              >
                <Plus size={18} />
                <span className="hidden sm:inline">Add App</span>
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <CategoryFilter
          selectedCategory={selectedCategory}
          selectedStatus={selectedStatus}
          searchQuery={searchQuery}
          onSelectCategory={setSelectedCategory}
          onSelectStatus={setSelectedStatus}
          onSearchChange={setSearchQuery}
        />

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <Loader2 className="w-8 h-8 text-violet-600 animate-spin mb-4" />
            <p className="text-slate-500 font-medium">Loading apps...</p>
          </div>
        ) : filteredApps.length > 0 ? (
          <div className="flex flex-col gap-4">
            {filteredApps.map(app => (
              <AppCard
                key={app.id}
                app={app}
                allApps={apps}
                onUpdate={handleUpdateApp}
                onDelete={handleDeleteApp}
                isAdmin={isAdmin}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-2xl border border-dashed border-slate-300">
            <h3 className="text-lg font-medium text-slate-900">No apps found</h3>
            <p className="text-slate-500 mt-1">Try adjusting your filters or search terms.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSelectedStatus('All'); setSearchQuery(''); }}
              className="mt-4 text-violet-600 hover:text-violet-800 font-medium text-sm"
            >
              Clear all filters
            </button>
          </div>
        )}

        <div className="mt-12 text-center text-sm text-slate-400">
          <p>All links are directed to official download pages or verified repositories.</p>
          <p className="mt-2">
            Status:
            <span className="mx-2 text-emerald-600 font-medium">Must</span>
            <span className="mx-2 text-amber-600 font-medium">Just In Time</span>
            <span className="mx-2 text-slate-500 font-medium line-through decoration-slate-400">Redundant</span>
          </p>
          <div className="mt-8 border-t border-slate-200 pt-8">
            <button
              onClick={handleLogin}
              className="text-xs text-slate-400 hover:text-violet-600 transition-colors uppercase tracking-widest font-bold border border-slate-200 px-4 py-2 rounded-full hover:border-violet-200 hover:bg-violet-50"
            >
              {isAdmin ? 'Exit Admin Mode' : 'Admin Login'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
