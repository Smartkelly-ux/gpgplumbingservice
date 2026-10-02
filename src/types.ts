export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  category: string;
  imageUrl: string;
}

export const BUSINESS_INFO = {
  name: 'G P G Plumbing Service Company',
  legalName: 'G P G Plumbing Service Company',
  street: '2121 NW 13th St',
  city: 'Miami',
  state: 'FL',
  zip: '33125',
  phone: '(786) 746-7100',
  phoneRaw: '+17867467100',
  founded: '2015',
  serviceRadius: '40 miles from central Miami',
  emergency: '24 / 7 Emergency Service',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'drains',
    number: '01',
    title: 'DRAINS & ROOTER',
    shortDesc: 'Precision line clearance for persistent blockages and root intrusion in residential branch lines.',
    category: 'Drainage Systems',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'leaks',
    number: '02',
    title: 'LEAK DETECTION',
    shortDesc: 'Acoustic and thermal non-destructive tracing of concealed pressurized supply line ruptures.',
    category: 'Supply Diagnostics',
    imageUrl: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'sewer',
    number: '03',
    title: 'SEWER LINES',
    shortDesc: 'Main sewer lateral evaluation, excavation repair, and cleanout installations for Miami soils.',
    category: 'Subsurface Waste',
    imageUrl: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'water-heaters',
    number: '04',
    title: 'WATER HEATERS',
    shortDesc: 'Repair, replacement, and venting calibration for standard tank and high-efficiency tankless units.',
    category: 'Thermal Equipment',
    imageUrl: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'water-lines',
    number: '05',
    title: 'WATER LINES',
    shortDesc: 'Copper, PEX, and brass domestic potable water line repiping and valve restoration.',
    category: 'Potable Water',
    imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'water-mains',
    number: '06',
    title: 'WATER MAINS',
    shortDesc: 'Meter-to-foundation water main excavation, line pull replacements, and pressure regulating.',
    category: 'Infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1521207418485-99c705420785?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'hydro-jetting',
    number: '07',
    title: 'HYDRO JETTING',
    shortDesc: 'High-velocity 4,000 PSI scouring for heavy scale, grease buildup, and commercial sewer runs.',
    category: 'Scouring Systems',
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'sewer-relining',
    number: '08',
    title: 'SEWER RE-LINING',
    shortDesc: 'Cured-in-place pipe (CIPP) trenchless restoration avoiding yard and driveway demolition.',
    category: 'Trenchless Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'emergency-plumbing',
    number: '09',
    title: 'EMERGENCY PLUMBING',
    shortDesc: 'Rapid triage and containment for burst lines, severe back-ups, and failed shutoff valves.',
    category: 'Immediate Response',
    imageUrl: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1200&q=80',
  },
];

export const CUSTOMER_NOTES = [
  'FAST RESPONSE',
  'CLEAR EXPLANATIONS',
  'FAIR QUOTES',
  'THOROUGH WORK',
  'CLEANER FINISH',
];

export const REPAIR_COLUMNS = [
  {
    title: 'DRAIN & FIXTURE',
    items: ['DRAINS', 'ROOTER', 'TOILETS'],
  },
  {
    title: 'CONCEALED & SUPPLY',
    items: ['LEAKS', 'WATER LINES', 'SEWER'],
  },
  {
    title: 'EQUIPMENT & INFRASTRUCTURE',
    items: ['WATER HEATERS', 'WATER MAINS', 'HYDRO JETTING'],
  },
];
