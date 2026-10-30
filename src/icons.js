/* Ikon SVG inline (stroke style, feather-like). Dipakai di sidebar, card, dll. */
const I = (paths, extra = "") =>
  `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${paths}</svg>`;

const icons = {
  home: I('<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6"/>'),
  smartphone: I('<rect x="6.5" y="2.5" width="11" height="19" rx="2.6"/><path d="M10.5 18.5h3"/>'),
  download: I('<path d="M12 3v11"/><path d="m7.5 10 4.5 4.5L16.5 10"/><path d="M4 17.5V20h16v-2.5"/>'),
  layers: I('<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3.5 12.5 8.5 4.7 8.5-4.7"/><path d="m3.5 16.8 8.5 4.7 8.5-4.7"/>'),
  database: I('<ellipse cx="12" cy="5.5" rx="7.5" ry="3"/><path d="M4.5 5.5v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-6"/><path d="M4.5 11.5v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-6"/>'),
  cpu: I('<rect x="7" y="7" width="10" height="10" rx="2"/><rect x="4" y="4" width="16" height="16" rx="3.2"/><path d="M9.5 1.8v2.2M14.5 1.8v2.2M9.5 20v2.2M14.5 20v2.2M1.8 9.5H4M1.8 14.5H4M20 9.5h2.2M20 14.5h2.2"/>'),
  shield: I('<path d="M12 3 5 6v5.5c0 4.4 3 8.3 7 9.5 4-1.2 7-5.1 7-9.5V6l-7-3Z"/><path d="m9.2 12 2 2 3.6-3.8"/>'),
  shuffle: I('<path d="M16 3h5v5"/><path d="M4 20 21 3"/><path d="M21 16v5h-5"/><path d="m15 15 6 6"/><path d="M4 4l5 5"/>'),
  package: I('<path d="M12 3 4 7.2v9.6L12 21l8-4.2V7.2L12 3Z"/><path d="M4 7.2 12 11.5l8-4.3M12 11.5V21"/>'),
  box: I('<path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5v-7Z"/><path d="M4 8.5 12 13l8-4.5M12 13v7"/>'),
  palette: I('<path d="M12 3a9 9 0 1 0 0 18h1.2a2.1 2.1 0 0 0 1.5-3.6 1.9 1.9 0 0 1 1.4-3.2H18A3.5 3.5 0 0 0 21.5 11 9 9 0 0 0 12 3Z"/><circle cx="7.8" cy="11" r="1.1" fill="currentColor" stroke="none"/><circle cx="10" cy="7.4" r="1.1" fill="currentColor" stroke="none"/><circle cx="14.4" cy="7.3" r="1.1" fill="currentColor" stroke="none"/><circle cx="17" cy="10.6" r="1.1" fill="currentColor" stroke="none"/>'),
  bulb: I('<path d="M9.2 18h5.6"/><path d="M10 21h4"/><path d="M12 3a6.2 6.2 0 0 0-3.6 11.2c.8.6 1.3 1.5 1.4 2.5h4.4c.1-1 .6-1.9 1.4-2.5A6.2 6.2 0 0 0 12 3Z"/>'),
  search: I('<circle cx="11" cy="11" r="6.5"/><path d="m20 20-3.6-3.6"/>'),
  sun: I('<circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19"/>'),
  moon: I('<path d="M20 14.2A8.4 8.4 0 0 1 9.8 4 8.5 8.5 0 1 0 20 14.2Z"/>'),
  menu: I('<path d="M4 7h16M4 12h16M4 17h16"/>'),
  close: I('<path d="m6 6 12 12M18 6 6 18"/>'),
  external: I('<path d="M14 4h6v6"/><path d="M20 4 11 13"/><path d="M19 14v4.5A1.5 1.5 0 0 1 17.5 20h-11A1.5 1.5 0 0 1 5 18.5v-11A1.5 1.5 0 0 1 6.5 6H11"/>'),
  arrowRight: I('<path d="M4.5 12h14"/><path d="m13 6.5 5.5 5.5L13 17.5"/>'),
  arrowUp: I('<path d="M12 19.5v-14"/><path d="m6.5 11 5.5-5.5L17.5 11"/>'),
  sparkles: I('<path d="M12 3.5 13.8 9l5.7 1.8-5.7 1.8L12 18.5l-1.8-5.9L4.5 10.8 10.2 9 12 3.5Z"/><path d="M19 3v3M17.5 4.5h3"/>'),
  zap: I('<path d="M13 2.5 5 13.5h6L11 21.5 19 10.5h-6l1-8Z"/>'),
  heart: I('<path d="M12 20s-7.5-4.4-7.5-9.4A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 3c0 5-7.5 9.4-7.5 9.4Z"/>'),
  users: I('<circle cx="9" cy="8.5" r="3.2"/><path d="M3.5 19.5c.6-3.2 2.9-5 5.5-5s4.9 1.8 5.5 5"/><circle cx="16.8" cy="9.5" r="2.5"/><path d="M15.5 14.6c2.6-.3 4.6 1.3 5.2 3.9"/>'),
  globe: I('<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17"/><path d="M12 3.5c2.3 2.3 3.5 5.2 3.5 8.5s-1.2 6.2-3.5 8.5c-2.3-2.3-3.5-5.2-3.5-8.5s1.2-6.2 3.5-8.5Z"/>'),
  chip: I('<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M9.8 1.8v2.4M14.2 1.8v2.4M9.8 19.8v2.4M14.2 19.8v2.4M1.8 9.8h2.4M1.8 14.2h2.4M19.8 9.8h2.4M19.8 14.2h2.4"/>'),
  camera: I('<path d="M4.5 8h2.2l1.3-2h7l1.3 2h2.2A1.5 1.5 0 0 1 20 9.5v8A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5v-8A1.5 1.5 0 0 1 5.5 8Z"/><circle cx="12" cy="13" r="3.2"/>'),
  book: I('<path d="M4.5 5.2A2.2 2.2 0 0 1 6.7 3H19.5v15.5H6.7A2.2 2.2 0 0 0 4.5 20.7V5.2Z"/><path d="M4.5 20.7A2.2 2.2 0 0 1 6.7 18.5h12.8V21H6.7A2.2 2.2 0 0 1 4.5 18.8"/>'),
  refresh: I('<path d="M20 11a8 8 0 0 0-14.3-4.5"/><path d="M4 4v4h4"/><path d="M4 13a8 8 0 0 0 14.3 4.5"/><path d="M20 20v-4h-4"/>'),
  alert: I('<path d="M12 4.5 21 19.5H3L12 4.5Z"/><path d="M12 10v4"/><circle cx="12" cy="16.8" r="0.4" fill="currentColor" stroke="none"/>'),
  lock: I('<rect x="5.5" y="10.5" width="13" height="9.5" rx="2.2"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/>'),
  rocket: I('<path d="M12.8 15.2c3.6-2.3 5.7-5.9 6-10.2-4.3.3-7.9 2.4-10.2 6l-4.1 1a1.6 1.6 0 0 0-.8 2.7l3.4 3.4a1.6 1.6 0 0 0 2.7-.8l1-4.1Z"/><circle cx="14.6" cy="8.6" r="1.6"/><path d="M6.5 17.5c-1.5 1.5-2 4-2 4s2.5-.5 4-2"/>'),
  chevronsLeft: I('<path d="m11.5 6.5-5.5 5.5 5.5 5.5"/><path d="m18.5 6.5-5.5 5.5 5.5 5.5"/>'),
  chevronsRight: I('<path d="m12.5 6.5 5.5 5.5-5.5 5.5"/><path d="m5.5 6.5 5.5 5.5-5.5 5.5"/>')
};

module.exports = icons;
