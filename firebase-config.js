// firebase-config.js
// เปลี่ยนค่า config ให้ตรงกับ Firebase Project ของคุณ
const firebaseConfig = {
  apiKey: "AIzaSyCXcq9coy4Ah39DTzN9OmZc-nm8JBHPapA",
  authDomain: "feed-32f94.firebaseapp.com",
  projectId: "feed-32f94",
  storageBucket: "feed-32f94.firebasestorage.app",
  messagingSenderId: "939495314483",
  appId: "1:939495314483:web:2eacab83fb89a67812ff46",
  measurementId: "G-M5T6KE9YSE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
