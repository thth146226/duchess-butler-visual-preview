/**
 * src/lib/mock/items.ts
 * MOCK / VISUAL PROTOTYPE ONLY
 * Sample items per slot; NOT the Builder Collection from Chunk 1
 */

export interface MockItem {
  id: string;
  name: string;
  collection: string;
  slot: string;
  photo: 'sage' | 'terra' | 'slate' | 'blush' | 'olive' | 'stone';
}

export const MOCK_ITEMS: MockItem[] = [
  {
    id: 'm1',
    name: 'Sample Charger Plate – Gold',
    collection: 'Valentina',
    slot: 'Charger',
    photo: 'stone',
  },
  {
    id: 'm2',
    name: 'Sample Dinner Plate – Ivory',
    collection: 'Etoile',
    slot: 'Dinner plate',
    photo: 'sage',
  },
  {
    id: 'm3',
    name: 'Sample Linen – Sage',
    collection: 'Botanica',
    slot: 'Linen',
    photo: 'olive',
  },
  {
    id: 'm4',
    name: 'Sample Napkin – Blush',
    collection: 'Fiori',
    slot: 'Napkin',
    photo: 'blush',
  },
  {
    id: 'm5',
    name: 'Sample Cutlery Set – Brushed',
    collection: 'Canvas',
    slot: 'Cutlery',
    photo: 'slate',
  },
  {
    id: 'm6',
    name: 'Sample Glassware Set – Smoke',
    collection: 'Eclipse',
    slot: 'Glassware',
    photo: 'slate',
  },
  {
    id: 'm7',
    name: 'Sample Candle Holder – Brass',
    collection: 'Amelie',
    slot: 'Décor',
    photo: 'stone',
  },
  {
    id: 'm8',
    name: 'Sample Placemat – Rattan',
    collection: 'Ophelia',
    slot: 'Placemat',
    photo: 'sage',
  },
  {
    id: 'm9',
    name: 'Sample Charger – Slate',
    collection: 'Bronte',
    slot: 'Charger',
    photo: 'slate',
  },
  {
    id: 'm10',
    name: 'Sample Napkin Ring – Gold',
    collection: 'Diva',
    slot: 'Napkin',
    photo: 'stone',
  },
  {
    id: 'm11',
    name: 'Sample Bowl – Terra',
    collection: 'Valentina',
    slot: 'Dinner plate',
    photo: 'terra',
  },
  {
    id: 'm12',
    name: 'Sample Linen – Blush',
    collection: 'Fiori',
    slot: 'Linen',
    photo: 'blush',
  },
];
