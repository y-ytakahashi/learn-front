import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/database.types";
import { cookies } from "next/headers";
import { format } from "date-fns";
import styles from "./page.module.scss";

type PageProps = {
  params: {
    todoId: string;
  }
}

export default async function TodoDetailPage({ params }: PageProps) {
  const supabase = createServerComponentClient<Database>({
    cookies
  });
  const { data: todo } = await supabase
    .from("todos")
    .select("*")
    .eq("id", params.todoId)
    .single();
  console.log({ todo });
  return (
    <div className={styles.container}>
      <div className={styles.textArea}>
        <p>Task ID: {todo?.id}</p>
        <p>Title: {todo?.title}</p>
        <p>Status: {todo?.completed ? "done" : "not yet"}</p>
        <p>Created At: {todo && format(new Date(todo?.created_at), "yyyy-MM-dd HH:mm:ss")}</p>
        {todo?.title}
      </div>
    </div>
  );
}
