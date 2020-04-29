import React from 'react';
import { Top } from './Top';

export default { title: 'pages|Top' };

const voidFunction = (): void => void 0;

const sampleProps = {
  isGetting: false,
  restaurantInfo: [
    {
      restaurantId: 1,
      name: 'デニーズ',
      area: 'NE',
      photoUrl: '',
    },
  ],
  limit: 10,
  page: 1,
  getRestaurantList: voidFunction,
};

export const defaultPage = (): JSX.Element => <Top {...sampleProps} />;
