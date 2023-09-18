"use client";
import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import useStore from "@/store";
import supabase from "@/utils/supabase";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/20/solid";
import styles from "./edit.module.scss";

const Edit = () => {
  const router = useRouter();
  const { editedTask } = useStore();
  const { loginUser } = useStore();
  const updateTask = useStore(state => state.updateEditedTask);
  const reset = useStore(state => state.resetEditedTask);

  const signOut = () => {
    supabase.auth.signOut().catch((e) => console.log(e));
    router.push("/auth");
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editedTask.id === "") {
      const { error } = await supabase
        .from("todos")
        .insert({ title: editedTask.title, user_id: loginUser.id ?? "" });
      router.refresh();
    }

    const { error } = await supabase.from("todos")
      .update({ title: editedTask.title })
      .eq("id", editedTask.id);
    router.refresh();
    reset();


  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p>{loginUser.email}</p>
        <ArrowRightOnRectangleIcon onClick={signOut} className={styles.icon} />
      </div>
      <form onSubmit={submitHandler}>
        <input
          type={"text"}
          placeholder={"New Task ?"}
          value={editedTask.title}
          onChange={(e) => updateTask({ ...editedTask, title: e.target.value })} />
        <button type={"submit"}>{editedTask.id === "" ? "Create" : "Update"}</button>
      </form>
    </div>
  );
};
export default Edit;
