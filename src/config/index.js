// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz-w6Acv2AJyWvyp1fsgyuerzmgBd1z3c",
  authDomain: "twitter-f2fec.firebaseapp.com",
  projectId: "twitter-f2fec",
  storageBucket: "twitter-f2fec.appspot.com",
  messagingSenderId: "650824615600",
  appId: "1:650824615600:web:19918c3fe38f1f82575d75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
export {
    app,
  provider,
  auth,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
};