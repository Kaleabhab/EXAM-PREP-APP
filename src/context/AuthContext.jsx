import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from '../firebase';
import { updateProfile } from 'firebase/auth';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false); // Set loading to false once auth state is determined
      
      // Optional: Store user token in localStorage for additional persistence
      if (firebaseUser) {
        firebaseUser.getIdToken().then(token => {
          localStorage.setItem('firebaseToken', token);
        });
      } else {
        localStorage.removeItem('firebaseToken');
      }
    });
    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Store additional user data if needed
      localStorage.setItem('userEmail', email);
      return userCredential;
    } catch (error) {
      throw error;
    }
  };

  const register = async ( name, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(userCredential.user, {
        displayName: name,
      });
      //await sendEmailVerification(userCredential.user);

      localStorage.setItem('userEmail', email, 'userName', name);
      return userCredential;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      // Clear any stored data
      localStorage.removeItem('userEmail');
      localStorage.removeItem('firebaseToken');
    } catch (error) {
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      localStorage.setItem('userEmail', userCredential.user.email);
      return userCredential;
    } catch (error) {
      throw error;
    }
  };

  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading, // Expose loading state
        login,
        register,
        logout,
        signInWithGoogle,
        resetPassword,
      }}
    >
      {!loading && children} {/* Only render children when auth state is determined */}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);