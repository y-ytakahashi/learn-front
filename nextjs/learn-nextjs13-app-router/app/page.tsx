import styles from "./page.module.scss";
import NoteList from "@/components/noteList/noteList";
import TimerCounter from "@/components/timerCounter/timerCounter";
import { Suspense } from "react";
import Spinner from "@/components/spinner/spinner";
import RefreshButton from "@/components/refreshButton/refreshButton";

export default function Home() {
  return (
    <main className={styles.container}>
      <Suspense fallback={<Spinner />}>
        <NoteList />
      </Suspense>
      <TimerCounter />
      <RefreshButton />

    </main>
  );
}
