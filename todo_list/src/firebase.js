// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDlgpyrdz1ovSy5S8ysTvxm0cOw4vork4",
  authDomain: "todolist-a231f.firebaseapp.com",
  projectId: "todolist-a231f",
  storageBucket: "todolist-a231f.appspot.com",
  messagingSenderId: "935465403639",
  appId: "1:935465403639:web:0d2945ac79ccc97ba2bff2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);