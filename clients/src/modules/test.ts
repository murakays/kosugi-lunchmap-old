import { createSlice } from '@reduxjs/toolkit';

interface ITestState {
  count: number
}

const initialState: ITestState = {
  count: 0
}

export const testModule = createSlice({
  name: 'test',
  initialState,
  reducers: {
    increment: (state:ITestState) => {
      state.count++;
      return;
    },
    decrement: (state:ITestState) => {
      if (state.count)
        state.count--;
      return;
    },
  }
});

export const {
  increment, decrement
} = testModule.actions

