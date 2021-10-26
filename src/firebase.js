import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCBn-bVGNqJNlXAhqrsiySDXYPC_bSrOCQ",
    authDomain: "react-contact-app-7604a.firebaseapp.com",
    projectId: "react-contact-app-7604a",
    storageBucket: "react-contact-app-7604a.appspot.com",
    messagingSenderId: "723416906290",
    appId: "1:723416906290:web:1ea67e2047cc64d6075a2b"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();