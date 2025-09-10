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

posts: {
  post_id: {
    user_id: "uid",
    text: "ข้อความโพสต์",
    hashtags: ["#โลกสวย"],
    timestamp: 1234567890,
    seen_count: 0,
    repost_count: 0,
    repost_from: null  // ถ้าเป็นรีโพสต์จะเก็บ post_id ต้นฉบับ
  }
}

