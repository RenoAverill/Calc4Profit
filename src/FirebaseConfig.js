// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRprDlSRQPQEOruY3w8zz3Cz7TzJbv4-k",
    authDomain: "calcs4profit.firebaseapp.com",
    projectId: "calcs4profit",
    storageBucket: "calcs4profit.appspot.com",
    messagingSenderId: "619178158149",
    appId: "1:619178158149:web:d761b93e7cf659d198db2c",
    measurementId: "G-2DH8SK7LJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);