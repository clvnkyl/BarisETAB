// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

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
const db = getFirestore(app);

document
  .getElementById("registerBtn")
  .addEventListener("click", async (event) => {
    event.preventDefault();

    const email = document.getElementById("user").value;
    const password = document.getElementById("pw").value;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Create a document in Firestore for the new user
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        createdAt: new Date(),
      });

      alert("Register Successful");
      window.location.href = "login.html";
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Register Failed: " + errorMessage + " (Code: " + errorCode + ")");
    }
  });
