// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2wjbkoFY859uNxm8ApBxXegGxFGgKlVc",
  authDomain: "netflixgpt-8856e.firebaseapp.com",
  projectId: "netflixgpt-8856e",
  storageBucket: "netflixgpt-8856e.firebasestorage.app",
  messagingSenderId: "133063525955",
  appId: "1:133063525955:web:7533c199351104611076f6",
  measurementId: "G-VZ8JBM3MSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();