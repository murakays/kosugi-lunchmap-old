import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history, store } from '@/store/configureStore';
import Header from '@/components/Organism/Header';
import Footer from '@/components/Organism/Footer';

// Components
const Top = React.lazy(() => import('@/components/Pages/Top'));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Header />
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route exact path="/" component={Top} />
          </Switch>
        </Suspense>
        <Footer />
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
