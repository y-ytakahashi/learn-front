"use client";
import React, { useEffect, useState } from "react";
import styles from "./timerCounter.module.scss";

const TimerCounter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => setCount
    (prevCount => prevCount + 1), 1000);
  }, []);

  return (
    <div className={styles.container}>
      <h3>Up Timer</h3>
      <p>{count}</p>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
};
export default TimerCounter;
