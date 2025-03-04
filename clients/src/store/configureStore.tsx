import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { getDefaultMiddleware, configureStore, combineReducers } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

// reducer
import { testReducer, restaurantListReducer } from '@/modules';

const history = createBrowserHistory();

// reducerを束ねる
const rootReducer = combineReducers({
  test: testReducer,
  restaurantList: restaurantListReducer,
  router: connectRouter(history),
});
// Reducer全般の型定義
export type RootState = ReturnType<typeof rootReducer>;

// redux-loggerの設定
const logger = createLogger({
  diff: true,
  collapsed: true,
});

// storeの設定
const middleware = [...getDefaultMiddleware(), routerMiddleware(history)];
if (process.env.NODE_ENV === `development`) {
  middleware.push(logger);
}
const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export type AppDispatch = typeof store.dispatch;

export { store, history };
