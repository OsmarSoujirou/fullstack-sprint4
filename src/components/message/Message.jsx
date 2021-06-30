import React from "react";

function Message({message}) {
  
  if (message !== "") { return <p className="alert">{message}</p>;}
  return <p></p>;

}

export default Message;
