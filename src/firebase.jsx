import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCmu8Y8Owc-BWpY_dMlMOjaN3HUbI1nNoI",
  authDomain: "application-e2ee4.firebaseapp.com",
  projectId: "application-e2ee4",
  storageBucket: "application-e2ee4.appspot.com",
  messagingSenderId: "945831962655",
  appId: "1:945831962655:web:29693b9ff2adcc4d9c8d2a",
  measurementId: "G-34DVK2SL7G"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
