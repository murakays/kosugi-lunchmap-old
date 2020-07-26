/** @jsx jsx */
import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { css, jsx } from '@emotion/core';

const CircularProgressStyle = css`
  width: 40px;
  height: 40px;
  margin: auto;
  padding: 100px;
`;

const CircularProgressDiv: React.FC = () => {
  return (
    <div css={CircularProgressStyle}>
      <CircularProgress />
    </div>
  );
};

export default CircularProgressDiv;
