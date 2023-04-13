// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//"https://cannabis-stealth-default-rtdb.firebaseio.com"
//databaseURL: "https://cannabis-stealth-default-rtdb.firebaseio.com",

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


/*const devConfig = {
  apiKey: "AIzaSyBrP6u4-RCQpTkV6duGSktrvfaRIORIxrM",
  authDomain: "cannabis-stealth.firebaseapp.com",
  databaseURL: "https://cannabis-stealth-default-rtdb.firebaseio.com",
  projectId: "cannabis-stealth",
  storageBucket: "cannabis-stealth.appspot.com",
  messagingSenderId: "439282670891",
  appId: "1:439282670891:web:946ac41f9b2b4a9e61f96e",
  measurementId: "G-1STRME7062"
};

const productionConfig = {
  apiKey: "AIzaSyDDmEKSu5P5MKXecUmekJY8SegEcshOVI0",
  databaseURL: "https://cannasense-software-default-rtdb.firebaseio.com",
  authDomain: "cannasense-software.firebaseapp.com",
  projectId: "cannasense-software",
  storageBucket: "cannasense-software.appspot.com",
  messagingSenderId: "1044929068666",
  appId: "1:1044929068666:web:4d1da6c51b6b3b6da385c3",
  measurementId: "G-6CTQVGN7N7"
};

// Initialize Firebase app for dev environment
const devApp = firebase.initializeApp(devConfig);

// Initialize Firebase app for production environment
const prodApp = firebase.initializeApp(prodConfig, "production");

// Initialize Firestore instances for dev and production environments
const devFirestore = devApp.firestore();
const prodFirestore = prodApp.firestore();

//const firebaseConfig = process.env.NODE_ENV === 'production' ? prodConfig : prodConfig;
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);*/