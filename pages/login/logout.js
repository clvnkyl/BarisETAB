// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkgelm78txf34_97oH8RSn8L8SEYzdNec",
  authDomain: "barisetab-ae94e.firebaseapp.com",
  projectId: "barisetab-ae94e",
  storageBucket: "barisetab-ae94e.appspot.com",
  messagingSenderId: "160531357457",
  appId: "1:160531357457:web:c43ed7c515e00f7e34b6b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle logout
document.getElementById("signUpbtn").addEventListener("click", async () => {
  try {
    alert("Logged out successfully.");
    window.location.href = "./../Login/login.html"; // Redirect to login page
  } catch (error) {
    alert("Logout Failed: " + error.message);
  }
});
