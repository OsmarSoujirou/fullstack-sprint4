import React, { useState, createContext, useContext, useCallback } from "react";
import Message from "../components/message/Message";

const MessageContext = createContext();

const useMessage = () => {
  const context = useContext(MessageContext);
  return context;
};

const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState([]);

  const AddMessage = useCallback((message) => {
    const newMessage = message;
    setMessage([newMessage]);
    setTimeout(() => setMessage([]),2000);
  },[]);
  return (
    <MessageContext.Provider value={{ AddMessage }}>
      {children}
      <Message message={message} />
    </MessageContext.Provider>
  );
};

export {MessageProvider, useMessage};
