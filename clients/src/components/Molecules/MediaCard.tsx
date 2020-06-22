/** @jsx jsx */
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { restaurantArea } from '@/const/restaurant';
import { jsx, SerializedStyles } from '@emotion/core';

type IProps = {
  area: string;
  mediaUrl: string;
  mediaSize: SerializedStyles;
  restaurantName: string;
};

export const MediaCard: React.FC<IProps> = (props: IProps) => {
  const { area, mediaUrl, mediaSize, restaurantName } = props;
  return (
    <Card>
      <CardActionArea>
        <CardMedia image={mediaUrl} css={mediaSize} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {restaurantName}
          </Typography>
          <Typography>エリア： {restaurantArea[area]}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
