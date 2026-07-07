import { Artwork } from './art.types';
import { portraits } from './portraits';
import { digital } from './digital';
import { logos } from './logos';
import { miscellaneous } from './miscellaneous';
import { oldMasters } from './oldMasters';
import { studentWorks } from './studentWorks';
import { wallArts } from './WallArts';

export const artworks: Artwork[] = [
  ...portraits,
  ...digital,
  ...logos,
  ...miscellaneous,
  ...oldMasters,
  ...studentWorks,
  ...wallArts,
];

export const artCollections = artworks;
