import * as functions from 'firebase-functions';

export default functions.region('asia-northeast1').https.onCall((data, context) => {
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

  // auth check
  // if (context.auth) console.log(context.auth.uid);

  return mockData;
});
