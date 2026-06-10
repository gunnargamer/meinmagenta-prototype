import { useState } from 'react';
import { ODSSegmentedButton, ODSSegments } from '@telekom-ods/react-ui-kit-base';
import { T } from './tokens';
import { Ic, TLogo } from './icons';
import { StatusBar, ODSBottomNav, Badge, Chip, Btn, DataBar, NotifCard } from './components';

/* ─── SCREEN 1: Overview ──────────────────────────────────── */
export function OverviewScreen({ onAvatar, unread, onViewBills }) {
  const tabs = ['Mobil', 'Internet', 'TV'];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div style={{ height:'100%', background:T.bg, display:'flex', flexDirection:'column' }}>
      <StatusBar />

      {/* ── ODS Main Page Header ── */}
      <div style={{ display:'flex', flexDirection:'column', gap:24, paddingTop:24, paddingBottom:8 }}>

        {/* Header row: Logo | Icons */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingTop:16, paddingBottom:8, paddingLeft:16, paddingRight:16 }}>
          <TLogo />

          {/* Icons List Container: M1 + avatar */}
          <div style={{ display:'flex', alignItems:'center', gap:16 }}>

            {/* ODS M1 badge — circle per Figma spec */}
            <div style={{
              width:36, height:36, borderRadius:'50%', background:T.accent,
              display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
            }}>
              <span style={{ color:T.white, fontSize:14, fontWeight:800, letterSpacing:-0.3, fontVariationSettings:'"wdth" 100' }}>M1</span>
            </div>

            {/* Avatar with notification badge */}
            <button onClick={onAvatar} style={{ position:'relative', cursor:'pointer', background:'none', padding:0 }}>
              <div style={{
                width:36, height:36, borderRadius:'50%',
                background:'#7C3AED',
                display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
              }}>
                <span style={{ color:T.white, fontSize:13, fontWeight:700, letterSpacing:0.5 }}>JM</span>
              </div>
              <div style={{ position:'absolute', top:-4, right:-4 }}>
                <Badge n={unread} />
              </div>
            </button>
          </div>
        </div>

        {/* Title */}
        <div style={{ display:'flex', flexDirection:'column', gap:8, paddingLeft:16, paddingRight:16 }}>
          <p style={{ fontSize:20, fontWeight:550, color:T.text, lineHeight:'26px', fontVariationSettings:'"wdth" 100' }}>Willkommen zurück,</p>
          <p style={{ fontSize:32, fontWeight:655, color:T.text, lineHeight:'32px', fontVariationSettings:'"wdth" 100' }}>Jana Meyer</p>
        </div>

        {/* ODSSegmentedButton (Kit) — variant=fill, size=large, type=primary */}
        <div style={{ padding:'0 8px 16px' }}>
          <ODSSegmentedButton variant="fill" size="large" type="primary" onChange={setActiveTab}>
            {tabs.map((label, i) => (
              <ODSSegments key={label} label={label} selected={i === activeTab} />
            ))}
          </ODSSegmentedButton>
        </div>
      </div>

      {/* ── Scrollable content ── */}
      <div className="scroll-area" style={{ flex:1, padding:'0 8px', paddingBottom:100 }}>

        {/* ── Card 1: Contract (ODS Anchored Image Card) ── */}
        <div style={{ background:T.bgSubtle, borderRadius:16, overflow:'hidden', marginBottom:16, position:'relative' }}>
          {/* M1 badge top-right */}
          <div style={{
            position:'absolute', top:12, right:12,
            width:36, height:36, borderRadius:'50%', background:T.accent,
            display:'flex', alignItems:'center', justifyContent:'center', zIndex:1,
          }}>
            <span style={{ color:T.white, fontSize:12, fontWeight:800, fontVariationSettings:'"wdth" 100' }}>M1</span>
          </div>

          <div style={{ display:'flex', alignItems:'flex-start', padding:'20px 16px 16px' }}>
            {/* Left: number + product + data bar */}
            <div style={{ flex:1 }}>
              <p style={{ fontSize:22, fontWeight:800, color:T.text, lineHeight:'26px', fontVariationSettings:'"wdth" 100', marginBottom:2 }}>+49 111 111 1111</p>
              <p style={{ fontSize:13, color:T.textSub, marginBottom:16, fontVariationSettings:'"wdth" 100' }}>MagentaMobil PlusKarte</p>
              <DataBar pct={0.58} dark />
            </div>
            {/* Right: phone image placeholder */}
            <div style={{
              width:80, height:110, marginLeft:16, flexShrink:0, borderRadius:12,
              background:'rgba(0,0,0,0.06)',
              display:'flex', alignItems:'center', justifyContent:'center',
            }}>
              <svg width="32" height="54" viewBox="0 0 32 54" fill="none">
                <rect x="1" y="1" width="30" height="52" rx="5" stroke="rgba(0,0,0,0.25)" strokeWidth="1.5"/>
                <circle cx="16" cy="47" r="2" fill="rgba(0,0,0,0.2)"/>
                <rect x="10" y="4" width="12" height="1.5" rx="0.75" fill="rgba(0,0,0,0.15)"/>
              </svg>
            </div>
          </div>
          <div style={{ display:'flex', justifyContent:'flex-end', padding:'0 16px 12px' }}>
            <Ic.Arrow />
          </div>
        </div>

        {/* ── Card 2: Rechnungen verwalten (Quick Action Card) ── */}
        <div style={{ background:T.bgSubtle, borderRadius:16, padding:'24px', marginBottom:16, display:'flex', alignItems:'center', gap:24, cursor:'pointer' }} onClick={onViewBills}>
          <div style={{ flex:1 }}>
            <p style={{ fontSize:20, fontWeight:655, color:T.text, lineHeight:'24px', fontVariationSettings:'"wdth" 100', marginBottom:4 }}>Rechnungen verwalten</p>
            <p style={{ fontSize:16, fontWeight:655, color:T.text, lineHeight:'20px', fontVariationSettings:'"wdth" 100', marginBottom:16 }}>Rechnungskonto 483 348 491 48</p>
            <div style={{ display:'inline-flex', alignItems:'center', height:24, padding:'0 10px', borderRadius:6, background:T.bgSubtle, border:`1px solid ${T.stroke}` }}>
              <span style={{ fontSize:12, fontWeight:655, color:T.textSub, fontVariationSettings:'"wdth" 100' }}>Fällig: 15. Juni</span>
            </div>
          </div>
          <Ic.Arrow />
        </div>

        {/* ── Card 3: Promo Carousel (teal) ── */}
        <div style={{ background:T.bgCard, borderRadius:16, overflow:'hidden', marginBottom:16 }}>
          <div style={{ display:'flex', alignItems:'flex-start', padding:'20px 16px 16px', gap:12 }}>
            <div style={{ flex:1 }}>
              <p style={{ fontSize:15, fontWeight:655, color:T.text, lineHeight:'20px', fontVariationSettings:'"wdth" 100' }}>
                Neues iPhone 16: 3 Kameras, neue Farben. Jetzt in den Shops ansehen oder direkt in der App bestellen.
              </p>
            </div>
            {/* Image placeholder */}
            <div style={{
              width:72, height:90, borderRadius:10, flexShrink:0,
              background:'rgba(0,0,0,0.10)',
              display:'flex', alignItems:'center', justifyContent:'center',
            }}>
              <svg width="28" height="46" viewBox="0 0 28 46" fill="none">
                <rect x="1" y="1" width="26" height="44" rx="4" stroke="rgba(0,0,0,0.2)" strokeWidth="1.2"/>
                <circle cx="14" cy="40" r="1.5" fill="rgba(0,0,0,0.15)"/>
              </svg>
            </div>
          </div>
          {/* Carousel dots */}
          <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:6, paddingBottom:14 }}>
            {[0,1,2,3,4].map(i => (
              <div key={i} style={{ width: i===0 ? 8 : 6, height: i===0 ? 8 : 6, borderRadius:'50%', background: i===0 ? T.text : 'rgba(0,0,0,0.2)' }} />
            ))}
          </div>
        </div>
      </div>

      <ODSBottomNav active="overview" />
    </div>
  );
}

