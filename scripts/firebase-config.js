import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCeSnm2Dkevz8nto49EOG-y7jOOMHlAnoM",
  authDomain: "moodtree-bdc88.firebaseapp.com",
  projectId: "moodtree-bdc8d",
  storageBucket: "moodtree-bdc8d.appspot.com",
  messagingSenderId: "721781735896",
  appId: "1:721781735896:web:279be28f1166f7cb6732ad",
  measurementId: "G-DLFEQ9SDMJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);