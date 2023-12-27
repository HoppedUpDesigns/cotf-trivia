// File: /cotf/src/firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from 'firebase-admin/app';
import * as admin from 'firebase-admin';
import serviceAccount from './cotf-trivia-4644c-firebase-adminsdk-xffvg-686407b859.json';

initializeApp({
    credential: applicationDefault(),
    databaseURL: 'https://cotf-trivia-4644c.firebaseio.com'
});


const firebaseConfig = {
  apiKey: "60829957132",
  authDomain: "cotf-trivia-4644c.firebaseapp.com",
  projectId: "cotf-trivia-4644c",
  storageBucket: "cotf-trivia-4644c.appspot.com",
  messagingSenderId: "60829957132",
  appId: "1:60829957132:web:98c50e9c5a0d6439914229",
  measurementId: "G-YJPTMZCJX3"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();