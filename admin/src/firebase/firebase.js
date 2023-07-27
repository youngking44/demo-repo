// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmXaW7-LSopqyNN6_vEqPByYlTEfIi1F0",
  authDomain: "mike-node-shop.firebaseapp.com",
  projectId: "mike-node-shop",
  storageBucket: "mike-node-shop.appspot.com",
  messagingSenderId: "409988110533",
  appId: "1:409988110533:web:18858c34ab29ce0ee078ac",
  measurementId: "G-4Y7S484BP8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
