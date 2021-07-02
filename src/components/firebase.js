import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyArmPHatxt6tCFfqSC0kU-ci4tlXm0xqyE",
    authDomain: "yesproone.firebaseapp.com",
    projectId: "yesproone",
    storageBucket: "yesproone.appspot.com",
    messagingSenderId: "228607821704",
    appId: "1:228607821704:web:9699003bb58c00e64d5c3d",
    measurementId: "G-SQQ5084YK9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db };