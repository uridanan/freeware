export type AppCategory = 
  | 'Development' 
  | 'Media & Creative' 
  | 'Internet & Social' 
  | 'Utilities & System' 
  | 'Office & Productivity' 
  | 'Games & Fun'
  | 'Other';

export type AppStatus = 'Must' | 'Just In Time' | 'Redundant';

export interface AppAlternative {
  id: string;
  name: string;
  reason?: string;
  isPreferred?: boolean;
  url?: string;
  relatedAppId?: string; // ID of the referenced app card
}

export interface AppItem {
  id: string;
  name: string;
  url: string;
  category: AppCategory;
  status: AppStatus;
  description?: string;
  recommendation?: string;
  alternatives?: AppAlternative[];
  iconFallback: string;
  customIcon?: string; 
}