import React, { useContext, useState } from 'react';
import { ChatContext } from '../context/ChatContext';

const UserInput = () => {
  const { sendMessage } = useContext(ChatContext);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Send</button>
    </form>
  );
};

export default UserInput;
