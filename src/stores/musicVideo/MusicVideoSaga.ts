import IAction from 'models/ActionModel';
import * as MusicVideoAction from './MusicVideoAction';
import * as MusicVideoEffect from './MusicVideoEffect';
import * as ActionUtility from 'utilities/ActionUtility';

export function* fetchMusicVideo(action: IAction<any>): Generator {
  return yield ActionUtility.createSagaEffect(
    MusicVideoAction.fetchMusicVideoFinished,
    MusicVideoEffect.fetchMusicVideo,
    action.payload,
  );
}
