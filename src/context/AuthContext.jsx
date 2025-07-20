// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  sendEmailVerification,
} from 'firebase/auth';
import { auth } from '../firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const register = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(userCredential.user, {
      url: 'http://localhost:5173/reset-password', // ✅ Match Firebase template setting
    });
    return userCredential;
  };

  const logout = () => signOut(auth);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        signInWithGoogle,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
