import {Track} from './track';

export interface Album {
  name, releaseDate, coverImage: string;
  tracks: Track[]
}
