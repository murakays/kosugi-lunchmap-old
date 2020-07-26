/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { IRestaurantDetailInfo } from '@/modules/restaurantDetail';
import { RestaurantDetailInfo } from '@/components/Molecules/RestaurantDetailInfo';

// material-ui
import Card from '@material-ui/core/Card';

// styles
const CardStyle = css`
  min-width: 760px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  outline: 1px solid silver;
`;

const DetailContentsWrapper = styled.div`
  width: 696px;
  margin: 0 auto;
`;

type IProps = {
  restaurantDetailInfo: IRestaurantDetailInfo;
};

export const RestaurantDetailCard = React.memo<IProps>(props => {
  const { restaurantDetailInfo } = props;
  return (
    <Card css={CardStyle}>
      <DetailContentsWrapper>
        <div>{restaurantDetailInfo.restaurantName}</div>
        <div>メディアカルーセル</div>
        <div>営業日コンポーネント</div>
        <RestaurantDetailInfo restaurantDetailInfo={restaurantDetailInfo} />
        <div>フォトライブラリー</div>
      </DetailContentsWrapper>
    </Card>
  );
});
