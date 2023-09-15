import styles from "./home.module.scss";
import { AiOutlineSwapRight } from "react-icons/ai";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.videoBg}>
        <video
          src={
            "https://joy1.videvo.net/videvo_files/video/free/2014-12/large_watermarked/Raindrops_Videvo_preview.mp4"
          }
          autoPlay
          loop
          muted
        />
      </div>
      <div className={styles.sectionText}>
        <h1>Unlock Your Travel Dreams with Us!</h1>
        <p>
          Discover the world &apos; s most adventurous nature, life is so short
          for a trip.
        </p>
        <button>
          GET STARTED <AiOutlineSwapRight className={"icon"} />
        </button>
      </div>
      <div className={styles.popularPlaces}>
        <div className={styles.content}>
          <h3>Popular Places</h3>
          <div className={styles.images}></div>
        </div>
      </div>
    </div>
  );
};
export default Home;
