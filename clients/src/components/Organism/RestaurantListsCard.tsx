/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { restaurantInfo } from '@/modules/restaurantList';
import { MediaCard } from '@/components/Molecules/MediaCard';
import { mediaSize } from '@/const/restaurant';

// material-ui
import Card from '@material-ui/core/Card';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

// styles
const CardStyle = css`
  width: 980px;
  margin-left: auto;
  margin-right: auto;
`;

type IProps = {
  restaurantInfo: restaurantInfo[];
};

export const RestaurantListsCard: React.FC<IProps> = (props: IProps) => {
  const { restaurantInfo } = props;
  return (
    <Card css={CardStyle}>
      <GridList cellHeight={300} cols={3}>
        {restaurantInfo.map((value, index) => {
          return (
            <GridListTile key={index}>
              <MediaCard
                area={value.area}
                mediaUrl={value.mediaUrl}
                mediaSize={mediaSize.lists}
                restaurantName={value.restaurantName}
              />
            </GridListTile>
          );
        })}
      </GridList>
    </Card>
  );
};
