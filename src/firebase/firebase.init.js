// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHhS5Bfj7Ie5kFOWK42OKfyF7KsKRe3Vg",
  authDomain: "coffee-store-b0743.firebaseapp.com",
  projectId: "coffee-store-b0743",
  storageBucket: "coffee-store-b0743.firebasestorage.app",
  messagingSenderId: "288616246597",
  appId: "1:288616246597:web:fbfd2b0be69998dcace22c"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)