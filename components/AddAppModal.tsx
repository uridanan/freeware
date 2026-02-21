import React, { useState } from 'react';
import { X } from 'lucide-react';
import { AppCategory, AppStatus, AppItem } from '../types';

interface AddAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (app: Omit<AppItem, 'id' | 'iconFallback'>) => void;
}

const inferCategory = (name: string, url: string, desc: string): AppCategory => {
  const text = (name + ' ' + url + ' ' + desc).toLowerCase();
  
  if (text.match(/code|ide|git|java|python|dev|sql|docker|terminal|console|script|program/)) return 'Development';
  if (text.match(/player|video|music|photo|image|paint|adobe|editor|media|cut|convert|sound|audio|draw|art/)) return 'Media & Creative';
  if (text.match(/browser|chrome|firefox|chat|vpn|torrent|meet|zoom|web|social|internet|download|ftp|client/)) return 'Internet & Social';
  if (text.match(/office|pdf|reader|book|word|excel|productivity|doc|text|edit/)) return 'Office & Productivity';
  if (text.match(/game|steam|play|fun|xbox/)) return 'Games & Fun';
  if (text.match(/zip|driver|system|backup|iso|tool|utility|disk|clean|partition|file|manager/)) return 'Utilities & System';
  
  return 'Other';
};

const AddAppModal: React.FC<AddAppModalProps> = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    status: 'Must' as AppStatus,
    description: '',
    recommendation: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Auto-assign category
    const category = inferCategory(formData.name, formData.url, formData.description);

    onAdd({
      ...formData,
      category
    });
    
    onClose();
    setFormData({
      name: '',
      url: '',
      status: 'Must',
      description: '',
      recommendation: ''
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50/50">
          <h2 className="text-lg font-bold text-slate-900">Add New App</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 p-1 hover:bg-slate-100 rounded-lg transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">App Name</label>
            <input
              required
              type="text"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 transition-shadow"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              placeholder="e.g. Visual Studio Code"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Website URL</label>
            <input
              required
              type="url"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 transition-shadow"
              placeholder="https://"
              value={formData.url}
              onChange={e => setFormData({...formData, url: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
            <select
              className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 transition-shadow bg-white"
              value={formData.status}
              onChange={e => setFormData({...formData, status: e.target.value as AppStatus})}
            >
              <option value="Must">Must</option>
              <option value="Just In Time">Just In Time</option>
              <option value="Redundant">Redundant</option>
            </select>
          </div>

          {formData.status === 'Redundant' && (
            <div className="animate-in slide-in-from-top-2 duration-200">
              <label className="block text-sm font-medium text-amber-700 mb-1">Preferred Alternative</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-amber-200 bg-amber-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-shadow placeholder-amber-300/70"
                placeholder="e.g. Use VS Code instead"
                value={formData.recommendation}
                onChange={e => setFormData({...formData, recommendation: e.target.value})}
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Description (Optional)</label>
            <textarea
              rows={2}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 transition-shadow resize-none"
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
              placeholder="Category will be assigned automatically based on details."
            />
          </div>

          <div className="pt-2 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 text-white bg-violet-600 hover:bg-violet-700 rounded-lg font-medium transition-colors shadow-sm shadow-violet-200"
            >
              Add App
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAppModal;