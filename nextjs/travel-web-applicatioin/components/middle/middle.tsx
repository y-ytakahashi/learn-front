import styles from "./middle.module.scss";

const Middle = () => {
  return (
    <div className={styles.middle}>
      <div className={styles.grid}>
        <span className={styles.item}>
          <h1>10</h1>
          <p>World Of Experiences</p>
        </span>
        <span className={styles.item}>
          <h1>2K+</h1>
          <p>Fine Destinations</p>
        </span>
        <span className={styles.item}>
          <h1>10K+</h1>
          <p>Customer Reviews</p>
        </span>
        <span className={styles.item}>
          <h1>4.8</h1>
          <p>Overall Rating</p>
        </span>
      </div>
    </div>
  );
};
export default Middle;
