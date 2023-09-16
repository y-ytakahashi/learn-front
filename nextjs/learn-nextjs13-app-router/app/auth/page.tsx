import React from "react";
import Auth from "@/components/auth/auth";
import styles from "./page.module.scss";

const AuthPage = () => {
  return (
    <main className={styles.container}>
      <Auth />
    </main>
  );
};
export default AuthPage;
