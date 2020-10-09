import { useState, useEffect } from 'react';
import { db, auth } from '../config/firebase';

export const useFirestore = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection('messages')
      .orderBy('createdAt')
      .onSnapshot((snap) => {
        let messagesFb = [];
        snap.forEach((doc) =>
          messagesFb.push({
            ...doc.data(),
            id: doc.id,
          })
        );
        setMessages(messagesFb);
      });

    return unsubscribe;
  }, []);

  const addMessage = async (message) => {
    const { uid, photoURL } = auth.currentUser;
    await db.collection('messages').add({
      message,
      createdAt: Date.now(),
      uid,
      photoURL,
    });
  };

  return { messages, addMessage };
};
