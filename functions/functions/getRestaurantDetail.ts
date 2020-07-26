import * as functions from 'firebase-functions';

export default functions.region('asia-northeast1').https.onCall((data, context) => {
  const mockData = {
    restaurantDetail: {
      restaurantName: '磯丸水産',
      area: 'SE',
      address: '神奈川県川崎市',
      smoking: '喫煙',
      eMoney: 'PayPay,iD',
      sns: {
        twitter: '',
        instagram: 'htt//addada/aa/aa',
      },
    },
    businessDay: {
      sun: false,
      mon: true,
      tue: true,
      wed: true,
      thu: true,
      fri: true,
      sat: false,
    },
    mediaUrl:
      'https://firebasestorage.googleapis.com/v0/b/kosugi-lunchmap.appspot.com/o/public%2Frestaurants%2F1%2FIBUS458A1871_TP_V4.jpg?alt=media',
  };

  // auth check
  // if (context.auth) console.log(context.auth.uid);

  return mockData;
});
