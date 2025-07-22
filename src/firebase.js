// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBjb_Az3tlh7oGrBFZns8YMtgEifobt1uQ",
  authDomain: "exam-prep-5f5b5.firebaseapp.com",
  projectId: "exam-prep-5f5b5",
  storageBucket: "exam-prep-5f5b5.appspot.com", // Fixed storage bucket
  messagingSenderId: "16487191137",
  appId: "1:16487191137:web:9999b8634c660c7abe1020"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en'; // Set default language for auth emails

export { auth };