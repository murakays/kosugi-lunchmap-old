/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

const HeaderStyle = styled.header`
  min-width: 980px;
  margin: 0 auto;
  height: 50px;
  display: flex;
`;

// 今後firebaseログアウト処理をいれる
const LoginLink = styled.span`
  color: blue;
  margin: 0 0 0 auto;
`;

const Header: React.FC = () => {
  const TitleLogo = styled.div`
    width: 500px;
    height: 40px;
    background-color: blue;
  `;

  return (
    <HeaderStyle>
      <TitleLogo />
      <LoginLink>ログイン</LoginLink>
    </HeaderStyle>
  );
};

export default Header;
