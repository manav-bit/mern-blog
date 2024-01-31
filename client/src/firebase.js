
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-72385.firebaseapp.com",
  projectId: "mern-blog-72385",
  storageBucket: "mern-blog-72385.appspot.com",
  messagingSenderId: "207739732572",
  appId: "1:207739732572:web:6d9b615db838288951dc99"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);