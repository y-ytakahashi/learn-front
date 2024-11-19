import styles from "./noteList.module.scss";
import type { Database } from "@/database.types";
import { format } from "date-fns";

type Note = Database["public"]["Tables"]["notes"]["Row"];

const fetchNote = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // fetch data
  const res = await fetch(`${process.env.url}/rest/v1/notes?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string
    }),
    cache: "no-store"
    // next: { revalidate: 10 }
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const notes: Note[] = await res.json();
  return notes;
};
const NoteList = async () => {
  const notes = await fetchNote();
  return (
    <div className={styles.container}>
      <h1>
        Notes
      </h1>
      <ul>
        {notes.map((note) => {
          return (
            <li key={note.id}>
              <p>{note.title}</p>
              <strong>Created at:</strong>
              <p>{note && format(new Date(note.created_at), "yyyy-MM-dd HH:mm:ss")}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default NoteList;
