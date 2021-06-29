import React from "react";
import styles from "./Alert.module.css";

function Alert({msg}) {

  if (msg) { return <p className={styles.alert}>{msg}</p>;}
  return <p></p>;

}

export default Alert;
