import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";


const JohnFirebaseConfig = {
  apiKey: "AIzaSyB_QY2O3PRph_6PO1nLVXs0Ivqp4L_yo78",
  authDomain: "profit-ed9b0.firebaseapp.com",
  projectId: "profit-ed9b0",
  storageBucket: "profit-ed9b0.appspot.com",
  messagingSenderId: "3678549290",
  appId: "1:3678549290:web:4f79305841c338f6655a53",
  measurementId: "G-BB81M9MEJV"
};

const TerryFirebaseConfig = {
    apiKey: "AIzaSyDRprDlSRQPQEOruY3w8zz3Cz7TzJbv4-k",
    authDomain: "calcs4profit.firebaseapp.com",
    projectId: "calcs4profit",
    storageBucket: "calcs4profit.appspot.com",
    messagingSenderId: "619178158149",
    appId: "1:619178158149:web:d761b93e7cf659d198db2c",
    measurementId: "G-2DH8SK7LJK"
};

// Initialize Firebase
export const myApp = initializeApp(JohnFirebaseConfig);
export const myDb = getFirestore(myApp);
export const auth = getAuth(myApp);
