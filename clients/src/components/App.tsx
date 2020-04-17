import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { setupStore, history } from '@/store/configureStore';

const store = setupStore();

// Components
import Top from "./Pages/Top";

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Top} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
