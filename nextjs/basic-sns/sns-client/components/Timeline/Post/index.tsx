import styles from "./styles.module.scss";
import Image from "next/image";
import { IPost } from "@/components/Timeline/types";
import { format } from "date-fns";

const Post = ({ content, author, createdAt }: IPost) => {
  console.log({ author });
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src={`http://localhost:8000/statics/${author.profile?.profileImgUrl}` ?? ""}
          alt={"place holder"}
          height={150}
          width={150}
        />
        <div className={styles.postInfo}>
          <h2>{author?.username ?? "no name"}</h2>
          <p>{format(new Date(createdAt), "yyyy-MM-dd hh:mm:ss")}</p>
        </div>
      </div>
      <div className={styles.postBody}>
        <p>{content}</p>
      </div>
    </div>
  );
};
export default Post;
