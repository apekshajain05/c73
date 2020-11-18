import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBeOdbcdLYHddRsAD1mS4E68m74FrH3Nuk",
  authDomain: "wily-app-a4595.firebaseapp.com",
  databaseURL: "https://wily-app-a4595.firebaseio.com",
  projectId: "wily-app-a4595",
  storageBucket: "wily-app-a4595.appspot.com",
  messagingSenderId: "890030395079",
  appId: "1:890030395079:web:edbed33288e58577d2b8e2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
