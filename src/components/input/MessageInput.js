import React, { useState } from 'react';
import { useFirestore } from '../../config/useFirestore';
import './messageInput.css';

const MessageInput = ({ dummy }) => {
  const { addMessage } = useFirestore();
  const [formValue, setFormValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValue === '') return;
    setFormValue('');
    await addMessage(formValue);
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="input__container">
      <form onSubmit={handleSubmit} disabled={formValue}>
        <input
          type="text"
          placeholder="enter your message"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit">
          <img
            src="https://clipart.info/images/ccovers/1496175219emoji-android-black-right-pointing-triangle.png"
            alt="send"
          />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
