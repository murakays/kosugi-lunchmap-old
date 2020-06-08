import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseAuth } from '@/lib/firebase';

// Components
import Header from '@/components/Organism/Header';
import Footer from '@/components/Organism/Footer';
const Top = React.lazy(() => import('@/components/Pages/Top'));

const Routes: React.FC = () => {
  const [user, initialising, error] = useAuthState(firebaseAuth);

  if (initialising) {
    return <div>画面の準備中・・・</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Header user={user} />
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route exact path="/" component={Top} />
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
};

export default Routes;
