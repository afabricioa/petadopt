// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "pet-adopt-81861.firebaseapp.com",
  projectId: "pet-adopt-81861",
  storageBucket: "pet-adopt-81861.firebasestorage.app",
  messagingSenderId: "1067151758405",
  appId: "1:1067151758405:web:f17405597edfd6cf98ff2c",
  measurementId: "G-XXCT3DDXG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);