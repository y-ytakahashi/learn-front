import styles from "./subscribe.module.scss";
import Image from "next/image";

const Subscribe = () => {
  return (
    <div className={styles.subscribe}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <Image
            src={
              "https://plus.unsplash.com/premium_photo-1664199486611-3e1277e150cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            }
            alt={"the business woman take phone"}
            width={512}
            height={512}
          />
        </div>
        <div className={styles.textDiv}>
          <h4>Best Way To Start Tour Journey!</h4>
          <p>
            We offer personalize itineraries tailored to individual preference
            and interests.
          </p>
          <button className={styles.btn}>Start Here</button>
        </div>
      </div>
    </div>
  );
};
export default Subscribe;
