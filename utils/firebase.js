// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC48ZN-0P-Uxg2n2xHUxNLWa9pVeUSBKoI",
    authDomain: "blogposts-ca92e.firebaseapp.com",
    projectId: "blogposts-ca92e",
    storageBucket: "blogposts-ca92e.appspot.com",
    messagingSenderId: "906046908671",
    appId: "1:906046908671:web:0af40a30445f810c5584ca",
    measurementId: "G-G3WS87YGPL"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

