import styles from "./app.module.scss";
import { useCallback, useState } from "react";
import clsx from "clsx";


function App() {
  const [toggle, setToggle] = useState(false);

  // Function to toggle navbar
  const toggleNavbar = useCallback(() => setToggle((prev) => !prev), []);


  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li className={styles.navLink}>
            <a href={"#Home"}>Home</a>
          </li>
          <li className={`${styles.navLink} ${styles.service}`}>
            <a href={"#Service"}>Service</a>
            <ul className={styles.dropDown}>
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </ul>
          </li>
          <li className={styles.navLink}>
            <a href={"#About"}>About</a>
          </li>
          <li className={styles.navLink}>
            <a href={"#Contact"} onClick={toggleNavbar}>Contact</a>
          </li>
        </ul>
      </nav>
      <main className={styles.mainContainer}>
        <section id={"Home"} className={styles.secContainer}>
          <h1>Home</h1>
        </section>
        <section id={"Service"} className={styles.secContainer}>
          <h1>Service</h1>
        </section>
        <section id={"About"} className={styles.secContainer}>
          <h1>About</h1>
        </section>
        <div className={clsx(styles.content, toggle && styles.show)}>
          <div>
            <h1>Contact</h1>
          </div>
          <div onClick={toggleNavbar}>x</div>
        </div>
      </main>
    </div>
  );
}

export default App;
