// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, getDocs, getDoc, updateDoc, deleteDoc, collection, doc} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdSRgNcdlf2CO34ZLE2rhggBmdZcSeN8Y",
  authDomain: "instituto-vag.firebaseapp.com",
  projectId: "instituto-vag",
  storageBucket: "instituto-vag.appspot.com",
  messagingSenderId: "324934420736",
  appId: "1:324934420736:web:18e2e0a2ec6f798a7a8be5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



