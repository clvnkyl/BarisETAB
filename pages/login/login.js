// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
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

document.getElementById("loginbtn").addEventListener("click", async (event) => {
  event.preventDefault(); // Prevent the default form submission

  const email = document.getElementById("user").value;
  const password = document.getElementById("pw").value;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    alert("Login Successful");
    const user = userCredential.user;
    window.location.href = "./../Home/home.html"; // Redirect to home page
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Login Failed: " + errorMessage + " (Code: " + errorCode + ")");
  }
});
