"use client";
import { Database } from "@/database.types";
import { useRouter } from "next/navigation";
import useStore from "@/store";
import supabase from "@/utils/supabase";
import Link from "next/link";
import { PencilIcon, TrashIcon } from "@heroicons/react/20/solid";
import styles from "./item.module.scss";

type Todo = Database["public"]["Tables"]["todos"]["Row"]

type Props = {
  todo: Todo;
}
const TodoItem = ({ todo }: Props) => {
  const router = useRouter();
  const updateTask = useStore(state => state.updateEditedTask);
  const resetTask = useStore(state => state.resetEditedTask);

  // update supabase todo table
  const updateMutate = async ({ id, completed }: { id: string, completed: boolean }) => {
    await supabase.from("todos").update({ completed }).eq("id", id);
    resetTask();
    router.refresh();
  };

  const deleteMutate = async (id: string) => {
    await supabase.from("todos").delete().eq("id", id);
    router.refresh();
  };

  return (
    <li>
      <div className={styles.container}>
        <input type={"checkbox"} checked={todo.completed}
               onChange={() => updateMutate({ id: todo.id, completed: !todo.completed })} />
        <Link href={`auth/todo-crud/${todo.id}`}>{todo.title}</Link>
        <div>
          <PencilIcon className={styles.icon} onClick={() => updateTask({ id: todo.id, title: todo.title })} />
          <TrashIcon className={styles.icon} onClick={() => deleteMutate(todo.id)} />
        </div>
      </div>
    </li>
  );
};

export default TodoItem;