import React, { Suspense } from "react";
import styles from "./layout.module.scss";
import Edit from "@/components/Todo/edit/edit";
import Spinner from "@/components/spinner/spinner";
import List from "@/components/Todo/list/list";

type Props = {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <section className={styles.container}>
      <aside className={styles.side}>
        <Edit />
        <Suspense fallback={<Spinner />}>
          <div>Todo List</div>
          <List />
        </Suspense>

      </aside>
      <main>
        {children}
      </main>
    </section>
  );
};
export default Layout;
