import styles from "app/nestedLayout/second/third/layout.module.scss";
import React from "react";

type Props = {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <section className={styles.container}>
      <p>Layout 3</p>
      {children}
    </section>
  );
};
export default Layout;
