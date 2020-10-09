import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD-IUcVUUbXMaHOLgZ-wj4Ec0NsSOLllOg',
  authDomain: 'reactchat-456c4.firebaseapp.com',
  databaseURL: 'https://reactchat-456c4.firebaseio.com',
  projectId: 'reactchat-456c4',
  storageBucket: 'reactchat-456c4.appspot.com',
  messagingSenderId: '460726432238',
  appId: '1:460726432238:web:e9c8cc47335ec6d73e9eff',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
