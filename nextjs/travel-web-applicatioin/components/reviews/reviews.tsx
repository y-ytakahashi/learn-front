import styles from "./reviews.module.scss";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";

const clientImages = [
  {
    src: "https://plus.unsplash.com/premium_photo-1661670468082-a2c8c28122d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    alt: "travel tour",
  },
  {
    src: "https://images.unsplash.com/photo-1627240330670-2a18ff1f6b82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    alt: "savanna tour",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1679619556628-dc9cb6d5e19f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    alt: "island tour",
  },
  {
    src: "https://images.unsplash.com/photo-1500986211104-188594ec323b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    alt: "amazon tour",
  },
];
const Reviews = () => {
  return (
    <div className={styles.reviews}>
      <div className={styles.container}>
        <div className={styles.textDiv}>
          <span className={styles.redText}>FROM OUR CLIENT</span>
          <h3>Real Travel History From Beloved Clients</h3>
          <p>
            By choosing us as their tour agency, customers can expect an
            enriching and enjoyable travel experience,filled with unforgettable
            memories that will last lifetime.
          </p>
          <span className={styles.stars}>
            <AiFillStar className={styles.icon} />
            <AiFillStar className={styles.icon} />
            <AiFillStar className={styles.icon} />
            <AiFillStar className={styles.icon} />
            <AiFillStar className={styles.icon} />
          </span>
          <div className={styles.clientImages}>
            {clientImages.map(({ src, alt }) => (
              <Image key={src} src={src} alt={alt} width={300} height={300} />
            ))}
          </div>
        </div>
        <div className={styles.imageDiv}>
          <Image
            src={
              "https://images.unsplash.com/photo-1687452295109-7726e9d5d5bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            }
            alt={"A girl climbing a mountain"}
            width={512}
            height={512}
          />
        </div>
      </div>
    </div>
  );
};
export default Reviews;
