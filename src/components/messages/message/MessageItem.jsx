import React from "react";

const Message = ({ message }) => {
  if (message !== undefined) {
    return <p className="alert">{message}</p>;
  } else {
    return "";
  }
};

export default Message;
