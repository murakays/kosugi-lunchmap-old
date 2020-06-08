/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

const FooterStyle = styled.footer`
  width: 100%;
  max-height: 28px;
  text-align: center;
`;

const Footer: React.FC = () => {
  const today = new Date();
  const year = today.getFullYear();

  return <FooterStyle>Copyright © {year} Yusuke Murakami All Rights Reserved.</FooterStyle>;
};

export default Footer;
