import React from 'react';

const Message = ({ message }) => {
  const isUser = message.sender === 'user';
  return (
    <div style={{ textAlign: isUser ? 'right' : 'left', margin: '10px' }}>
      <span style={{ backgroundColor: isUser ? '#cef' : '#eee', padding: '5px' }}>
        {message.text}
      </span>
    </div>
  );
};

export default Message;
