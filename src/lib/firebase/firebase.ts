import { getApp, getApps, initializeApp } from 'firebase/app'
// import {
//   FIREBASE_API_KEY,
//   FIREBASE_APP_ID,
//   FIREBASE_AUTH_DOMAIN,
//   FIREBASE_MESSAGING_SENDER_ID,
//   FIREBASE_PROJECT_ID,
//   FIREBASE_STORAGE_BUCKET,
// } from '@src/constant/env'

const firebaseConfig = {
  apiKey: 'AIzaSyBFIPmb2RjXGPUnbhRDUEvPmmTbq1demBs',
  authDomain: 'auth-c1d6d.firebaseapp.com',
  projectId: 'auth-c1d6d',
  storageBucket: 'auth-c1d6d.appspot.com',
  messagingSenderId: '949634771092',
  appId: '1:949634771092:web:632573a3c5e69510a9ac81',
}

export const initializeFirebaseApp = () =>
  !getApps().length ? initializeApp(firebaseConfig) : getApp()
