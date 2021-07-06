import React from "react";
import Message from "./message/MessageItem";
import { useMessage }  from "../../context/MessageContext";

const Messages = () => {
  const { messages } = useMessage();
  const viewMessages = messages.map((message, index) => (
    <Message key={index} message={message} />
  ));
  return (
<div className="messagens">{viewMessages}</div>
  );
};

export { Messages };
