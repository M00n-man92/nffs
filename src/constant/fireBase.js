/*  */
import { initializeApp } from "firebase/app";
// const dotenv = require('dotenv')

// dotenv.config()
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqPM9CaYFhCE1r2ro26mHPa5blgawAhNY",
  authDomain: "bang-clothing.firebaseapp.com",
  projectId: "bang-clothing",
  storageBucket: "bang-clothing.appspot.com",
  messagingSenderId: "163692581811",
  appId: "1:163692581811:web:a1f1dc060ae0bac272b1c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app