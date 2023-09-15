"use client";
import styles from "./navbar.module.scss";
import clsx from "clsx";
// Imported ReactIcons
import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { useCallback, useState } from "react";

const Navbar = () => {
  // State to track and update navbar
  const [navbar, setNavbar] = useState(false);

  // Function to toggle navbar
  const toggleNavbar = useCallback(() => setNavbar((prev) => !prev), []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <BiLogoMediumOld className={styles.icon} />
        <span>OU-Trips</span>
      </div>
      <div className={clsx(styles.menu, navbar && styles.show)}>
        <ul>
          <li>Destination</li>
          <li className={""}>About Us</li>
          <li className={""}>Testimonial</li>
          <li className={""}>Gallery</li>
        </ul>
        {/* Icon to remove NavBar */}
        <AiFillCloseCircle
          className={styles.closeIcon}
          onClick={toggleNavbar}
        />
      </div>
      <div className={styles.right}>
        <button className={styles.signUpBtn}>Sign Up</button>
        {/*    Icon to toggle Navbar*/}
        <PiDotsNineBold className={styles.icon} onClick={toggleNavbar} />
      </div>
    </nav>
  );
};
export default Navbar;
