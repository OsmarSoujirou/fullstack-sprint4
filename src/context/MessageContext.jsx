import React, { useState, createContext, useContext, useCallback } from "react";


const MessageContext = createContext();

/* Para exportar o contexto */
const useMessage = () => {
  const context = useContext(MessageContext);
  return context;
};

/* Criação do Provider */
const MessageProvider = ({ children }) => {
  const [messages, setMessage] = useState([]);

  const AddMessage = useCallback(({ msg }) => {
    setMessage((old) => [msg, ...old]);
    setTimeout(() => setMessage((messages) => messages.filter((mess) => mess !== msg))
    , 2000);
  },[])


  return (
    <MessageContext.Provider value={{ AddMessage, messages }}>
      {children}
    </MessageContext.Provider>
  );
};

/* Exportação das funções publicas */
export { MessageProvider, useMessage };
