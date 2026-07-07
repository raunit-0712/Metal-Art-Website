export const steelCategories = [
  'Staircases',
  'Railings',
  'Lift Cladding',
  'Decorative Panels',
  'Metal Shelves',
  'Architectural Metal',
  'Metal Skirting',
  'Custom Fabrication',
] as const;

export type SteelCategory = typeof steelCategories[number];
