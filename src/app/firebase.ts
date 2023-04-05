import { prodConfig, devConfig, targetEnvironment } from '../environments/environment';
import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from "firebase/firestore";
import { FirebaseApp } from '@angular/fire/app';


let app:any;
let db:Firestore;
let firebaseConfig:any;
let appName:string;

if (targetEnvironment === "prod") {
    appName = 'cannasense production';
    firebaseConfig = prodConfig;
} else {
    console.log('Target Environment: ' + targetEnvironment); 
    appName = 'cannabis-stealth-app';
    firebaseConfig = devConfig;
}

app = initializeApp(firebaseConfig, appName);

const firestore = getFirestore(app);

export {firebaseConfig, app, appName, firestore};