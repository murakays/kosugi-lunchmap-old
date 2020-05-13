import firebase from 'firebase/app';
import 'firebase/functions';
import 'firebase/auth';
import { AppDispatch } from '@/store/configureStore';

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

export const firebaseLogin = (): ((dispatch: AppDispatch) => Promise<void>) => {
  return async function(): Promise<void> {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .catch(e => console.error(e));
  };
};

export const firebaseLogout = (): ((dispatch: AppDispatch) => Promise<void>) => {
  return async function(): Promise<void> {
    firebase
      .auth()
      .signOut()
      .catch(e => console.error(e));
  };
};

export type FirebaseUser = firebase.User | undefined;
export const firebaseAuth = firebase.auth();
