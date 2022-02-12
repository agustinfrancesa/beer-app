import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDpsDRfgM5AlKCuBXTYgu1kF_7Z76Xp2QI",
  authDomain: "beer-app-7f354.firebaseapp.com",
  projectId: "beer-app-7f354",
  storageBucket: "beer-app-7f354.appspot.com",
  messagingSenderId: "462875414840",
  appId: "1:462875414840:web:974c89d74452320d6971cd"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase,
}