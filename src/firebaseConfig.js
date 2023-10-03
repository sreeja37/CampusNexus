// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQl0SD9RR0YRs7uwBpmPhaNDwSXBhomoc",
  authDomain: "campusnexus-6de44.firebaseapp.com",
  projectId: "campusnexus-6de44",
  storageBucket: "campusnexus-6de44.appspot.com",
  messagingSenderId: "244716518928",
  appId: "1:244716518928:web:b1ed2c38a51a8f2ce2d495"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth=getAuth(app);
 export {auth,app};