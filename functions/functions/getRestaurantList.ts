import * as functions from 'firebase-functions';

export default functions.region('asia-northeast1').https.onCall((data, context) => {
  const mockData = {
    message: 'Hello',
    restaurant: [
      {
        restaurantId: 1,
        restaurantName: 'デニーズ',
        area: 'NE',
        mediaUrl:
          'https://firebasestorage.googleapis.com/v0/b/kosugi-lunchmap.appspot.com/o/public%2Frestaurants%2F1%2FIBUS458A1871_TP_V4.jpg?alt=media',
      },
      {
        restaurantId: 2,
        restaurantName: 'さくら水産',
        area: 'NE',
        mediaUrl:
          'https://firebasestorage.googleapis.com/v0/b/kosugi-lunchmap.appspot.com/o/public%2Frestaurants%2F1%2FIBUS458A1871_TP_V4.jpg?alt=media',
      },
    ],
  };

  // auth check
  // if (context.auth) console.log(context.auth.uid);

  return mockData;
});
