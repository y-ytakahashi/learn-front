import styles from "./page.module.scss";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.title}>
        <h3>Hello Basic SNS</h3>
      </div>
      <div className={styles.content}>
        <div className={styles.timelineContainer}>
          <Timeline />
        </div>
      </div>
    </main>
  );
}
