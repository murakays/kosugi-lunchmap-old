import React from 'react';
import { Top } from './Top';

export default { title: 'pages|Top' };

const voidFunction = (): void => void 0;

export const count0 = (): JSX.Element => (
  <Top count={0} increment={voidFunction} decrement={voidFunction} />
);
