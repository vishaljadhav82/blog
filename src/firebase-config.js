// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVg_DbE1b9vLGQAXr7U3P04A_faAUlvKk",
  authDomain: "blog-3551c.firebaseapp.com",
  projectId: "blog-3551c",
  storageBucket: "blog-3551c.appspot.com",
  messagingSenderId: "261090509192",
  appId: "1:261090509192:web:22d53a87e182eae41a3a3d",
  measurementId: "G-S50Y1QXPVH"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);