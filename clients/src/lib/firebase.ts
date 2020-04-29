import firebase from 'firebase/app';
import 'firebase/functions';

// /__/firebase/init.jsonにアクセスでも取得可能
firebase.initializeApp({
  apiKey: 'AIzaSyBQNwpOwznKrU6Yvh4_1gZ08OOC99ehOKQ',
  databaseURL: 'https://kosugi-lunchmap.firebaseio.com',
  storageBucket: 'kosugi-lunchmap.appspot.com',
  authDomain: 'kosugi-lunchmap.firebaseapp.com',
  messagingSenderId: '647575844900',
  projectId: 'kosugi-lunchmap',
});

// firebase serveの場合、serveされたlocalのfunctionを使用する
if (window.location.host.includes('localhost')) {
  firebase
    .app()
    .functions('asia-northeast1')
    .useFunctionsEmulator(`http://localhost:5001`);
}

export const fetchFunctions = (functionName: string): firebase.functions.HttpsCallable => {
  try {
    return firebase
      .app()
      .functions('asia-northeast1')
      .httpsCallable(functionName);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
