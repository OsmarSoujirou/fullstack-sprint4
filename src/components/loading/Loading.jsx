import React from 'react';
import { useLoading } from '../../context/LoadingContext';
const Loading = () => {
  const { isLoading } = useLoading();
  const sty = () => {
    if (isLoading()) {
      return `loading--active`;
    } else {
      return `loading`;
    }
  };
  return (
    <div className={sty()}>
      <div className="img">
        <img src="./assets/giphy.webp" alt="" />
        <br />
        Carregando...
      </div>
    </div>
  );
};

export { Loading };
