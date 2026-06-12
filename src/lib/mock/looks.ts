/**
 * src/lib/mock/looks.ts
 * MOCK / VISUAL PROTOTYPE ONLY
 * Pre-styled table looks (non-interactive previews)
 * Portfolio placeholder: 3 weddings · 2 brand events · 1 private dining · 1 seasonal
 */

export type LookCategory = 'wedding' | 'brand-event' | 'private-dining' | 'seasonal';

export interface Look {
  id: string;
  name: string;
  caption: string;
  photo: 'sage' | 'terra' | 'slate' | 'blush' | 'olive' | 'stone';
  collection: string;
  category: LookCategory;
}

export const MOCK_LOOKS: Look[] = [
  {
    id: 'look1',
    name: 'Garden Tablescape',
    caption: 'Sage linens · natural wood · botanical motifs',
    photo: 'sage',
    collection: 'Botanica',
    category: 'wedding',
  },
  {
    id: 'look2',
    name: 'Evening Elegance',
    caption: 'Blush textiles · gold accents · refined minimalism',
    photo: 'blush',
    collection: 'Fiori',
    category: 'wedding',
  },
  {
    id: 'look3',
    name: 'Modern Monochrome',
    caption: 'Slate throughout · contemporary geometry',
    photo: 'slate',
    collection: 'Canvas',
    category: 'wedding',
  },
  {
    id: 'look4',
    name: 'Warm Tones',
    caption: 'Terracotta & umber · earthy elegance · seasonal',
    photo: 'terra',
    collection: 'Amelie',
    category: 'seasonal',
  },
  {
    id: 'look5',
    name: 'Stone & Neutral',
    caption: 'Layered neutrals · textured interest',
    photo: 'stone',
    collection: 'Etoile',
    category: 'brand-event',
  },
  {
    id: 'look6',
    name: 'Heritage Table',
    caption: 'Olive green · brass · time-honoured palette',
    photo: 'olive',
    collection: 'Valentina',
    category: 'brand-event',
  },
  {
    id: 'look7',
    name: 'Private dining tablescape',
    caption: 'Placeholder · intimate scale · curated pieces',
    photo: 'blush',
    collection: 'Ophelia',
    category: 'private-dining',
  },
];
