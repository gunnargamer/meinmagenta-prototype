import { useState } from 'react';
import { T } from './tokens';
import { NOTIFS } from './data';
import { ProfileSheet } from './components';
import { OverviewScreen, NotifCenter, InvoiceDetail } from './screens';

export default function App() {
  const [screen, setScreen]     = useState('overview');
  const [sheet, setSheet]       = useState(false);
  const [notifs, setNotifs]     = useState(NOTIFS);
  const [selected, setSelected] = useState(null);
  const unread = notifs.filter(n=>!n.isRead).length;

  const openCard = (n) => {
    setNotifs(prev => prev.map(x => x.id===n.id ? {...x, isRead:true} : x));
    setSelected(n);
    setScreen('detail');
  };

  return (
    <div style={{ width:390, height:844, position:'relative', background:T.bg, overflow:'hidden', borderRadius:'inherit' }}>
      <OverviewScreen onAvatar={()=>setSheet(true)} unread={unread} onViewBills={()=>setScreen('center')} />

      {(screen==='center'||screen==='detail') && (
        <NotifCenter
          onBack={()=>setScreen('overview')}
          onCard={openCard}
          notifs={notifs}
        />
      )}

      {screen==='detail' && selected && (
        <InvoiceDetail onBack={()=>setScreen('center')} />
      )}

      {sheet && screen==='overview' && (
        <ProfileSheet
          onClose={()=>setSheet(false)}
          onNotifs={()=>{ setSheet(false); setScreen('center'); }}
          unread={unread}
        />
      )}
    </div>
  );
}
