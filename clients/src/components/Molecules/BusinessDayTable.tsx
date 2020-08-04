/** @jsx jsx */
import React from 'react';
import { IBusinessDay } from '@/modules/restaurantDetail';
import { detailTitleLabel, businessDayLabel } from '@/const/restaurant';
import { RestaurantDetailTitle } from '@/components/Atom/RestaurantDetailTitle';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

const RestaurantDetailWrapper = styled.div`
  border-top: 1px solid silver;
  width: 100%;
  padding-bottom: 16px;
`;

const BusinessDayTableStyle = styled.table`
  border: 1px solid silver;
  width: 100%;
`;

const WeekTr = styled.tr`
  height: 30px;
  border-bottom: 1px solid silver;
`;

const BusinessDayTr = styled.tr`
  height: 60px;
`;

const TH = styled.th`
  width: calc(100% / 7);
  vertical-align: middle;
`;

type IProps = {
  businessDay: IBusinessDay;
};

const BusinessDayTable = (props: IProps): JSX.Element => {
  const { businessDay } = props;
  return (
    <RestaurantDetailWrapper>
      <RestaurantDetailTitle detailTitle={detailTitleLabel['businessDay']} />
      <BusinessDayTableStyle>
        <tbody>
          <WeekTr>
            {Object.values(businessDayLabel).map(value => {
              return <TH key={value}>{value}</TH>;
            })}
          </WeekTr>
          <BusinessDayTr>
            {Object.values(businessDay).map((value, i) => {
              return <TH key={`businessDay${i}`}>{value ? '◯' : '×'}</TH>;
            })}
          </BusinessDayTr>
        </tbody>
      </BusinessDayTableStyle>
    </RestaurantDetailWrapper>
  );
};

export default React.memo(BusinessDayTable);
