export const artCategories = [
  'Portraits',
  'Wall Arts',
  'Logos',
  'Digital Artwork',
  'Miscellaneous',
  'Old Masters Copy',
] as const;

export type ArtCategory = typeof artCategories[number];
