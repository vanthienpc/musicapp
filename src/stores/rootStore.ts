import { createStore, applyMiddleware, compose, Middleware, StoreEnhancer } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { createBrowserHistory, History } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import StoreModel from 'models/StoreModel';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

export const history: History = createBrowserHistory();

export const initialState: Partial<StoreModel> = {};

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware, routerMiddleware(history)].filter(Boolean);
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers: StoreEnhancer =
  process.env.NODE_ENV === 'production' ? compose(...enhancers) : composeWithDevTools(...enhancers);

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['router'],
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

const store = createStore(persistedReducer, initialState, composedEnhancers);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
