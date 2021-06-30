import React from "react";
import styles from "./Message.module.css";

function Message({message}) {
  
  
  if (message.length !== 0) { return <p className={styles.alert}>{message}</p>;}
  return <p></p>;

}

export default Message;
