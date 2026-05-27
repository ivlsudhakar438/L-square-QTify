import React from "react";
import styles from "./Button.module.css";
// import ButtonMui from "@mui/material/Button";

function Button({ children }) {
  return <button class={styles.button}>{children}</button>;
}
export default Button;