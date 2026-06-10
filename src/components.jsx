import { useState } from 'react';
import { ODSBadgeNumber, ODSTagStatic, ODSButton } from '@telekom-ods/react-ui-kit-base';
import { T } from './tokens';
import { Ic } from './icons';

/* ─── Status Bar ──────────────────────────────────────────── */
export function StatusBar() {
  return (
    <div style={{ height:50, display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 28px 0 24px', flexShrink:0 }}>
      <span style={{ fontSize:15, fontWeight:600, letterSpacing:0.2 }}>9:41</span>
      <div style={{ display:'flex', gap:7, alignItems:'center' }}>
        {/* Signal bars */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill={T.text}>
          <rect x="0" y="7" width="3" height="5" rx="0.5"/>
          <rect x="4.5" y="4.5" width="3" height="7.5" rx="0.5"/>
          <rect x="9" y="2" width="3" height="10" rx="0.5"/>
          <rect x="13.5" y="0" width="3" height="12" rx="0.5" opacity="0.28"/>
        </svg>
        {/* WiFi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill={T.text}>
          <path d="M8 9.5C8.9 9.5 9.6 10.2 9.6 11.1C9.6 12 8.9 12.7 8 12.7C7.1 12.7 6.4 12 6.4 11.1C6.4 10.2 7.1 9.5 8 9.5Z" transform="scale(1,0.9)"/>
          <path d="M8 6.5C9.8 6.5 11.3 7.3 12.3 8.6L13.5 7.3C12.1 5.6 10.2 4.5 8 4.5C5.8 4.5 3.9 5.6 2.5 7.3L3.7 8.6C4.7 7.3 6.2 6.5 8 6.5Z"/>
          <path d="M8 3.5C11 3.5 13.6 4.9 15.2 7.1L16 6.1C14.1 3.6 11.2 2 8 2C4.8 2 1.9 3.6 0 6.1L0.8 7.1C2.4 4.9 5 3.5 8 3.5Z" opacity="0.4"/>
        </svg>
        {/* Battery */}
        <div style={{ display:'flex', alignItems:'center', gap:1 }}>
          <div style={{ width:24, height:12, border:`1.5px solid ${T.text}`, borderRadius:3.5, padding:'1.5px', position:'relative' }}>
            <div style={{ width:'78%', height:'100%', background:T.text, borderRadius:1.5 }}/>
          </div>
          <div style={{ width:2, height:6, background:T.text, borderRadius:'0 1px 1px 0', opacity:0.4 }}/>
        </div>
      </div>
    </div>
  );
}

/* ─── ODS Bottom Navigation ───────────────────────────────── */
export function ODSBottomNav({ active='overview' }) {
  const tabs = [
    { id:'overview', label:'Start',    Icon:Ic.Home    },
    { id:'moments',  label:'Momente',  Icon:Ic.Heart   },
    { id:'support',  label:'Support',  Icon:Ic.Support },
  ];
  return (
    <div style={{
      position:'absolute', bottom:0, left:0, right:0,
      background:T.white,
      borderTop:`1px solid ${T.stroke}`,
      display:'flex', height:83, paddingBottom:22,
      zIndex:5,
    }}>
      {tabs.map(({ id, label, Icon }) => {
        const on = active === id;
        return (
          <div key={id} style={{
            flex:1, display:'flex', flexDirection:'column', alignItems:'center',
            justifyContent:'center', gap:3, cursor:'pointer', minHeight:48,
            color: on ? T.accent : T.textSub,
          }}>
            <Icon active={on} />
            <span style={{ fontSize:10, fontWeight: on ? 700 : 500, lineHeight:1, letterSpacing:0.1 }}>
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/* ─── ODS Badge Number (Kit) ──────────────────────────────── */
export function Badge({ n, size='md' }) {
  if (!n) return null;
  return <ODSBadgeNumber variant="notification" size="standard" notificationNumber={n} />;
}

/* ─── ODS Tag / Chip ──────────────────────────────────────── */
export function Chip({ label, variant='default', sm }) {
  const map = {
    actionRequired: { bg:T.accent+'18', color:T.accent,    border:`1px solid ${T.accent}50` },
    noActionNeeded: { bg:T.bgSubtle,    color:T.textSub,   border:`1px solid ${T.stroke}` },
    service:        { bg:T.bgSubtle,    color:T.textSub,   border:`1px solid ${T.stroke}` },
    success:        { bg:T.success+'18',color:T.success,   border:`1px solid ${T.success}50` },
    default:        { bg:T.bgSubtle,    color:T.textSub,   border:`1px solid ${T.stroke}` },
  };
  const s = map[variant] || map.default;
  return (
    <span style={{
      background:s.bg, color:s.color, border:s.border, borderRadius:999,
      padding: sm ? '2px 8px' : '3px 10px',
      fontSize: sm ? 11 : 12, fontWeight:600, lineHeight:'16px',
      whiteSpace:'nowrap', display:'inline-flex', alignItems:'center', gap:4,
    }}>{label}</span>
  );
}

/* ─── ODS Button (Kit) ────────────────────────────────────── */
export function Btn({ label, variant='primary', sm, full, onClick }) {
  return (
    <ODSButton
      label={label}
      variant={variant === 'primary' ? 'primary' : 'outline'}
      size={sm ? 'small' : 'large'}
      onClick={onClick}
      style={full ? { width:'100%' } : undefined}
    />
  );
}

/* ─── Data usage bar (ODS card detail) ───────────────────── */
export function DataBar({ pct=0.72, used='4.2', total='20', dark=false }) {
  const trackBg = dark ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.25)';
  const fillBg  = dark ? T.text             : T.white;
  const subCol  = dark ? T.textSub          : 'rgba(255,255,255,0.65)';
  return (
    <div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:6 }}>
        <p style={{ fontSize:14, fontWeight:500, color:T.text }}>
          <strong style={{ fontWeight:700 }}>{used} GB</strong> verbleibend
        </p>
        <p style={{ fontSize:11, color:subCol }}>{used} / {total} GB</p>
      </div>
      <div style={{ height:5, borderRadius:999, background:trackBg, overflow:'hidden' }}>
        <div style={{ width:`${pct*100}%`, height:'100%', background:fillBg, borderRadius:999 }}/>
      </div>
    </div>
  );
}

/* ─── ODS Tag Static — NEW=Kit type "promotion" (accent);
       grauer Service-Tag existiert im Kit nicht als Typ (Figma färbt um) */
export function TagStatic({ label, accent }) {
  if (accent) return <ODSTagStatic label={label} type="promotion" />;
  return (
    <div style={{
      display:'inline-flex', alignItems:'center',
      height:20, padding:'0 8px', borderRadius:6,
      background:'#616161', flexShrink:0,
    }}>
      <span style={{ fontSize:12, fontWeight:655, color:T.white, fontVariationSettings:'"wdth" 100', whiteSpace:'nowrap', lineHeight:'15.6px' }}>
        {label}
      </span>
    </div>
  );
}

/* ─── Notification Card (ODS: OA Critical Notification Single) */
export function NotifCard({ n, onTap }) {
  const isPrimary = n.ctaVariant === 'primary';
  return (
    <div onClick={()=>onTap && onTap(n)} style={{
      background: T.bgSubtle, borderRadius:16,
      padding:16, marginBottom:16, cursor: onTap ? 'pointer' : 'default',
    }}>
      {/* Meta row: tags left, date right */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16 }}>
        <div style={{ display:'flex', gap:8, alignItems:'center' }}>
          {n.isNew && <TagStatic label="NEW" accent />}
          <TagStatic label={n.service} accent={false} />
        </div>
        <span style={{ fontSize:14, fontWeight:500, color:T.text, fontVariationSettings:'"wdth" 100', whiteSpace:'nowrap' }}>
          {n.date}
        </span>
      </div>
      {/* Text */}
      <p style={{ fontSize:16, fontWeight:655, color:T.text, lineHeight:'20px', fontVariationSettings:'"wdth" 100', marginBottom:4 }}>
        {n.headline}
      </p>
      <p style={{ fontSize:14, fontWeight:500, color:T.text, lineHeight:'17.5px', fontVariationSettings:'"wdth" 100' }}>
        {n.summary}
      </p>
      {/* CTA */}
      {n.cta && (
        <div style={{ display:'flex', justifyContent:'flex-end', marginTop:16 }}>
          <ODSButton
            label={n.cta}
            variant={isPrimary ? 'primary' : 'secondary'}
            size="small"
            onClick={e=>{ e.stopPropagation(); onTap && onTap(n); }}
          />
        </div>
      )}
    </div>
  );
}

/* ─── Profile Bottom Sheet ────────────────────────────────── */
export function ProfileSheet({ onClose, onNotifs, unread }) {
  return (
    <>
      <div onClick={onClose} className="fade-in" style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.38)', zIndex:50 }}/>
      <div className="slide-up" style={{
        position:'absolute', bottom:0, left:0, right:0, zIndex:51,
        background:T.white, borderRadius:'24px 24px 0 0', overflow:'hidden',
      }}>
        {/* Handle */}
        <div style={{ display:'flex', justifyContent:'center', padding:'12px 0 6px' }}>
          <div style={{ width:36, height:4, background:T.stroke, borderRadius:999 }}/>
        </div>

        {/* User row */}
        <div style={{ display:'flex', alignItems:'center', gap:14, padding:'10px 20px 16px', borderBottom:`1px solid ${T.stroke}` }}>
          <div style={{
            width:52, height:52, borderRadius:'50%', flexShrink:0,
            background:'#7C3AED', display:'flex', alignItems:'center', justifyContent:'center',
          }}>
            <span style={{ color:T.white, fontSize:18, fontWeight:700, letterSpacing:0.5 }}>JM</span>
          </div>
          <div>
            <p style={{ fontSize:17, fontWeight:700, color:T.text }}>Jana Meyer</p>
            <p style={{ fontSize:13, color:T.textSub }}>Customer #: 4892-1743</p>
          </div>
        </div>

        {/* Menu */}
        {[
          { icon:<Ic.Bell color={T.accent}/>, label:'Benachrichtigungen', badge:unread, action:onNotifs, bold:true },
          { icon:<Ic.Settings />,             label:'Einstellungen',               action:onClose },
          { icon:<Ic.Grid />,                 label:'Manage and connect services', action:onClose },
          { icon:<Ic.Package />,              label:'Order Management',            action:onClose },
          { icon:<Ic.LogOut />,               label:'Log out',                     action:onClose, red:true },
        ].map(({ icon, label, badge, action, bold, red }) => (
          <button key={label} onClick={action} style={{
            width:'100%', display:'flex', alignItems:'center', gap:14,
            padding:'14px 20px', borderBottom:`1px solid ${T.stroke}50`,
            cursor:'pointer', color: red ? T.destructive : T.text,
          }}>
            <span style={{ width:24, flexShrink:0 }}>{icon}</span>
            <span style={{ fontSize:16, fontWeight: bold ? 700 : 500, flex:1, textAlign:'left',
              color: red ? T.destructive : T.text }}>
              {label}
            </span>
            {badge > 0 && <Badge n={badge} />}
            {!red && <Ic.ChevronRight />}
          </button>
        ))}
        <div style={{ height:32 }}/>
      </div>
    </>
  );
}
