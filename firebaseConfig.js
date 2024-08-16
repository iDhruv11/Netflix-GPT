// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "./src/utils/userSlice";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcO-1mgVGQGoEfW6AU-CPU3xZrfHXWQ74",
  authDomain: "netflixgpt-e8299.firebaseapp.com",
  projectId: "netflixgpt-e8299",
  storageBucket: "netflixgpt-e8299.appspot.com",
  messagingSenderId: "868101018006",
  appId: "1:868101018006:web:2510a9e2b04eaec54acdb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth };