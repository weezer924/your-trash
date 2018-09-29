import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCzVOEa0UPLWWJakr9hs8mH9nZbndhoNng",
  authDomain: "your-trash.firebaseapp.com",
  databaseURL: "https://your-trash.firebaseio.com",
  projectId: "your-trash",
  storageBucket: "your-trash.appspot.com",
  messagingSenderId: "192298168354"
};

firebase.initializeApp(firebaseConfig);