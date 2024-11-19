"use client";
import styles from "./error.module.scss";

import React from "react";

const Error = ({ error }: { error: Error }) => {
  return (
    <div className={styles.container}>
      <p>
        Data fetching in server failed.
      </p>
    </div>
  );
};
export default Error;
