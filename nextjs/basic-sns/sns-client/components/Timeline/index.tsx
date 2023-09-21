"use client";
import styles from "./style.module.scss";
import Post from "@/components/Timeline/Post";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import apiClient from "@/lib/apiClient";
import { useEffect } from "react";

const Timeline = () => {
  const post = z.object({
    content: z.string().min(1, { message: "You can't post in the blank" })
  });

  type postSchemaType = z.infer<typeof post>;

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful }
  } = useForm<postSchemaType>({
    resolver: zodResolver(post)
  });

  const onSubmit = async (data: postSchemaType) => {
    try {
      await apiClient.post("/posts/store", { ...data });
    } catch (e) {
      alert("Invalid input");
      console.log(e);
    }
  };

  // Reset the form when the transmission is completed.
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [formState, isSubmitSuccessful]);

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.textContainer}>
            <textarea placeholder={"What's on your mind"} {...register("content")}></textarea>
            {errors.content && <p>{errors.content.message}</p>}
          </div>
          <div className={styles.buttonContainer}>
            <button type={"submit"}>post</button>
          </div>
        </form>
      </div>
      <div className={styles.postContainer}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
};
export default Timeline;
