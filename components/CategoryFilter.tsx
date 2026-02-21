import React from 'react';
import { AppCategory, AppStatus } from '../types';
import { Search, ListFilter, CheckCircle2, Clock, AlertCircle, Layers } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: AppCategory | 'All';
  selectedStatus: AppStatus | 'All';
  searchQuery: string;
  onSelectCategory: (cat: AppCategory | 'All') => void;
  onSelectStatus: (status: AppStatus | 'All') => void;
  onSearchChange: (query: string) => void;
}

const categories: (AppCategory | 'All')[] = [
  'All',
  'Development',
  'Media & Creative',
  'Internet & Social',
  'Utilities & System',
  'Office & Productivity',
  'Games & Fun',
];

const statuses: { value: AppStatus | 'All'; label: string; icon?: React.ElementType }[] = [
  { value: 'All', label: 'All', icon: Layers },
  { value: 'Must', label: 'Must', icon: CheckCircle2 },
  { value: 'Just In Time', label: 'Just In Time', icon: Clock },
  { value: 'Redundant', label: 'Redundant', icon: AlertCircle },
];

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory, 
  selectedStatus,
  searchQuery,
  onSelectCategory,
  onSelectStatus,
  onSearchChange 
}) => {
  return (
    <div className="sticky top-20 z-20 py-4 -mx-4 px-4 md:mx-0 md:px-0 bg-slate-50/95 backdrop-blur-md border-b border-slate-200/50 md:border-none transition-all mb-6">
      <div className="flex flex-col gap-4">
        
        {/* Top Row: Search & Status */}
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-grow group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-slate-400 group-focus-within:text-violet-500 transition-colors" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search apps by name or description..."
              className="block w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all shadow-sm"
            />
          </div>

          {/* Status Segmented Control */}
          <div className="flex p-1 bg-slate-200/60 rounded-xl overflow-x-auto no-scrollbar">
            {statuses.map((item) => {
              const Icon = item.icon;
              const isActive = selectedStatus === item.value;
              return (
                <button
                  key={item.value}
                  onClick={() => onSelectStatus(item.value)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-white text-violet-700 shadow-sm'
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                  }`}
                >
                  {Icon && <Icon size={14} className={isActive ? 'text-violet-500' : 'opacity-70'} />}
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Row: Category Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar mask-gradient">
          <div className="flex items-center gap-1.5 px-1">
            <ListFilter size={16} className="text-slate-400 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full whitespace-nowrap border transition-all ${
                  selectedCategory === cat
                    ? 'bg-violet-600 border-violet-600 text-white shadow-md shadow-violet-200'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-violet-300 hover:text-violet-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;