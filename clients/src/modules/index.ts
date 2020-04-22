import { testModule } from './test';
// Reducers
const testReducer = testModule.reducer;

// useDispatch()の戻り値用に型を定義
// https://redux-toolkit.js.org/usage/usage-with-typescript#using-the-extracted-dispatch-type-with-react-redux
// payloadがundefinedの場合
export interface UndefPayloadAction {
  payload: undefined;
  type: string;
}

export { testReducer };
