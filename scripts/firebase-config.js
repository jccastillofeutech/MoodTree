import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBN2Pnvi7518-92DiH2hCFVG8Z8Cb6OQDY",
  authDomain: "moodtree-f0f56.firebaseapp.com",
  projectId: "moodtree-f0f56",
  storageBucket: "moodtree-f0f56.appspot.com",
  messagingSenderId: "200215095780",
  appId: "1:200215095780:web:79c4cab45a86931ae4bff1",
  measurementId: "G-X4HY9T73T5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);