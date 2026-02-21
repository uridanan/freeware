import React, { useRef, useState } from 'react';
import { Download, Upload, FileJson, Check, AlertCircle } from 'lucide-react';
import { AppItem } from '../types';

interface DataManagerProps {
  apps: AppItem[];
  onImport: (apps: AppItem[]) => void;
}

const DataManager: React.FC<DataManagerProps> = ({ apps, onImport }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleExport = () => {
    try {
      const dataStr = JSON.stringify(apps, null, 2);
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
      
      const exportFileDefaultName = `freeware-backup-${new Date().toISOString().slice(0,10)}.json`;
      
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      document.body.appendChild(linkElement);
      linkElement.click();
      document.body.removeChild(linkElement);
    } catch (e) {
      console.error("Export failed:", e);
      alert("Failed to export data.");
    }
  };

  const handleImportClick = () => {
    // Explicitly reset the value so the onChange event fires even if the same file is selected
    if (fileInputRef.current) {
        fileInputRef.current.value = '';
        fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    console.log("Reading file:", file.name);
    const reader = new FileReader();
    
    reader.onload = (event) => {
      try {
        const fileContent = event.target?.result as string;
        const result = JSON.parse(fileContent);
        
        if (Array.isArray(result)) {
          // Validation: Check if items look like apps
          if (result.length > 0 && (!result[0].id || !result[0].name)) {
             throw new Error("JSON format incorrect: Missing 'id' or 'name' in items.");
          }

          // Direct import without blocking confirm dialog to avoid browser extension conflicts
          console.log(`Importing ${result.length} items...`);
          onImport(result);
          
          setStatus('success');
          // Show a non-blocking visual indicator instead
          setTimeout(() => setStatus('idle'), 3000);
        } else {
          throw new Error("Invalid JSON structure: Root element must be an array.");
        }
      } catch (err: any) {
        console.error("Import error:", err);
        alert(`Error importing file: ${err.message}`);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    };
    
    reader.onerror = () => {
        console.error("File reading failed");
        alert('Failed to read the file.');
        setStatus('error');
    };

    reader.readAsText(file);
  };

  return (
    <div className="flex items-center gap-2">
      <button 
        onClick={handleExport}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
        title="Export to JSON"
      >
        <Download size={16} />
        <span className="hidden sm:inline">Export</span>
      </button>

      <button 
        onClick={handleImportClick}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm relative"
        title="Import from JSON"
      >
        {status === 'success' ? <Check size={16} className="text-emerald-500"/> : 
         status === 'error' ? <AlertCircle size={16} className="text-rose-500"/> :
         <Upload size={16} />}
        <span className="hidden sm:inline">Import</span>
      </button>
      
      {/* Hidden input */}
      <input 
        type="file" 
        accept=".json" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        className="hidden" 
      />
    </div>
  );
};

export default DataManager;