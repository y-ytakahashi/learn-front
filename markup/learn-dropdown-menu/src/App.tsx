import styles from "./app.module.scss";
import { useCallback, useState, useRef, useEffect } from "react";
import clsx from "clsx";

type ActiveNavBar = {
  tagName: string;
  isActive: boolean;
}

function App() {
  const [toggle, setToggle] = useState(false);
  const homeRef = useRef<HTMLDivElement>(null);

  const serviceRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [homeY, setHomeY] = useState<number>(0);
  const [serviceY, setServiceY] = useState<number>(0);
  const [aboutY, setAboutY] = useState<number>(0);
  const [navActive, setNavActive] = useState<ActiveNavBar>({ tagName: "", isActive: false });

  useEffect(() => {
    const handleScroll = () => {
      setHomeY(Math.abs(homeRef.current?.getBoundingClientRect().y || 0));
      setServiceY(Math.abs(serviceRef.current?.getBoundingClientRect().y || 0));
      setAboutY(aboutRef.current?.getBoundingClientRect().y || 0);

      if (homeY < serviceY) {
        setNavActive({ ...navActive, tagName: "Home", isActive: true });
      } else if (serviceY < aboutY) {
        setNavActive({ ...navActive, tagName: "Service", isActive: true });
      } else {
        setNavActive({ ...navActive, tagName: "About", isActive: true });
      }

    };


    document.addEventListener("scroll", handleScroll, true);
    return () => {
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, [homeY]);

  // Function to toggle navbar
  const toggleNavbar = useCallback(() => setToggle((prev) => !prev), []);


  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li className={clsx(styles.navLink, navActive.tagName === "Home" && styles.navActive)}>
            <a href={"#Home"}>Home</a>
          </li>
          <li className={clsx(styles.navLink, styles.service, navActive.tagName === "Service" && styles.navActive)}>
            <a href={"#Service"}>Service</a>
            <ul className={styles.dropDown}>
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </ul>
          </li>
          <li className={clsx(styles.navLink, navActive.tagName === "About" && styles.navActive)}>
            <a href={"#About"}>About</a>
          </li>
          <li className={styles.navLink}>
            <a href={"#Contact"} onClick={toggleNavbar}>Contact</a>
          </li>
        </ul>
      </nav>
      <main className={styles.mainContainer}>
        <section ref={homeRef} id={"Home"} className={styles.secContainer}>
          <div className={styles.bodyContainer}>
            <h1>Home</h1>
            <div>
              <p>hogehoge</p>
            </div>
          </div>
        </section>
        <section ref={serviceRef} id={"Service"} className={styles.secContainer}>
          <h1>Service</h1>
        </section>
        <section ref={aboutRef} id={"About"} className={styles.secContainer}>
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
