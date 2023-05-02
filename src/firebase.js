import "firebase/database";
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyBIhqAD3raumfUp9y178p3lCUyZbTkbDTA",
  authDomain: "activity-1-a966d.firebaseapp.com",
  databaseURL: "https://activity-1-a966d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "activity-1-a966d",
  storageBucket: "activity-1-a966d.appspot.com",
  messagingSenderId: "107767558416",
  appId: "1:107767558416:web:f159535fea46e36d36b595",
  measurementId: "G-4EDEBZ18CX"
};

const app = initializeApp(firebaseConfig);
const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();