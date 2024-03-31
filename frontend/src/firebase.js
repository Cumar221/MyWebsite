import firebase from 'firebase';
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyCb8F3dQOcY3dTTwp3PsStT1Rs7Nu3rf5I",
    authDomain: "website-d6f61.firebaseapp.com",
    databaseURL: "https://website-d6f61.firebaseio.com",
    projectId: "website-d6f61",
    storageBucket: "website-d6f61.appspot.com",
    messagingSenderId: "91519399169",
    appId: "1:91519399169:web:11a02f5461b09089919700",
    measurementId: "G-LFVVXQTB1B"
  };


firebase.initializeApp(firebaseConfig)
firebase.analytics()


export default firebase