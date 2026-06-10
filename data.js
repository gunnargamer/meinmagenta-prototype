/* ─────────────────────────────────────────────────────────────
   MeinMagenta Prototype — Content Data
   Edit this file to update all screen content without touching UI code.
   ───────────────────────────────────────────────────────────── */

/* ─── User ─────────────────────────────────────────────────── */
const USER = {
  firstName: 'Jana',
  lastName:  'Meyer',
  initials:  'JM',
};

/* ─── Contracts (shown as tabs + cards on Overview) ────────── */
const CONTRACTS = [
  {
    id:      'mobile-1',
    type:    'mobile',
    label:   'Magenta XL',
    number:  '+49 111 111 1111',
    data:    { usedGB: 15.8, totalGB: 20 },
  },
  {
    id:      'mobile-2',
    type:    'mobile',
    label:   'Magenta L',
    number:  '+49 222 222 2222',
    data:    null,
  },
  {
    id:      'home-1',
    type:    'home',
    label:   'Magenta Zuhause Internet',
    number:  null,
    data:    null,
  },
  {
    id:      'tv-1',
    type:    'tv',
    label:   'MagentaTV',
    number:  null,
    data:    null,
  },
];

/* ─── Banners (urgency / promo cards on Overview) ──────────── */
const BANNERS = [
  {
    id:          'bills-ready',
    variant:     'urgent',       // 'urgent' (dark) | 'promo' (light)
    title:       'Ihre Rechnung ist da',
    subtitle:    '2 offene Rechnungen · Fällig am 15. Juni',
    cta:         'Rechnung ansehen',
    ctaAction:   'openInvoice',
    dismissible: false,
  },
  {
    id:          'roaming-promo',
    variant:     'promo',
    title:       'Im Ausland? Wählen Sie Ihr passendes Roaming-Paket. ✈️',
    subtitle:    null,
    cta:         'Roaming-Pakete ansehen',
    ctaAction:   'openRoaming',
    dismissible: true,
  },
];

/* ─── Notifications ─────────────────────────────────────────── */
const NOTIFS = [
  {
    id:         '1',
    type:       'invoice',
    headline:   'Ihre Rechnung ist um 4,20 € gestiegen',
    summary:    'Ihr 6-Monats-Rabatt ist am 1. Juni ausgelaufen. Das ist jetzt der reguläre Preis.',
    service:    'Magenta Zuhause Internet',
    date:       'heute, 13:16',
    isNew:      true,
    cta:        'Details ansehen',
    ctaVariant: 'primary',
  },
  {
    id:         '2',
    type:       'account',
    headline:   'Bankdaten bis Ende des Monats aktualisieren',
    summary:    'Ihre gespeicherte IBAN läuft am 30. Juni ab. Jetzt aktualisieren, damit keine Zahlung fehlschlägt.',
    service:    'Konto',
    date:       '4.6.26',
    isNew:      false,
    cta:        null,
  },
  {
    id:         '3',
    type:       'mobile',
    headline:   'Datenvolumen wurde aufgestockt',
    summary:    '2 GB wurden Ihrem Tarif hinzugefügt, nachdem Sie Ihr Monatslimit erreicht haben.',
    service:    'Mobil',
    date:       '27.5.26',
    isNew:      false,
    cta:        'Wie funktioniert das?',
    ctaVariant: 'secondary',
  },
];
