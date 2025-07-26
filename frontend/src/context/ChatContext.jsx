import { createContext, useState, useContext } from "react";

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [sessions, setSessions] = useState([]);
  const [activeSessionId, setActiveSessionId] = useState(null);

  const addMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  const value = {
    messages,
    addMessage,
    loading,
    setLoading,
    input,
    setInput,
    sessions,
    setSessions,
    activeSessionId,
    setActiveSessionId,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
