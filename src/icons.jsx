import { T } from './tokens';

/* ─── SVG Icons (ODS-matched) ─────────────────────────────── */
export const Ic = {
  /* Bottom nav – Overview: filled house */
  Home: ({ active }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {active
        ? <path d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10.5Z" fill={T.accent}/>
        : <path d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10.5Z" stroke={T.textSub} strokeWidth="1.6" fill="none"/>
      }
      <path d="M9 22V13h6v9" stroke={active ? T.white : T.textSub} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  /* Moments: heart */
  Heart: ({ active }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        stroke={active ? T.accent : T.textSub} strokeWidth="1.6"
        fill={active ? T.accent+'25' : 'none'}/>
    </svg>
  ),
  /* Magenta AI: dotted/sparkle circle */
  AI: ({ active }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke={active ? T.accent : T.textSub} strokeWidth="1.6" strokeDasharray="2.5 2"/>
      <circle cx="12" cy="12" r="2.5" fill={active ? T.accent : T.textSub}/>
    </svg>
  ),
  /* Support: circle with ? */
  Support: ({ active }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={active ? T.accent : T.textSub} strokeWidth="1.6"/>
      <path d="M9.5 9.5a2.5 2.5 0 0 1 4.9.8c0 1.7-2.4 2.2-2.4 4" stroke={active ? T.accent : T.textSub} strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="12" cy="17" r="0.8" fill={active ? T.accent : T.textSub}/>
    </svg>
  ),
  Bell: ({ size=20, color=T.textSub }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  ),
  Settings: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke={T.textSub} strokeWidth="1.7"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke={T.textSub} strokeWidth="1.7"/>
    </svg>
  ),
  Grid: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="7" height="7" rx="1.5" stroke={T.textSub} strokeWidth="1.7"/>
      <rect x="14" y="3" width="7" height="7" rx="1.5" stroke={T.textSub} strokeWidth="1.7"/>
      <rect x="14" y="14" width="7" height="7" rx="1.5" stroke={T.textSub} strokeWidth="1.7"/>
      <rect x="3" y="14" width="7" height="7" rx="1.5" stroke={T.textSub} strokeWidth="1.7"/>
    </svg>
  ),
  Package: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <polyline points="21 8 21 16 12 21 3 16 3 8 12 3 21 8" stroke={T.textSub} strokeWidth="1.7" strokeLinejoin="round"/>
      <polyline points="3.27 6.96 12 12 20.73 6.96" stroke={T.textSub} strokeWidth="1.7"/>
      <line x1="12" y1="22" x2="12" y2="12" stroke={T.textSub} strokeWidth="1.7"/>
    </svg>
  ),
  LogOut: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke={T.destructive} strokeWidth="1.7" strokeLinecap="round"/>
      <polyline points="16 17 21 12 16 7" stroke={T.destructive} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="21" y1="12" x2="9" y2="12" stroke={T.destructive} strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  ),
  ChevronRight: ({ color=T.stroke }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M9 18l6-6-6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  ChevronDown: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M6 9l6 6 6-6" stroke={T.textSub} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Back: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M15 18l-6-6 6-6" stroke={T.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Search: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="8" stroke={T.textSub} strokeWidth="1.7"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65" stroke={T.textSub} strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  ),
  X: ({ color=T.textSub }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <line x1="18" y1="6" x2="6" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <line x1="6" y1="6" x2="18" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Doc: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke={T.textSub} strokeWidth="1.7"/>
      <polyline points="14 2 14 8 20 8" stroke={T.textSub} strokeWidth="1.7"/>
    </svg>
  ),
  Check: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <polyline points="20 6 9 17 4 12" stroke={T.white} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Arrow: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M12 5l7 7-7 7" stroke={T.text} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  ThumbUp: ({ filled }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={filled ? T.success : 'none'}>
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" stroke={filled ? T.success : T.textSub} strokeWidth="1.7"/>
      <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" stroke={filled ? T.success : T.textSub} strokeWidth="1.7"/>
    </svg>
  ),
  ThumbDown: ({ filled }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={filled ? T.destructive : 'none'}>
      <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z" stroke={filled ? T.destructive : T.textSub} strokeWidth="1.7"/>
      <path d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" stroke={filled ? T.destructive : T.textSub} strokeWidth="1.7"/>
    </svg>
  ),
};

/* ─── T Logo (offizielles Telekom-SVG) ────────────────────── */
export function TLogo() {
  return (
    <div style={{ width:36, height:36, display:'flex', alignItems:'center', justifyContent:'center' }}>
      <svg width="30" height="36" viewBox="0 0 840 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#E20074" d="M200,660H0V460h200V660z M0,0v340h60v-10c0-160,90-260,260-260h10v720c0,100-40,140-140,140h-30v70h520v-70h-30c-100,0-140-40-140-140V70h10c170,0,260,100,260,260v10h60V0H0z M640,660h200V460H640V660z"/>
      </svg>
    </div>
  );
}
