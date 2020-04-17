import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { testModule } from '@/modules/test';
import { RootState } from "@/store/configureStore";

const Top: React.FC = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state:RootState) => state.test);

  const increment = () => dispatch(testModule.actions.increment());
  const decrement = () => dispatch(testModule.actions.decrement());

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}


export default Top;