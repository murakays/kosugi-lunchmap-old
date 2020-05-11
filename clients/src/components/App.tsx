import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history, store } from '@/store/configureStore';
import Routes from '@/components/Routes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
