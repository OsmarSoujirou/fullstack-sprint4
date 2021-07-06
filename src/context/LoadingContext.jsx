import React, { useContext, createContext, useState, useCallback } from 'react';
const LoadingContext = createContext();
/* Para exportar o contexto */
const useLoading = () => {
  const context = useContext(LoadingContext);
  return context;
};
/* Criação do Provider */
const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState([false]);

  const addRequest = useCallback(() => {
    setLoading((old) => [...old, true]);
  }, []);
  const removeRequest = useCallback(() => {
    setTimeout(() => setLoading((old) => old.filter((_, i) => i !== 1)), 500);
  }, []);
  const isLoading = useCallback(() => {
    return loading.includes(true);
  }, [loading]);

  return (
    <LoadingContext.Provider
      value={{ addRequest, removeRequest, isLoading, loading }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

/* Exportação das funções publicas */
export { LoadingProvider, useLoading };
