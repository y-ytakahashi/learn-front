import styles from "./style.module.scss";
import Post from "@/components/Timeline/Post";

const Timeline = () => {
  return (
    <>
      <div className={styles.container}>
        <form>
          <div className={styles.textContainer}>
            <textarea placeholder={"What's on your mind"}></textarea>
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
