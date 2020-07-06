import React from 'react';
import MediaCard from './MediaCard';
import { restaurantArea } from '@/const/restaurant';
import { mediaSize } from '@/const/restaurant';

export default { title: 'Molecules|MediaCard' };

const sampleProps = {
  area: restaurantArea['NE'],
  mediaUrl: 'aaa',
  mediaSize: mediaSize.lists,
  restaurantId: 1,
  restaurantName: 'さくら水産',
};

export const defaultPage = (): JSX.Element => <MediaCard {...sampleProps} />;
