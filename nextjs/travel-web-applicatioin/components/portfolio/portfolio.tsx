import styles from "./portfolio.module.scss";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.heading}>
            <h3>Why should you choose us</h3>
            <p>
              We have extensive knowledge and experience in the travel industry.
            </p>
          </div>
          <div className={styles.singlePortfolio}>
            <div className={styles.photoIcon}>
              <Image
                src={
                  "https://images.unsplash.com/photo-1518489913881-199b7c7a081d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80"
                }
                width={512}
                height={512}
                alt={"girl"}
              />
            </div>
            <div className={styles.info}>
              <h4>Safety and support</h4>
              <p>
                Our top priority is the safety and well-being of our client. We
                maintain high safety standards and have emergency support.
                available during the trip.
              </p>
            </div>
          </div>

          <div className={styles.singlePortfolio}>
            <div className={styles.photoIcon}>
              <Image
                src={
                  "https://images.unsplash.com/photo-1509576931792-214960705f8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
                }
                width={512}
                height={512}
                alt={"girl"}
              />
            </div>
            <div className={styles.info}>
              <h4>Safety and support</h4>
              <p>
                Whether it`s domestic tour or an international adventure, we
                cover a wide range of destinations to cater to different
                interested and preferences.
              </p>
            </div>
          </div>

          <div className={styles.singlePortfolio}>
            <div className={styles.photoIcon}>
              <Image
                src={
                  "https://images.unsplash.com/photo-1550071593-fd1bdaf1f93c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                }
                width={512}
                height={512}
                alt={"girl"}
              />
            </div>
            <div className={styles.info}>
              <h4>24/7 Customer Support</h4>
              <p>
                Our dedicated customer support team is available round the clock
                to address any queries or concerns before, during, and after the
                trip.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Image
            src={
              "https://images.unsplash.com/photo-1653393342554-b48f44935014?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
            }
            alt={"Sun rise yoga"}
            width={512}
            height={512}
          />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
