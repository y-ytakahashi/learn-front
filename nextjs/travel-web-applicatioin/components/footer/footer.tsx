import styles from "./footer.module.scss";
import { BiLogoMediumOld } from "react-icons/bi";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoDiv}>
          <div className={styles.logo}>
            <BiLogoMediumOld className={styles.icon} />
            <span>OU-Trips</span>
          </div>
          <div className={styles.socials}>
            <ImFacebook className={styles.icon} />
            <BsTwitter className={styles.icon} />
            <AiFillInstagram className={styles.icon} />
          </div>

          <div className={styles.link}>
            <span className={styles.title}>Information</span>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Explore</a>
              </li>
              <li>
                <a href="#">Travel</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div className={styles.link}>
            <span className={styles.title}>Helpful Links</span>
            <ul>
              <li>
                <a href="#">Destination</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Travel & Condition</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>
          <div className={styles.link}>
            <span className={styles.title}>Contact Detail</span>
            <span className={styles.phone}>+651 123 456</span>
            <span className={styles.email}>
              <a href={"mailto:support@y-y.dev"}>support@y-y.dev</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
