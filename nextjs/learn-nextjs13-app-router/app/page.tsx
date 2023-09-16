import styles from "./page.module.scss";
import NoteList from "@/components/noteList/noteList";

export default function Home() {
  return (
    <main className={styles.container}>
      <NoteList />
    </main>
  );
}
