// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtngcStoWXAILP2IteqQd4d-ymE8J0oG4",
  authDomain: "cafeteriaweb-e12cb.firebaseapp.com",
  projectId: "cafeteriaweb-e12cb",
  storageBucket: "cafeteriaweb-e12cb.firebasestorage.app",
  messagingSenderId: "180861213176",
  appId: "1:180861213176:web:40ff06bd31c9bcdd3fde0d",
  measurementId: "G-LB8M9BBQV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

