import IAction from 'models/ActionModel';
import * as MusicVideoType from './MusicVideoType';
import * as ActionUtility from 'utilities/ActionUtility';

export const fetchMusicVideoRequest = (payload: string): IAction<string> => {
  return ActionUtility.createAction(MusicVideoType.FETCH_MUSIC_VIDEO_REQUEST, payload);
};

export const fetchMusicVideoFinished = (payload: any, error: boolean): IAction<any> => {
  return ActionUtility.createAction(MusicVideoType.FETCH_MUSIC_VIDEO_FINISHED, payload, error);
};
