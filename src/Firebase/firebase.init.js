// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDywtZK1jJxqE-5dHnf9qrO0lWYdv1jvNU",
  authDomain: "job-protal-50c1f.firebaseapp.com",
  projectId: "job-protal-50c1f",
  storageBucket: "job-protal-50c1f.firebasestorage.app",
  messagingSenderId: "542479362332",
  appId: "1:542479362332:web:8c2ebb4f90889c9256f2d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);