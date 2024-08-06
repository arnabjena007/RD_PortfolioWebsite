// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRiEXEawy5ZfbB4kVJ_XJ-Z-VjBwEyoYQ",
  authDomain: "rdportfolio-1a9aa.firebaseapp.com",
  projectId: "rdportfolio-1a9aa",
  storageBucket: "rdportfolio-1a9aa.appspot.com",
  messagingSenderId: "488260660707",
  appId: "1:488260660707:web:e44244dbd9345940b004d6",
  measurementId: "G-X80W6ZZB53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };