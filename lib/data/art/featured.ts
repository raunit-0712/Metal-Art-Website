import { artProjects } from './projects';
import { artworks } from './collections';

export const artFeatured = artProjects.filter(project => project.featured);
export const artworksFeatured = artworks.filter(artwork => artwork.featured);
