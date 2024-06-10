import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCZHGk845Xg00J4SKt5fx7QDb3uBoCZg6c",
  authDomain: "inventory-441c0.firebaseapp.com",
  databaseURL:
    "https://inventory-441c0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "inventory-441c0",
  storageBucket: "inventory-441c0.appspot.com",
  messagingSenderId: "195009836153",
  appId: "1:195009836153:web:b6c3adf5709721e4e310a8",
  measurementId: "G-8NS1LG6Z22",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const email = document.getElementById("username").value;
const password = document.getElementById("password").value;

document.getElementById("loginbtn").addEventListener("click", () => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      alert("Login Successful");
      const user = userCredential.user;
      window.location.href = "./../pages/Home/home.html";
      // ...
    })
    .catch((error) => {
      alert("Login Failed");
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
