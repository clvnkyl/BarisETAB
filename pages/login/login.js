// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
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

/* LOGIN */
/* LOGIN */
/* LOGIN */
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
    // Redirect to home page
    window.location.href = "./../Home/home.html";
  } catch (error) {
    const errorCode = error.code;
    alert("Login Failed: " + error.message);
  }

  // Clear input fields
  document.getElementById("user").value = "";
  document.getElementById("pw").value = "";
});

/* OPEN/CLOSE FORM */
/* OPEN/CLOSE FORM */
/* OPEN/CLOSE FORM */

document.getElementById("forgotPw").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".forgotPass").style.display = "block";
});

document.getElementById("close").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".forgotPass").style.display = "none";
});

document.getElementById("sendCode").addEventListener("click", (e) => {
  e.preventDefault();

  const verifyEmail = document.getElementById("verificationEmail").value;

  sendPasswordResetEmail(auth, verifyEmail)
    .then(() => {
      alert("Password reset sent to " + verifyEmail);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});
