// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuDfVKX6CrqMj5p-4NFzg8Dpfpov2WTCQ",
  authDomain: "college-finder-66217.firebaseapp.com",
  projectId: "college-finder-66217",
  storageBucket: "college-finder-66217.firebasestorage.app",
  messagingSenderId: "696730169799",
  appId: "1:696730169799:web:2ddfbd4d87170dd6b0e9e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
