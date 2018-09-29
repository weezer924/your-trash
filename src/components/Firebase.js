import * as firebase from 'firebase';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzVOEa0UPLWWJakr9hs8mH9nZbndhoNng",
  authDomain: "your-trash.firebaseapp.com",
  databaseURL: "https://your-trash.firebaseio.com",
  projectId: "your-trash",
  storageBucket: "your-trash.appspot.com",
  messagingSenderId: "192298168354"
};

class Fire {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    firebase.firestore().settings({ timestampsInSnapshots: true });
  }

  getCollection(code) {
    return firebase.firestore().collection('yourTrash').doc(code).get();
  }
}

Fire.shared = new Fire();
export default Fire;