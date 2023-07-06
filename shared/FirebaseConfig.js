// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhSSjwVEMmldVOsFBpXvyTA1nFws4rEvw",
  authDomain: "next-293f9.firebaseapp.com",
  projectId: "next-293f9",
  storageBucket: "next-293f9.appspot.com",
  messagingSenderId: "315587000476",
  appId: "1:315587000476:web:5eb8b0fc039e79a48ed559",
  measurementId: "G-CH4PZBYV6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);