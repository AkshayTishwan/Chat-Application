import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2MQv-dP3X5HycxOHeGG1XDXs0GgStkls",
  authDomain: "chat-e079e.firebaseapp.com",
  projectId: "chat-e079e",
  storageBucket: "chat-e079e.appspot.com",
  messagingSenderId: "924928964498",
  appId: "1:924928964498:web:bbf8d1212f3968cb4ab34b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
