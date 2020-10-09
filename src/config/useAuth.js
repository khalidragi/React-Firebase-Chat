import { useState, useEffect } from 'react';
import firebase, { auth } from '../config/firebase';

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) setUser(auth.currentUser);
      if (!user) setUser(undefined);
    });

    return unsubscribe;
  }, []);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return { user, signInWithGoogle, signOut };
};
