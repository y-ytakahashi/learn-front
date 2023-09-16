"use client";
import styles from "./refreshButton.module.scss";
import { useRouter } from "next/navigation";

const RefreshButton = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <button onClick={() => router.refresh()}>Refresh current route</button>
    </div>
  );
};
export default RefreshButton;
