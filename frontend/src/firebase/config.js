import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// initialize firestore
const db = firebase.firestore();
// initialize auth
const projectAuth = firebase.auth();
//timestamp
const timestamp = firebase.firestore.Timestamp;
// initialize storage
const projectStorage = firebase.storage();
export { db, projectAuth, projectStorage, timestamp };
