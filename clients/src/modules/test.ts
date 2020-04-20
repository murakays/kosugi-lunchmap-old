import { createSlice } from '@reduxjs/toolkit';

interface TestState {
  count: number;
}

const initialState: TestState = {
  count: 0,
};

export const testModule = createSlice({
  name: 'test',
  initialState,
  reducers: {
    increment: (state: TestState): void => {
      state.count++;
      return;
    },
    decrement: (state: TestState): void => {
      if (state.count) state.count--;
      return;
    },
  },
});

export const { increment, decrement } = testModule.actions;
