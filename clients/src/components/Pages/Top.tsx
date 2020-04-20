import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UndefPayloadAction } from '@/modules';
import { testModule } from '@/modules/test';
import { RootState, AppDispatch } from '@/store/configureStore';

const Top: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { count } = useSelector((state: RootState) => state.test);

  const { increment, decrement } = testModule.actions;
  const actions = {
    increment: (): UndefPayloadAction => dispatch(increment()),
    decrement: (): UndefPayloadAction => dispatch(decrement()),
  };

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={actions.increment}>increment</button>
      <button onClick={actions.decrement}>decrement</button>
    </div>
  );
};

export default Top;
