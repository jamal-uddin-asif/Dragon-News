// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2Nmspnw7uydF8Ooy6m3ioJtS0SCFwblQ",
  authDomain: "dragon-news-350ab.firebaseapp.com",
  projectId: "dragon-news-350ab",
  storageBucket: "dragon-news-350ab.firebasestorage.app",
  messagingSenderId: "202381872777",
  appId: "1:202381872777:web:ba1b11fa0e2d50f5e50058"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
