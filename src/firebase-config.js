// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDeVgl-9FLc3cq2fPoelKHg6veADcWtWIE",
  authDomain: "testdb-f0203.firebaseapp.com",
  projectId: "testdb-f0203",
  storageBucket: "testdb-f0203.appspot.com",
  messagingSenderId: "611384455960",
  appId: "1:611384455960:web:89929b66de558bb3e2246d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
