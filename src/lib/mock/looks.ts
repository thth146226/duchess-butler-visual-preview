/**
 * src/lib/mock/looks.ts
 * MOCK / VISUAL PROTOTYPE ONLY
 * Pre-styled table looks (non-interactive previews)
 */

export interface Look {
  id: string;
  name: string;
  caption: string;
  photo: 'sage' | 'terra' | 'slate' | 'blush' | 'olive' | 'stone';
  collection: string;
}

export const MOCK_LOOKS: Look[] = [
  {
    id: 'look1',
    name: 'Garden Tablescape',
    caption: 'Sage linens · natural wood · botanical motifs',
    photo: 'sage',
    collection: 'Botanica',
  },
  {
    id: 'look2',
    name: 'Evening Elegance',
    caption: 'Blush textiles · gold accents · refined minimalism',
    photo: 'blush',
    collection: 'Fiori',
  },
  {
    id: 'look3',
    name: 'Modern Monochrome',
    caption: 'Slate throughout · contemporary geometry',
    photo: 'slate',
    collection: 'Canvas',
  },
  {
    id: 'look4',
    name: 'Warm Tones',
    caption: 'Terracotta & umber · earthy elegance · seasonal',
    photo: 'terra',
    collection: 'Amelie',
  },
  {
    id: 'look5',
    name: 'Stone & Neutral',
    caption: 'Layered neutrals · textured interest',
    photo: 'stone',
    collection: 'Etoile',
  },
  {
    id: 'look6',
    name: 'Heritage Table',
    caption: 'Olive green · brass · time-honoured palette',
    photo: 'olive',
    collection: 'Valentina',
  },
];