/* ─── SCREEN 2: Notification Center ──────────────────────── */
export function NotifCenter({ onBack, onCard, notifs }) {
  const [q, setQ] = useState('');
  const [filter, setFilter] = useState('all');
  const filters = [
    { id:'all', label:'Alle' },
    { id:'invoice', label:'Rechnungen' },
    { id:'contract', label:'Verträge' },
  ];
  const filtered = notifs.filter(n => {
    const fok = filter==='all' || n.type===filter;
    const term = q.toLowerCase();
    const qok = !q || [n.headline, n.summary, n.service, n.date, n.cta, n.type, n.contractId]
      .filter(Boolean).some(s => s.toLowerCase().includes(term));
    return fok && qok;
  });
  const unread = notifs.filter(n => !n.isRead).length;

  return (
    <div className="slide-right" style={{ position:'absolute', inset:0, background:T.white, display:'flex', flexDirection:'column', zIndex:10 }}>
      <StatusBar />

      {/* ODS Subpage Header */}
      <div style={{ display:'flex', alignItems:'center', padding:'12px 8px', flexShrink:0, background:T.white }}>
        <div style={{ flex:1, display:'flex', alignItems:'center' }}>
          <button onClick={onBack} style={{ padding:6, cursor:'pointer', display:'flex', alignItems:'center', borderRadius:999 }}>
            <Ic.Back />
          </button>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <h1 style={{ fontSize:20, fontWeight:655, color:T.text, fontVariationSettings:'"wdth" 100', lineHeight:'24px' }}>Benachrichtigungen</h1>
          <Badge n={unread} />
        </div>
        <div style={{ flex:1 }} />
      </div>

      {/* Search — ODS Input Field style: magenta border, icon in circle right */}
      <div style={{ padding:'0 10px 16px', flexShrink:0 }}>
        <div style={{
          display:'flex', alignItems:'center', justifyContent:'space-between',
          height:60, borderRadius:30, padding:'14px 16px 14px 24px',
          border:`2px solid ${T.accent}`,
        }}>
          <input value={q} onChange={e=>setQ(e.target.value)}
            placeholder="Wonach suchen Sie?"
            style={{ flex:1, background:'none', border:'none', outline:'none',
              fontSize:16, fontWeight:655, color: q ? T.text : T.textSub,
              fontVariationSettings:'"wdth" 100' }}/>
          <div style={{
            width:32, height:32, borderRadius:25, background:T.bgSubtle,
            display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
          }}>
            <Ic.Search />
          </div>
        </div>
      </div>

      {/* Filter chips — ODS Toggle Chip */}
      <div style={{ display:'flex', gap:8, padding:'0 10px 16px', flexShrink:0 }}>
        {filters.map(f => {
          const active = filter === f.id;
          return (
            <button key={f.id} onClick={()=>setFilter(f.id)} style={{
              flexShrink:0, borderRadius:999, padding:'8px 16px', cursor:'pointer',
              fontSize:14, fontWeight:655, fontVariationSettings:'"wdth" 100',
              background: active ? T.text : T.white,
              color: active ? T.white : T.text,
              border: `1px solid ${active ? T.text : T.stroke}`,
              display:'flex', alignItems:'center', gap:6,
              transition:'background 0.15s',
            }}>
              {f.label}
              {active && <span style={{ fontSize:10, opacity:0.7 }}>▾</span>}
            </button>
          );
        })}
      </div>

      {/* Feed */}
      <div className="scroll-area" style={{ flex:1, padding:'0 10px 80px' }}>
        {filtered.length === 0 ? (
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', paddingTop:60, gap:12 }}>
            <div style={{ width:72, height:72, borderRadius:'50%', background:T.bgSubtle, display:'flex', alignItems:'center', justifyContent:'center' }}>
              <Ic.Bell size={32} />
            </div>
            <p style={{ fontSize:18, fontWeight:655, color:T.text }}>Keine Benachrichtigungen gefunden</p>
            <p style={{ fontSize:14, color:T.textSub, textAlign:'center', maxWidth:240 }}>Anderen Filter oder Suchbegriff verwenden.</p>
          </div>
        ) : (
          filtered.map(n => <NotifCard key={n.id} n={n} onTap={onCard} />)
        )}
      </div>
    </div>
  );
}

