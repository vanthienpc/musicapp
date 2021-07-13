import { RouterState } from 'connected-react-router';
import ErrorState from 'stores/error/models/ErrorState';
import RequestState from 'stores/request/models/RequestState';
import MusicVideoState from 'stores/musicVideo/models/MusicVideoState';

export default interface StoreModel {
  readonly error: ErrorState;
  readonly request: RequestState;
  readonly router: RouterState;
  readonly musicVideo: MusicVideoState;
}
