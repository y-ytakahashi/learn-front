import React from "react";
import styles from "./spinner.module.scss";


type Props = {
  color?: string
}
const Spinner = ({ color = "red" }: Props) => {
  return (
    <div className={styles.container}>
      <div style={{ color: color }} className={styles.spinner} />
    </div>

  );
};
export default Spinner;
