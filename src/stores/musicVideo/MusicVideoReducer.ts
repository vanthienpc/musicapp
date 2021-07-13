import { Reducer } from 'redux';
import IAction from 'models/ActionModel';
import { handleReducer } from 'utilities/ReducerUtility';
import * as MusicVideoType from './MusicVideoType';
import MusicVideoState from './models/MusicVideoState';

export const initialState: MusicVideoState = {};

const musicVideoReducer: Reducer = handleReducer(initialState, {
  [MusicVideoType.FETCH_MUSIC_VIDEO_FINISHED](
    state: MusicVideoState,
    action: IAction<MusicVideoState>,
  ): MusicVideoState {
    return {
      ...state,
      ...action.payload,
    };
  },
});

export default musicVideoReducer;
