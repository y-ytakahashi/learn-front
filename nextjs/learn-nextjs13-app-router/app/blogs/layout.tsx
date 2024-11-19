import React from "react";
import styles from "./layout.module.scss";
import { BlogListStatic } from "@/components/blogListStatic/blogListStatic";
import RefreshButton from "@/components/refreshButton/refreshButton";

type Props = {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <section className={styles.container}>
      <aside>
        <div className={styles.blogs}>
          <BlogListStatic />
        </div>

        <div className={styles.refreshBtn}>
          <RefreshButton />
        </div>
      </aside>
      <main>{children}</main>
    </section>
  );
};
export default Layout;
