// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// ✅ Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjb_Az3tlh7oGrBFZns8YMtgEifobt1uQ",
  authDomain: "exam-prep-5f5b5.firebaseapp.com",
  projectId: "exam-prep-5f5b5",
  storageBucket: "exam-prep-5f5b5.appspot.com",
  messagingSenderId: "16487191137",
  appId: "1:16487191137:web:9999b8634c660c7abe1020"
};

// 🔥 Initialize Firebase app
const app = initializeApp(firebaseConfig);

// 🔐 Initialize Firebase Auth
const auth = getAuth(app);
auth.languageCode = 'en'; // Optional: set default language for email auth

// 🗃️ Initialize Firestore
const db = getFirestore(app);

// ✅ Export both so you can use them throughout your app
export { auth, db };
