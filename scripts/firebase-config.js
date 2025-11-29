const firebaseConfig = {
    apiKey: "AIzaSyCeSnm2Dkevz8nto49EOG-y7jOOMHlAnoM",
    authDomain: "moodtree-bdc88.firebaseapp.com",
    projectId: "moodtree-bdc88",
    storageBucket: "moodtree-bdc88.firebasestorage.app",
    messagingSenderId: "721781735896",
    appId: "1:721781735896:web:279be28f1166f7cb6732ad",
    measurementId: "G-DLFEQ9SDMJ"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  const analytics = firebase.analytics ? firebase.analytics() : null;

  export { auth, db };