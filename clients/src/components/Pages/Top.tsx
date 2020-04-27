import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { testModule } from '@/modules/test';
import { RootState, AppDispatch } from '@/store/configureStore';

const useStateProps = (): { count: number } => {
  const { count } = useSelector((state: RootState) => state.test);

  return { count };
};

const useDispatchProps = (): {
  increment: () => void;
  decrement: () => void;
} => {
  const dispatch: AppDispatch = useDispatch();
  const testActions = testModule.actions;

  const increment = React.useCallback(() => {
    dispatch(testActions.increment());
  }, [dispatch]);
  const decrement = React.useCallback(() => {
    dispatch(testActions.decrement());
  }, [dispatch]);

  return { increment, decrement };
};

type Props = ReturnType<typeof useStateProps> & ReturnType<typeof useDispatchProps>;

export const Top: React.FC<Props> = (props: Props) => {
  const { count, increment, decrement } = props;

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default function TopContainer(): JSX.Element {
  const _props = { ...useStateProps(), ...useDispatchProps() };
  return <Top {..._props} />;
}
