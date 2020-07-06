/** @jsx jsx */
import React, { Suspense, Fragment } from 'react';
import { jsx, css } from '@emotion/core';
import { Route, Switch } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseAuth } from '@/lib/firebase';

// Components
import Header from '@/components/Organism/Header';
import Footer from '@/components/Organism/Footer';
const Top = React.lazy(() => import('@/components/Pages/Top'));
const RestaurantDetail = React.lazy(() => import('@/components/Pages/RestaurantDetail'));

const Routes: React.FC = () => {
  const [user, initialising, error] = useAuthState(firebaseAuth);

  if (initialising) {
    return <div>画面の準備中・・・</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Fragment>
      <Header user={user} />
      <div
        css={css`
          min-width: 984px;
        `}
      >
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route exact path="/" component={Top} />
            <Route path="/detail/:id" component={RestaurantDetail} />
          </Switch>
        </Suspense>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Routes;
