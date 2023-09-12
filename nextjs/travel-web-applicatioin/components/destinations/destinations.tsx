import styles from "./destinations.module.scss";

// Imported icons
import { MdLocationPin } from "react-icons/md";
import {
  BsFillCalendarDateFill,
  BsFillCreditCard2BackFill,
} from "react-icons/bs";

const Destinations = () => {
  return (
    <div className={styles.destinations}>
      <div className={styles.container}>
        <div className={styles.title}>
          <span className={styles.redText}>EXPLORE NOW</span>
          <h3>Find Your Dream Destination</h3>
          <p>
            Fill in the fields below to find the best spot for your next tour.
          </p>
        </div>
        <div className={styles.searchField}>
          <div className={styles.inputField}>
            <MdLocationPin className={styles.icon} />
            <input type={"text"} placeholder={"Location"} />
          </div>

          <div className={styles.inputField}>
            <BsFillCalendarDateFill className={styles.icon} />
            <input type={"text"} placeholder={"Location"} />
          </div>

          <div className={styles.inputField}>
            <BsFillCreditCard2BackFill className={styles.icon} />
            <input type={"text"} placeholder={"Location"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Destinations;
