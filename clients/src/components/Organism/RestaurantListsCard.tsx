/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { restaurantInfo } from '@/modules/restaurantList';
import MediaCard from '@/components/Molecules/MediaCard';
import { mediaSize } from '@/const/restaurant';

// material-ui
import Card from '@material-ui/core/Card';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import CircularProgress from '@material-ui/core/CircularProgress';

// styles
const CardStyle = css`
  max-width: 984px;
  margin-left: auto;
  margin-right: auto;
`;

const MediaCardStyle = css`
  width: 320px;
`;

const CircularProgressStyle = css`
  width: 40px;
  height: 40px;
  margin: auto;
  padding: 100px;
`;

type IProps = {
  restaurantInfo: restaurantInfo[];
  isGetting: boolean;
};

export const RestaurantListsCard: React.FC<IProps> = (props: IProps) => {
  const { restaurantInfo, isGetting } = props;
  return (
    <Card css={CardStyle}>
      {isGetting ? (
        <div css={CircularProgressStyle}>
          <CircularProgress />
        </div>
      ) : (
        <GridList cellHeight={300} cols={3}>
          {restaurantInfo.map((value, index) => {
            return (
              <GridListTile key={index} css={MediaCardStyle}>
                <MediaCard
                  area={value.area}
                  mediaUrl={value.mediaUrl}
                  mediaSize={mediaSize.lists}
                  restaurantId={value.restaurantId}
                  restaurantName={value.restaurantName}
                />
              </GridListTile>
            );
          })}
        </GridList>
      )}
    </Card>
  );
};
