import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import MessageList from './MessageList';
import UserInput from './UserInput';

const ChatWindow = () => {
  const { pastConversations, loadConversation } = useContext(ChatContext);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '20%', borderRight: '1px solid #ccc' }}>
        <h3>History</h3>
        {pastConversations.map((session, idx) => (
          <button key={idx} onClick={() => loadConversation(session.id)}>
            Session {idx + 1}
          </button>
        ))}
      </div>
      <div style={{ width: '80%' }}>
        <MessageList />
        <UserInput />
      </div>
    </div>
  );
};

export default ChatWindow;
