import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history, store } from '@/store/configureStore';

// Components
import Top from '@/components/Pages/Top';

const App: React.FC = () => {
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
