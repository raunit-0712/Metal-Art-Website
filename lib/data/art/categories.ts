export const artCategories = [
  'Portraits',
  'Wall Arts',
  'Logos',
  'Digital Artwork',
  'Miscellaneous',
  'Student Works',
  'Old Masters Copy',
] as const;

export type ArtCategory = typeof artCategories[number];
