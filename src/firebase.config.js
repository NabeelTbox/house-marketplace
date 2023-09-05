import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-yINw3opxblI5H8UfmNKhSyqDJ2yxNws",
  authDomain: "house-marketplace-app-eda07.firebaseapp.com",
  projectId: "house-marketplace-app-eda07",
  storageBucket: "house-marketplace-app-eda07.appspot.com",
  messagingSenderId: "1024397890919",
  appId: "1:1024397890919:web:aa742393b0be72916b8bc2",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
