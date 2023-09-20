import styles from "./styles.module.scss";
import Image from "next/image";

const Post = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image src={"https://via.placeholder.com/150"} alt={"place holder"} height={150} width={150} />
        <div className={styles.postInfo}>
          <h2>y-y</h2>
          <p>09/20 14:50</p>
        </div>
      </div>
      <div className={styles.postBody}>
        <p>hello</p>
      </div>
    </div>
  );
};
export default Post;
