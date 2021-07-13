import { takeEvery } from 'redux-saga/effects';
import * as MusicVideoType from './musicVideo/MusicVideoType';
import * as MusicVideoSaga from './musicVideo/MusicVideoSaga';

function* watchAll(): Generator {
  yield takeEvery(MusicVideoType.FETCH_MUSIC_VIDEO_REQUEST, MusicVideoSaga.fetchMusicVideo);
}

export default watchAll;
