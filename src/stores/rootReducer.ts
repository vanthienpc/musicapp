import { combineReducers, Reducer, ReducersMapObject } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import StoreModel from 'models/StoreModel';
import ErrorReducer from './error/ErrorReducer';
import RequestReducer from './request/RequestReducer';
import MusicVideoReducer from './musicVideo/MusicVideoReducer';

const rootReducer = (history: History): Reducer =>
  combineReducers({
    error: ErrorReducer,
    router: connectRouter(history),
    request: RequestReducer,
    musicVideo: MusicVideoReducer,
  } as ReducersMapObject<StoreModel>);

export default rootReducer;
