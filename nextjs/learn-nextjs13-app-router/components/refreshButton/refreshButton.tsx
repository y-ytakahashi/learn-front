"use client";
import styles from "./refreshButton.module.scss";
import { useRouter } from "next/navigation";

const RefreshButton = () => {
  const router = useRouter();
  return (
    <button className={styles.refreshBtn} onClick={() => router.refresh()}>Refresh current route</button>
  );
};
export default RefreshButton;
