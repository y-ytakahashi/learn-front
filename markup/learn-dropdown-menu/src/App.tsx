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
            <a href="#">Home</a>
          </li>
          <li className={`${styles.navLink} ${styles.service}`}>
            <a href="#">Service</a>
            <ul className={styles.dropDown}>
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </ul>
          </li>
          <li className={styles.navLink}>
            <a href="#">Service</a>
          </li>
          <li className={styles.navLink}>
            <a href="#" onClick={toggleNavbar}>Contanct</a>
          </li>
        </ul>
      </nav>
      <div className={clsx(styles.content, toggle && styles.show)}>
        <div>
          <h1>menu</h1>
        </div>
        <div onClick={toggleNavbar}>x</div>
      </div>
    </div>
  );
}

export default App;
