import React, { useState, useEffect } from 'react';
import { ExternalLink, Download, AlertCircle, ArrowRight, ChevronDown, Trash2, Edit2, Check, X, Shuffle, Star, Plus, Link as LinkIcon, AlertTriangle } from 'lucide-react';
import { AppItem, AppStatus, AppAlternative } from '../types';

interface AppCardProps {
  app: AppItem;
  allApps?: AppItem[];
  onUpdate: (id: string, updates: Partial<AppItem>) => void;
  onDelete: (id: string) => void;
}

const AppCard: React.FC<AppCardProps> = ({ app, allApps = [], onUpdate, onDelete }) => {
  const [imgError, setImgError] = useState(false);
  const [isEditingRec, setIsEditingRec] = useState(false);
  const [recValue, setRecValue] = useState(app.recommendation || '');
  
  // Alternatives state
  const [showAlternatives, setShowAlternatives] = useState(false);
  const [selectedAltAppId, setSelectedAltAppId] = useState('');
  const [newAltReason, setNewAltReason] = useState('');
  const [newAltPreferred, setNewAltPreferred] = useState(false);
  const [isAddingAlt, setIsAddingAlt] = useState(false);

  // Status Dropdown state
  const [isStatusOpen, setIsStatusOpen] = useState(false);

  // Delete Confirmation state
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const statusConfig: Record<AppStatus, { bg: string; text: string; border: string }> = {
    'Must': { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-100' },
    'Just In Time': { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-100' },
    'Redundant': { bg: 'bg-slate-50', text: 'text-slate-500', border: 'border-slate-100' },
  };

  const isRedundant = app.status === 'Redundant';
  const config = statusConfig[app.status];

  const getFaviconUrl = (url: string) => {
    try {
      const domain = new URL(url).hostname;
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    } catch (e) {
      return '';
    }
  };

  const saveRecommendation = () => {
    onUpdate(app.id, { recommendation: recValue });
    setIsEditingRec(false);
  };

  const handleAddAlternative = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedAltAppId) return;

    const targetApp = allApps.find(a => a.id === selectedAltAppId);
    if (!targetApp) return;

    // 1. Prepare Source -> Target Link
    const sourceToTargetAlt: AppAlternative = {
      id: crypto.randomUUID(),
      name: targetApp.name,
      reason: newAltReason,
      isPreferred: newAltPreferred,
      url: targetApp.url,
      relatedAppId: targetApp.id
    };

    // UPDATE SOURCE APP (Current)
    let currentAlternatives = app.alternatives || [];
    
    // If we are adding a preferred alternative, ensure no others are preferred
    if (newAltPreferred) {
      currentAlternatives = currentAlternatives.map(alt => ({
        ...alt,
        isPreferred: false
      }));
    }
    
    // Add the new one
    onUpdate(app.id, { 
      alternatives: [...currentAlternatives, sourceToTargetAlt] 
    });
    
    // 2. Prepare Target -> Source Link (Reciprocal)
    const targetAlternatives = targetApp.alternatives || [];
    const existingIndex = targetAlternatives.findIndex(alt => alt.relatedAppId === app.id);
    
    // If Source prefers Target (newAltPreferred is true), then Target should NOT prefer Source.
    // Otherwise, preserve existing preference or default to false.
    const reciprocalIsPreferred = newAltPreferred 
      ? false 
      : (existingIndex >= 0 ? targetAlternatives[existingIndex].isPreferred : false);

    const targetToSourceAlt: AppAlternative = {
      id: existingIndex >= 0 ? targetAlternatives[existingIndex].id : crypto.randomUUID(),
      name: app.name,
      reason: newAltReason ? `Alternative to: ${newAltReason}` : "Reciprocal alternative",
      isPreferred: reciprocalIsPreferred, 
      url: app.url,
      relatedAppId: app.id
    };

    // UPDATE TARGET APP
    let updatedTargetAlternatives = [...targetAlternatives];
    
    if (existingIndex >= 0) {
      // Update existing entry
      updatedTargetAlternatives[existingIndex] = targetToSourceAlt;
    } else {
      // Add new entry
      updatedTargetAlternatives.push(targetToSourceAlt);
    }

    onUpdate(targetApp.id, { alternatives: updatedTargetAlternatives });

    // Reset form
    setSelectedAltAppId('');
    setNewAltReason('');
    setNewAltPreferred(false);
    setIsAddingAlt(false);
  };

  const removeAlternative = (altId: string) => {
    const updatedAlternatives = app.alternatives?.filter(a => a.id !== altId) || [];
    onUpdate(app.id, { alternatives: updatedAlternatives });
  };

  const iconUrl = app.customIcon || getFaviconUrl(app.url);
  const alternativesCount = app.alternatives?.length || 0;

  // Filter apps for dropdown: Exclude current app and already added alternatives
  const availableAppsForAlt = allApps.filter(a => 
    a.id !== app.id && 
    !app.alternatives?.some(alt => alt.relatedAppId === a.id || alt.name === a.name)
  ).sort((a, b) => a.name.localeCompare(b.name));

  // Tooltip content for "Avoid" badge
  const avoidReason = app.recommendation 
    ? `Recommendation: ${app.recommendation}` 
    : app.description 
    ? `Reason: ${app.description}`
    : "This app is marked as redundant.";

  return (
    <div 
      id={app.id} 
      className={`
        group relative flex flex-col gap-0
        rounded-xl border transition-all duration-200
        ${isRedundant ? 'bg-slate-50 border-slate-200' : 'bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-violet-300'}
        target:ring-2 target:ring-violet-500 target:ring-offset-2
      `}
    >
      
      {/* Main Card Content */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 p-4">
        {/* Icon Area */}
        <div className={`
          flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg overflow-hidden
          ${isRedundant ? 'bg-slate-200 grayscale opacity-70' : 'bg-white'}
          shadow-sm border border-slate-100
        `}>
          {!imgError ? (
            <img 
              src={iconUrl} 
              alt={`${app.name} icon`}
              className="w-full h-full object-contain p-1.5"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          ) : (
            <div className={`w-full h-full flex items-center justify-center font-bold text-sm ${isRedundant ? 'text-slate-500' : 'text-violet-600 bg-violet-50'}`}>
              {app.iconFallback}
            </div>
          )}
        </div>

        {/* Main Details */}
        <div className="flex-grow min-w-0 w-full md:w-auto">
          <div className="flex flex-wrap items-center gap-3 mb-1">
            <h3 className={`font-semibold text-lg leading-tight ${isRedundant ? 'text-slate-500 line-through' : 'text-slate-900'}`}>
              <a 
                href={app.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-violet-600 focus:outline-none focus:underline"
              >
                {app.name}
              </a>
            </h3>
            
            {/* Status Dropdown (Click-based) */}
            <div className="relative">
              <button 
                onClick={() => setIsStatusOpen(!isStatusOpen)}
                className={`flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full border cursor-pointer hover:brightness-95 transition-all ${config.bg} ${config.text} ${config.border}`}
              >
                <span>{app.status}</span>
                <ChevronDown size={10} className={`opacity-50 transition-transform ${isStatusOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Content */}
              {isStatusOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsStatusOpen(false)} />
                  <div className="absolute top-full left-0 mt-1 w-32 bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden z-20 animate-in fade-in zoom-in-95 duration-100">
                    {(['Must', 'Just In Time', 'Redundant'] as AppStatus[]).map((s) => (
                      <button
                        key={s}
                        onClick={() => {
                          onUpdate(app.id, { status: s });
                          setIsStatusOpen(false);
                        }}
                        className={`block w-full text-left px-3 py-2 text-xs font-medium hover:bg-slate-50 ${app.status === s ? 'text-violet-600 bg-violet-50' : 'text-slate-600'}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          
          <div className="text-sm text-slate-500 flex flex-wrap gap-x-3">
            <span>{app.category}</span>
          </div>

          {/* Description & Simple Recommendation */}
          <div className="mt-1 space-y-1">
            {/* Simple Recommendation (Legacy or quick edit) */}
            {isRedundant && (app.alternatives?.length === 0) && (
              <div className="flex items-start md:items-center gap-2">
                {isEditingRec ? (
                  <div className="flex items-center gap-2 mt-1 w-full max-w-sm">
                    <input 
                      type="text" 
                      value={recValue}
                      onChange={(e) => setRecValue(e.target.value)}
                      placeholder="Enter recommended app..."
                      className="flex-1 text-sm border-amber-300 bg-amber-50 rounded px-2 py-1 focus:ring-2 focus:ring-amber-500 outline-none"
                      autoFocus
                      onKeyDown={(e) => e.key === 'Enter' && saveRecommendation()}
                    />
                    <button onClick={saveRecommendation} className="p-1 text-emerald-600 hover:bg-emerald-50 rounded"><Check size={14}/></button>
                    <button onClick={() => setIsEditingRec(false)} className="p-1 text-rose-600 hover:bg-rose-50 rounded"><X size={14}/></button>
                  </div>
                ) : (
                  <div 
                    className="group/rec flex items-start md:items-center gap-1.5 text-sm text-amber-700 font-medium bg-amber-50 px-2 py-1 rounded-md mt-1 border border-amber-100 w-fit cursor-pointer hover:bg-amber-100 hover:border-amber-200 transition-colors"
                    onClick={() => {
                      setRecValue(app.recommendation || '');
                      setIsEditingRec(true);
                    }}
                    title="Click to edit recommendation"
                  >
                    <ArrowRight size={14} className="mt-0.5 md:mt-0 flex-shrink-0" />
                    <span>{app.recommendation ? `Recommended: ${app.recommendation}` : 'Add quick recommendation'}</span>
                    <Edit2 size={10} className="opacity-0 group-hover/rec:opacity-50 ml-1 transition-opacity" />
                  </div>
                )}
              </div>
            )}

            {app.description && (
              <p className="text-xs text-slate-400 italic">
                {app.description}
              </p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex-shrink-0 flex items-center gap-2 w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
          <button
            onClick={() => setShowAlternatives(!showAlternatives)}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg transition-colors border
              ${showAlternatives 
                ? 'bg-purple-50 text-purple-700 border-purple-200' 
                : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50'}`}
            title="View Alternatives"
          >
            <Shuffle size={14} />
            <span className="hidden sm:inline">Alternatives</span>
            {alternativesCount > 0 && (
              <span className="bg-slate-100 text-slate-600 px-1.5 rounded-full text-[10px]">{alternativesCount}</span>
            )}
          </button>

          <a 
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group/btn relative flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors border
              ${isRedundant 
                ? 'bg-transparent border-transparent text-slate-400 cursor-not-allowed hover:bg-slate-100' 
                : 'bg-violet-50 border-violet-100 text-violet-700 hover:bg-violet-100 hover:border-violet-200 shadow-sm'
              }`}
          >
            {isRedundant ? (
              <>
                <AlertCircle size={16} />
                <span className="md:hidden lg:inline">Avoid</span>
                {/* Tooltip for Avoid */}
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max max-w-xs bg-slate-800 text-white text-xs rounded px-2 py-1 hidden group-hover/btn:block z-10 shadow-lg">
                  {avoidReason}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                </div>
              </>
            ) : (
              <>
                <Download size={16} />
                <span>Download</span>
              </>
            )}
          </a>
          
          {!isRedundant && (
            <a 
              href={app.url}
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-colors"
              title="Visit Website"
            >
              <ExternalLink size={18} />
            </a>
          )}

          {/* Delete Button with Inline Confirmation */}
          {showDeleteConfirm ? (
            <button 
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(app.id);
                setShowDeleteConfirm(false);
              }}
              onBlur={() => setShowDeleteConfirm(false)}
              className="px-3 py-2 text-xs font-bold text-white bg-rose-500 hover:bg-rose-600 rounded-lg transition-all animate-in fade-in zoom-in duration-200 flex items-center gap-1"
              title="Click to Confirm Deletion"
            >
              Confirm?
            </button>
          ) : (
            <button 
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowDeleteConfirm(true);
              }}
              className="p-2 text-slate-300 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
              title="Remove App"
            >
              <Trash2 size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Alternatives Panel */}
      {showAlternatives && (
        <div className="border-t border-slate-100 bg-slate-50/50 p-4 rounded-b-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between mb-3">
             <h4 className="text-sm font-semibold text-slate-700 flex items-center gap-2">
               <Shuffle size={14} className="text-purple-500" />
               Known Alternatives
             </h4>
             {!isAddingAlt && (
               <button 
                 onClick={() => setIsAddingAlt(true)}
                 className="text-xs flex items-center gap-1 text-violet-600 hover:text-violet-700 font-medium"
               >
                 <Plus size={12} /> Link Existing App
               </button>
             )}
          </div>

          <div className="space-y-2">
            {app.alternatives?.map((alt) => {
              const linkUrl = alt.url || `https://www.google.com/search?q=${encodeURIComponent(alt.name + ' download')}`;
              const isInternalLink = !!alt.relatedAppId;
              
              return (
              <div 
                key={alt.id} 
                className={`flex items-start gap-3 p-3 rounded-lg border ${alt.isPreferred ? 'bg-amber-50 border-amber-200 shadow-sm' : 'bg-white border-slate-200'}`}
              >
                <div className="mt-0.5">
                  {alt.isPreferred ? <Star size={16} className="text-amber-500 fill-amber-500" /> : <div className="w-4 h-4 rounded-full border border-slate-300" />}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <a 
                      href={isInternalLink ? `#${alt.relatedAppId}` : linkUrl}
                      target={isInternalLink ? undefined : "_blank"}
                      rel={isInternalLink ? undefined : "noopener noreferrer"}
                      className={`font-medium text-sm hover:underline flex items-center gap-1.5 ${alt.isPreferred ? 'text-amber-900 hover:text-amber-700' : 'text-violet-700 hover:text-violet-800'}`}
                      onClick={(e) => {
                        if(isInternalLink && alt.relatedAppId) {
                           e.preventDefault();
                           document.getElementById(alt.relatedAppId)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                           // Briefly highlight the target
                           setTimeout(() => document.getElementById(alt.relatedAppId)?.classList.add('ring-2', 'ring-violet-500'), 500);
                           setTimeout(() => document.getElementById(alt.relatedAppId)?.classList.remove('ring-2', 'ring-violet-500'), 2500);
                        }
                      }}
                    >
                      {alt.name}
                      {isInternalLink ? <LinkIcon size={12} className="opacity-50" /> : <ExternalLink size={12} className="opacity-50" />}
                      {alt.isPreferred && <span className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full uppercase tracking-wide font-bold no-underline w-fit">Preferred</span>}
                    </a>
                    <button onClick={() => removeAlternative(alt.id)} className="text-slate-300 hover:text-rose-500 transition-colors ml-2">
                      <X size={14} />
                    </button>
                  </div>
                  {alt.reason && (
                    <p className="text-xs text-slate-500 mt-0.5">
                      <span className="font-medium text-slate-400">Why:</span> {alt.reason}
                    </p>
                  )}
                </div>
              </div>
            )})}
            
            {(!app.alternatives || app.alternatives.length === 0) && !isAddingAlt && (
              <p className="text-sm text-slate-400 italic text-center py-2">No alternatives listed yet.</p>
            )}

            {/* Add Alternative Form */}
            {isAddingAlt && (
              <form onSubmit={handleAddAlternative} className="bg-white border border-violet-200 rounded-lg p-3 shadow-sm animate-in fade-in zoom-in-95">
                <div className="space-y-3">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-slate-500">Select Existing App</label>
                    <select
                        className="w-full text-sm px-2 py-1.5 border border-slate-200 rounded focus:ring-2 focus:ring-violet-500 outline-none bg-white"
                        value={selectedAltAppId}
                        onChange={(e) => setSelectedAltAppId(e.target.value)}
                        autoFocus
                    >
                        <option value="">-- Choose an app --</option>
                        {availableAppsForAlt.map(a => (
                            <option key={a.id} value={a.id}>{a.name}</option>
                        ))}
                    </select>
                    {availableAppsForAlt.length === 0 && (
                        <p className="text-xs text-amber-600">No other apps available to link. Add more apps first.</p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Why is this a good/bad alternative?"
                      className="flex-1 text-sm px-2 py-1.5 border border-slate-200 rounded focus:ring-2 focus:ring-violet-500 outline-none"
                      value={newAltReason}
                      onChange={(e) => setNewAltReason(e.target.value)}
                    />
                     <label className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 px-2 rounded border border-slate-200 cursor-pointer hover:bg-slate-100 select-none">
                      <input 
                        type="checkbox" 
                        checked={newAltPreferred}
                        onChange={(e) => setNewAltPreferred(e.target.checked)}
                        className="rounded text-violet-600 focus:ring-violet-500"
                      />
                      Preferred
                    </label>
                  </div>
                  <div className="flex justify-end gap-2 pt-1">
                    <button 
                      type="button" 
                      onClick={() => setIsAddingAlt(false)} 
                      className="text-xs px-3 py-1.5 text-slate-500 hover:bg-slate-100 rounded"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      disabled={!selectedAltAppId}
                      className="text-xs px-3 py-1.5 bg-violet-600 text-white rounded hover:bg-violet-700 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Link
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AppCard;