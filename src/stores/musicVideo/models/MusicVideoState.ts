import { MusicVideoModel } from './MusicVideoModel';

export default interface MusicVideoState {
  resultCount?: number;
  results?: MusicVideoModel[];
}
