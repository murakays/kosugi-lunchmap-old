import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/core';

import * as serviceWorker from './serviceWorker';

// components
import App from '@/components/App';

render(
  <BrowserRouter>
    <Global
      styles={css`
        ${emotionReset}
        li {
          list-style: none;
        }
      `}
    />
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
