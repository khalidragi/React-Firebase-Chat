import React, { useRef } from 'react';
import './chatRoom.css';
import { useFirestore } from '../../config/useFirestore';
import MessageInput from '../input/MessageInput';
import Message from '../message/Message';

const ChatRoom = () => {
  const dummy = useRef();
  const { messages } = useFirestore();

  return (
    <div className="chatroom">
      <div className="chatroom__body">
        {messages &&
          messages.map((msg) => <Message key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </div>
      <MessageInput dummy={dummy} />
    </div>
  );
};

export default ChatRoom;
