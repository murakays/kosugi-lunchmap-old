import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware} from 'connected-react-router';
import { getDefaultMiddleware, configureStore, combineReducers} from '@reduxjs/toolkit'
import { createLogger } from "redux-logger";

// reducer
import { testReducer } from '@/modules';

export const history = createBrowserHistory();

// reducerを束ねる
const rootReducer = combineReducers({
  test: testReducer,
  router: connectRouter(history)
});

export type RootState = ReturnType<typeof rootReducer>

// redux-loggerの設定
const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const setupStore = () => {
  const middleware = [...getDefaultMiddleware(), routerMiddleware(history)];

  if (process.env.NODE_ENV === `development`) {
    middleware.push(logger);
  }

  return configureStore({
    reducer: rootReducer,
    middleware
  });
}
