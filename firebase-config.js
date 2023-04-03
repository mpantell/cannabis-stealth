// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//databaseURL: "https://cannabis-stealth-default-rtdb.firebaseio.com",

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrP6u4-RCQpTkV6duGSktrvfaRIORIxrM",
  authDomain: "cannabis-stealth.firebaseapp.com",
  databaseURL: "http://127.0.0.1:4000/firestore/",
  projectId: "cannabis-stealth",
  storageBucket: "cannabis-stealth.appspot.com",
  messagingSenderId: "439282670891",
  appId: "1:439282670891:web:946ac41f9b2b4a9e61f96e",
  measurementId: "G-1STRME7062"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);