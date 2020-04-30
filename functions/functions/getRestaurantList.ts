import * as functions from 'firebase-functions';

export default functions.region('asia-northeast1').https.onCall(data => {
  const mockData = {
    message: 'Hello',
    restaurant: [
      {
        restaurantId: 1,
        name: 'デニーズ',
        area: 'NE',
        photoUrl: '',
      },
      {
        restaurantId: 2,
        name: 'さくら水産',
        area: 'NE',
        photoUrl: '',
      },
    ],
  };

  return mockData;
});
