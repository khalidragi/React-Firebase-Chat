import React from 'react';
import './message.css';
import { auth } from '../../config/firebase';
import { timeDifference } from '../../helpers/timeDiff';

const Message = ({ message }) => {
  const { uid } = auth.currentUser && auth.currentUser;
  const messageClass = message.uid === uid ? 'received' : 'sent';
  return (
    <>
      <div className={`message ${messageClass}`}>
        <img src={message.photoURL} alt="user" />
        <div className="message__content">
          <p>{message.message}</p>
          <span>_{timeDifference(message.createdAt)}</span>
        </div>
      </div>
    </>
  );
};

export default Message;
