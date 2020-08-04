/** @jsx jsx */
import React from 'react';
import { IDetailTitleLabel } from '@/const/restaurant';
import styled from '@emotion/styled';
import { jsx } from '@emotion/core';

const RestaurantDetailTitleDiv = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 16px;
`;

const RestaurantDetailTitleText = styled.div`
  border-left: solid 3px #fecb6e;
  padding-left: 8px;
`;

type IProps = {
  detailTitle: IDetailTitleLabel;
};

export const RestaurantDetailTitle: React.FC<IProps> = (props: IProps) => {
  const { detailTitle } = props;
  return (
    <RestaurantDetailTitleDiv>
      <RestaurantDetailTitleText>{detailTitle}</RestaurantDetailTitleText>
    </RestaurantDetailTitleDiv>
  );
};