/* ─── SCREEN 3: Invoice AI Explainer (Bottom Sheet) ───────── */
export function InvoiceDetail({ onBack }) {
  const [expanded, setExpanded] = useState(false);
  const [fb, setFb] = useState(null);

  return (
    <>
      {/* Dimmed overlay */}
      <div onClick={onBack} className="fade-in" style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.4)', zIndex:20 }} />

      {/* Bottom sheet */}
      <div className="slide-up" style={{
        position:'absolute', bottom:0, left:0, right:0, zIndex:21,
        background:T.bg, borderRadius:'24px 24px 0 0',
        maxHeight:'92%', display:'flex', flexDirection:'column', overflow:'hidden',
      }}>
        {/* Handle + header */}
        <div style={{ background:T.white, borderRadius:'24px 24px 0 0', flexShrink:0 }}>
          <div style={{ display:'flex', justifyContent:'center', padding:'12px 0 6px' }}>
            <div style={{ width:36, height:4, background:T.stroke, borderRadius:999 }} />
          </div>
          <div style={{ display:'flex', alignItems:'center', padding:'4px 13.5px 12px' }}>
            <div style={{ flex:1, display:'flex', alignItems:'center' }}>
              <button onClick={onBack} style={{ padding:6, cursor:'pointer', display:'flex', alignItems:'center', borderRadius:999 }}>
                <Ic.Back />
              </button>
            </div>
            <h1 style={{ fontSize:18, fontWeight:655, color:T.text, fontVariationSettings:'"wdth" 100', lineHeight:'23px', textAlign:'center' }}>Rechnung Internet — Juni 2026</h1>
            <div style={{ flex:1 }} />
          </div>
        </div>

      <div className="scroll-area" style={{ flex:1, padding:'0 16px 32px', overflowY:'auto' }}>
        <div style={{ marginBottom:14 }}>
          <Chip label="MagentaZuhause · Internet" variant="service" />
        </div>

        {/* AI block */}
        <div style={{ background:T.white, borderRadius:16, overflow:'hidden', border:`1px solid ${T.stroke}`, boxShadow:'0 2px 10px rgba(0,0,0,0.05)', marginBottom:14 }}>
          {/* AI header */}
          <div style={{ background:`linear-gradient(135deg,${T.accent}12,${T.accent}05)`, padding:'16px 16px 12px', borderBottom:`1px solid ${T.stroke}` }}>
            <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:8 }}>
              <div style={{ width:28, height:28, borderRadius:'50%', background:T.accent, display:'flex', alignItems:'center', justifyContent:'center', color:T.white, fontSize:12, fontWeight:800 }}>AI</div>
              <span style={{ fontSize:12, fontWeight:600, color:T.textSub }}>Magenta AI Erklärung</span>
            </div>
            <h2 style={{ fontSize:20, fontWeight:800, lineHeight:'25px', color:T.text, fontVariationSettings:'"wdth" 100' }}>Ihre Rechnung ist um 4,20 € gestiegen</h2>
          </div>

          <div style={{ padding:16 }}>
            <p style={{ fontSize:15, color:T.textSub, lineHeight:'21px', marginBottom:14 }}>
              Ihr 6-Monats-Rabatt ist am 1. Juni ausgelaufen. Das ist jetzt der reguläre Preis für Ihren Fibre 1000 Tarif.
            </p>

            {/* Anomaly chip */}
            <div style={{ background:T.success+'12', border:`1px solid ${T.success}40`, borderRadius:10, padding:'10px 12px', marginBottom:14, display:'flex', alignItems:'center', gap:8 }}>
              <div style={{ width:20, height:20, borderRadius:'50%', background:T.success, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                <Ic.Check />
              </div>
              <p style={{ fontSize:13, color:T.success, fontWeight:700 }}>Diese Erhöhung ist planmäßig – Sie müssen nichts tun.</p>
            </div>

            {/* Collapsible detail */}
            <button onClick={()=>setExpanded(!expanded)} style={{
              width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between',
              padding:'10px 0', borderTop:`1px solid ${T.stroke}`,
              borderBottom: expanded ? 'none' : `1px solid ${T.stroke}`,
              cursor:'pointer', background:'none',
            }}>
              <span style={{ fontSize:14, fontWeight:700, color:T.text }}>Was hat sich geändert?</span>
              <span style={{ transform: expanded?'rotate(180deg)':'none', transition:'transform 0.2s' }}>
                <Ic.ChevronDown />
              </span>
            </button>

            {expanded && (
              <div className="fade-in" style={{ borderBottom:`1px solid ${T.stroke}`, paddingBottom:12, marginBottom:0 }}>
                {[
                  { item:'Fibre 1000 Grundpreis',  was:'€54,95', now:'€54,95', delta:null },
                  { item:'6-Monats-Rabatt',         was:'−€4,20', now:'€0,00',  delta:'+€4,20' },
                  { item:'Router-Miete',            was:'€4,00',  now:'€4,00',  delta:null },
                ].map(r => (
                  <div key={r.item} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'9px 0', borderBottom:`1px solid ${T.stroke}50` }}>
                    <span style={{ fontSize:13, color:T.text, flex:1 }}>{r.item}</span>
                    <div style={{ display:'flex', gap:10, alignItems:'center' }}>
                      <span style={{ fontSize:12, color:T.textSub, textDecoration:r.delta?'line-through':'none' }}>{r.was}</span>
                      <span style={{ fontSize:13, fontWeight:700, color:r.delta?T.warning:T.text, minWidth:48, textAlign:'right' }}>{r.now}</span>
                      {r.delta && <Chip label={r.delta} variant="noActionNeeded" sm />}
                    </div>
                  </div>
                ))}
                <div style={{ display:'flex', justifyContent:'space-between', padding:'10px 0', fontWeight:700 }}>
                  <span style={{ fontSize:14 }}>Gesamt diesen Monat</span>
                  <span style={{ fontSize:16, color:T.accent }}>€58.95</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <Btn label="Rechnung als PDF" full />

        {/* Was this helpful? */}
        <div style={{ background:T.white, borderRadius:16, padding:16, margin:'12px 0', border:`1px solid ${T.stroke}`, display:'flex', flexDirection:'column', alignItems:'center', gap:12 }}>
          <p style={{ fontSize:14, fontWeight:700 }}>War die Erklärung hilfreich?</p>
          <div style={{ display:'flex', gap:28 }}>
            {[
              { type:'up',   Icon:Ic.ThumbUp,   label:'Hilfreich',       col:T.success },
              { type:'down', Icon:Ic.ThumbDown, label:'Nicht hilfreich', col:T.destructive },
            ].map(({ type, Icon, label, col }) => (
              <button key={type} onClick={()=>setFb(type)} style={{
                display:'flex', flexDirection:'column', alignItems:'center', gap:5,
                cursor:'pointer', opacity: fb && fb!==type ? 0.35 : 1, transition:'opacity 0.2s',
              }}>
                <Icon filled={fb===type} />
                <span style={{ fontSize:11, color: fb===type ? col : T.textSub, fontWeight:600 }}>{label}</span>
              </button>
            ))}
          </div>
          {fb && (
            <p className="fade-in" style={{ fontSize:12, color:T.success, fontWeight:700, background:T.success+'12', padding:'6px 16px', borderRadius:999 }}>
              {fb==='up' ? 'Danke für Ihr Feedback! 👍' : 'Danke – wir verbessern das.'}
            </p>
          )}
        </div>

        <div style={{ marginTop:4 }}>
          <Btn label="Hilfe anfordern" variant="secondary" full />
        </div>
      </div>
      </div>
    </>
  );
}

