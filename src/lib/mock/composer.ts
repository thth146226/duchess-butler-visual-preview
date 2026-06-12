/**
 * src/lib/mock/composer.ts
 * MOCK / VISUAL PROTOTYPE ONLY
 * Composer slots with finish options and guest quantities
 */

export interface ComposerSlot {
  key: string;
  label: string;
  options: [string, string][]; // [color, name] pairs
  qtyLabel: (guests: number) => string;
}

export const COMPOSER_SLOTS: ComposerSlot[] = [
  {
    key: 'linen',
    label: 'Linen',
    options: [
      ['#9AA58C', 'Sage'],
      ['#E7DECE', 'Linen'],
      ['#C9A8A0', 'Blush'],
      ['#8C9AA8', 'Slate'],
    ],
    qtyLabel: () => '1 per table',
  },
  {
    key: 'placemat',
    label: 'Placemat',
    options: [
      ['#B9AF9E', 'Stone'],
      ['#8A7B66', 'Walnut'],
      ['#C9BCA4', 'Natural'],
      ['#6F6354', 'Umber'],
    ],
    qtyLabel: (g) => `${g} total`,
  },
  {
    key: 'charger',
    label: 'Charger plate',
    options: [
      ['#C2A368', 'Gold'],
      ['#B9AF9E', 'Stone'],
      ['#7E7B5E', 'Olive'],
      ['#8C9AA8', 'Slate'],
    ],
    qtyLabel: (g) => `${g} total`,
  },
  {
    key: 'dinner',
    label: 'Dinner plate',
    options: [
      ['#FBF8F2', 'Ivory'],
      ['#E7DECE', 'Sand'],
      ['#C9A8A0', 'Blush'],
      ['#9AA58C', 'Sage'],
    ],
    qtyLabel: (g) => `${g} total`,
  },
  {
    key: 'napkin',
    label: 'Napkin + ring',
    options: [
      ['#C9A8A0', 'Blush'],
      ['#9AA58C', 'Sage'],
      ['#FBF8F2', 'Ivory'],
      ['#5E6B78', 'Midnight'],
    ],
    qtyLabel: (g) => `${g} total`,
  },
  {
    key: 'cutlery',
    label: 'Cutlery set',
    options: [
      ['#9C8E7B', 'Brushed'],
      ['#6F6354', 'Bronze'],
      ['#2B2722', 'Matte black'],
      ['#C2A368', 'Gold'],
    ],
    qtyLabel: (g) => `${g * 5} pieces · 5 per setting`,
  },
  {
    key: 'glass',
    label: 'Glassware set',
    options: [
      ['#DCD4C4', 'Clear'],
      ['#8C9AA8', 'Smoke blue'],
      ['#A89AB0', 'Lilac'],
      ['#7E7B5E', 'Olive'],
    ],
    qtyLabel: (g) => `${g * 2} glasses · 2 per setting`,
  },
  {
    key: 'decor',
    label: 'Décor (up to 6)',
    options: [
      ['#C2A368', 'Brass'],
      ['#7E7B5E', 'Olive'],
      ['#B07A5E', 'Terracotta'],
      ['#5E6B78', 'Slate'],
    ],
    qtyLabel: () => 'styled per table',
  },
];

export const SLOT_KEY_MAP: Record<string, string> = {
  Linen: 'linen',
  Placemat: 'placemat',
  Charger: 'charger',
  'Dinner plate': 'dinner',
  Napkin: 'napkin',
  Cutlery: 'cutlery',
  Glassware: 'glass',
  Décor: 'decor',
};
