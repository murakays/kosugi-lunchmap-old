/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { restaurantArea, detailInfoLabel } from '@/const/restaurant';
import { IRestaurantDetailInfo } from '@/modules/restaurantDetail';

const TR = styled.tr`
  height: 60px;
  border-bottom: 1px solid silver;
  :first-child {
    border-top: 1px solid silver;
  }
`;

const TH = styled.th`
  background-color: #fecb6e;
  width: 120px;
  font-weight: bold;
`;

const TD = styled.td`
  padding: 8px 0 8px 16px;
`;

const RestaurantDetailWrapper = styled.div`
  border-top: 1px solid silver;
  width: 100%;
`;

const RestaurantDetailTable = styled.table`
  width: 100%;
`;

const RestaurantDetailTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 16px;
`;

const RestaurantDetailTitleText = styled.div`
  border-left: solid 3px #fecb6e;
  padding-left: 8px;
`;

type IProps = {
  restaurantDetailInfo: IRestaurantDetailInfo;
};

export const RestaurantDetailInfo = React.memo<IProps>(props => {
  const { restaurantDetailInfo } = props;
  const detailInfoMap = {
    restaurantName: <span>{restaurantDetailInfo.restaurantName}</span>,
    area: <span>{restaurantArea[restaurantDetailInfo.area]}</span>,
    address: <span>{restaurantDetailInfo.address}</span>,
    smoking: <span>{restaurantDetailInfo.smoking}</span>,
    eMoney: <span>{restaurantDetailInfo.eMoney}</span>,
    sns: (
      <div>
        {Object.keys(restaurantDetailInfo.sns).length ? (
          Object.keys(restaurantDetailInfo.sns).map(snsKey => (
            <a key={snsKey} href={restaurantDetailInfo.sns[snsKey]}>
              {snsKey}
            </a>
          ))
        ) : (
          <span>該当アカウントはありません</span>
        )}
      </div>
    ),
  };
  return (
    <RestaurantDetailWrapper>
      <RestaurantDetailTitle>
        <RestaurantDetailTitleText>店舗詳細</RestaurantDetailTitleText>
      </RestaurantDetailTitle>
      <RestaurantDetailTable>
        <tbody>
          {Object.keys(restaurantDetailInfo).map(key => {
            return (
              <TR key={key}>
                <TH>{detailInfoLabel[key]}</TH>
                <TD>{detailInfoMap[key]}</TD>
              </TR>
            );
          })}
        </tbody>
      </RestaurantDetailTable>
    </RestaurantDetailWrapper>
  );
});
