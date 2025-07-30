import React, { createContext, useState } from 'react';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [pastConversations, setPastConversations] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = (text) => {
    const userMsg = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);

    setLoading(true);
    // fake AI reply
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'ai', text: 'AI Reply' }]);
      setLoading(false);
    }, 1000);
  };

  const loadConversation = (id) => {
    const selected = pastConversations.find((c) => c.id === id);
    if (selected) {
      setMessages(selected.messages);
    }
  };

  return (
    <ChatContext.Provider
      value={{ messages, sendMessage, pastConversations, loadConversation, loading }}
    >
      {children}
    </ChatContext.Provider>
  );
};