/* ─── SCREEN 4: NotifDetail — datengesteuerte Detail-Ansicht ── */
export function NotifDetail({ detail, onBack }) {
  const [expanded, setExpanded] = useState(true);
  const [fb, setFb] = useState(null); // null | 'up' | 'down'

  if (!detail) return null;

  const { aiExplanation: ai, accordion: acc } = detail;

  /* confirmVariant → Farbe + Icon */
  const chipStyles = {
    success: { bg: '#00784512', border: '#00784540', icon: '✓', iconBg: '#007845' },
    warning: { bg: '#D0550012', border: '#D0550040', icon: '⚠', iconBg: '#D05500' },
    info:    { bg: '#0064B412', border: '#0064B440', icon: 'ℹ', iconBg: '#0064B4' },
  };
  const cs = chipStyles[ai.confirmVariant] || chipStyles.info;

  /* Zeige 'previous'-Spalte nur wenn mind. eine Zeile einen Wert hat */
  const showPrev = acc.content.some(r => r.previous !== null);

  /* delta-Farbe */
  const deltaColor = (d) => {
    if (!d) return T.textSub;
    if (d.startsWith('+'))         return T.red;
    if (d.startsWith('−') || d.startsWith('-')) return T.success;
    if (d === 'Keine Änderung')    return T.textSub;
    return T.textSub;
  };

  return (
    <>
      {/* Dimmed overlay */}
      <div onClick={onBack} className="fade-in" style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.4)', zIndex:20 }} />

      {/* Bottom sheet */}
      <div className="slide-up" style={{
        position:'absolute', bottom:0, left:0, right:0, zIndex:21,
        background:T.bg, borderRadius:'24px 24px 0 0',
        maxHeight:'92%', display:'flex', flexDirection:'column', overflow:'hidden',
      }}>
        {/* Handle + header */}
        <div style={{ background:T.white, borderRadius:'24px 24px 0 0', flexShrink:0 }}>
          <div style={{ display:'flex', justifyContent:'center', padding:'12px 0 6px' }}>
            <div style={{ width:36, height:4, background:T.stroke, borderRadius:999 }} />
          </div>
          <div style={{ display:'flex', alignItems:'center', padding:'4px 13.5px 12px' }}>
            <div style={{ flex:1 }}>
              <button onClick={onBack} style={{ padding:6, cursor:'pointer', display:'flex', alignItems:'center', borderRadius:999 }}>
                <Ic.Back />
              </button>
            </div>
            <h1 style={{ fontSize:18, fontWeight:655, color:T.text, fontVariationSettings:'"wdth" 100', lineHeight:'23px', textAlign:'center', flex:2 }}>
              {detail.title}
            </h1>
            <div style={{ flex:1 }} />
          </div>
        </div>

        {/* Scrollable body */}
        <div className="scroll-area" style={{ flex:1, padding:'0 16px 40px', overflowY:'auto' }}>

          {/* Service chip */}
          <div style={{ marginBottom:14 }}>
            <Chip label={detail.serviceChip} variant="service" />
          </div>

          {/* AI block */}
          <div style={{ background:T.white, borderRadius:16, overflow:'hidden', border:`1px solid ${T.stroke}`, boxShadow:'0 2px 10px rgba(0,0,0,0.05)', marginBottom:14 }}>
            <div style={{ background:`linear-gradient(135deg,${T.accent}12,${T.accent}05)`, padding:'16px 16px 12px', borderBottom:`1px solid ${T.stroke}` }}>
              <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:8 }}>
                <div style={{ width:28, height:28, borderRadius:'50%', background:T.accent, display:'flex', alignItems:'center', justifyContent:'center', color:T.white, fontSize:12, fontWeight:800 }}>AI</div>
                <span style={{ fontSize:12, fontWeight:600, color:T.textSub }}>Magenta AI Erklärung</span>
              </div>
              <h2 style={{ fontSize:20, fontWeight:800, lineHeight:'25px', color:T.text, fontVariationSettings:'"wdth" 100' }}>{ai.headline}</h2>
            </div>
            <div style={{ padding:16 }}>
              <p style={{ fontSize:15, color:T.textSub, lineHeight:'21px', marginBottom:14 }}>{ai.body}</p>
              {/* Confirm chip */}
              <div style={{ background:cs.bg, border:`1px solid ${cs.border}`, borderRadius:10, padding:'10px 12px', display:'flex', alignItems:'flex-start', gap:8 }}>
                <div style={{ width:20, height:20, borderRadius:'50%', background:cs.iconBg, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, color:T.white, fontSize:11, fontWeight:700, marginTop:1 }}>
                  {cs.icon}
                </div>
                <span style={{ fontSize:13, color:T.text, lineHeight:'18px' }}>{ai.confirmChip}</span>
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div style={{ background:T.white, borderRadius:16, border:`1px solid ${T.stroke}`, marginBottom:14, overflow:'hidden' }}>
            <button onClick={() => setExpanded(e => !e)} style={{
              width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between',
              padding:'14px 16px', cursor:'pointer', background:'none',
            }}>
              <span style={{ fontSize:15, fontWeight:655, color:T.text, fontVariationSettings:'"wdth" 100' }}>{acc.label}</span>
              <span style={{ fontSize:18, color:T.textSub, transform: expanded ? 'rotate(180deg)' : 'none', transition:'transform 0.2s' }}>›</span>
            </button>
            {expanded && (
              <div style={{ borderTop:`1px solid ${T.stroke}` }}>
                {acc.content.map((row, i) => (
                  <div key={i} style={{
                    display:'grid',
                    gridTemplateColumns: showPrev ? '1fr 1fr 1fr 72px' : '1fr 1fr 72px',
                    gap:8, padding:'10px 16px',
                    borderBottom: i < acc.content.length - 1 ? `1px solid ${T.stroke}50` : 'none',
                    alignItems:'center',
                  }}>
                    <span style={{ fontSize:13, color:T.textSub }}>{row.label}</span>
                    {showPrev && <span style={{ fontSize:13, color:T.textSub, textAlign:'right' }}>{row.previous ?? '—'}</span>}
                    <span style={{ fontSize:13, fontWeight:600, color:T.text, textAlign:'right' }}>{row.current}</span>
                    <span style={{ fontSize:12, fontWeight:600, color: deltaColor(row.delta), textAlign:'right' }}>
                      {row.delta ?? ''}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Primary CTA */}
          {detail.primaryCta && (
            <div style={{ marginBottom:12 }}>
              <button style={{
                width:'100%', height:52, borderRadius:999,
                background:T.accent, color:T.white,
                fontSize:16, fontWeight:655, fontVariationSettings:'"wdth" 100',
                cursor:'pointer', border:'none',
              }}>{detail.primaryCta}</button>
            </div>
          )}

          {/* Feedback block */}
          {detail.feedbackBlock && (
            <div style={{ background:T.white, borderRadius:16, border:`1px solid ${T.stroke}`, padding:16, marginBottom:12, textAlign:'center' }}>
              {fb ? (
                <p style={{ fontSize:14, color:T.textSub }}>Danke für Ihr Feedback.</p>
              ) : (
                <>
                  <p style={{ fontSize:14, fontWeight:600, color:T.text, marginBottom:12 }}>War die Erklärung hilfreich?</p>
                  <div style={{ display:'flex', gap:12, justifyContent:'center' }}>
                    {[{ val:'up', label:'👍 Hilfreich' }, { val:'down', label:'👎 Nicht hilfreich' }].map(({ val, label }) => (
                      <button key={val} onClick={() => setFb(val)} style={{
                        flex:1, height:44, borderRadius:999, border:`1px solid ${T.stroke}`,
                        background:T.bgSubtle, fontSize:14, fontWeight:600, color:T.text, cursor:'pointer',
                      }}>{label}</button>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Secondary CTA */}
          {detail.secondaryCta && (
            <button style={{
              width:'100%', height:52, borderRadius:999,
              background:'transparent', color:T.text,
              fontSize:16, fontWeight:655, fontVariationSettings:'"wdth" 100',
              cursor:'pointer', border:`1.5px solid ${T.stroke}`,
            }}>{detail.secondaryCta}</button>
          )}

        </div>
      </div>
    </>
  );
}
