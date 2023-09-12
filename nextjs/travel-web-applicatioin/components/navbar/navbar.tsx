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
  const [navbar, setNavbar] = useState(true);
  const toggleNavbar = useCallback(() => setNavbar((prev) => !prev), []);
  // Function to toggle navbar
  const showNavBar = () => {
    setNavbar(true);
    alert("show navbar");
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <BiLogoMediumOld className={styles.icon} />
        <span>OU-Trips</span>
      </div>
      <div className={clsx(styles.menu, navbar && styles.show)}>
        <ul>
          <li className={styles.item}>About Us</li>
          <li className={styles.item}>Testimonial</li>
          <li className={styles.item}>Gallery</li>
        </ul>
        {/* Icon to remove NavBar */}
        <AiFillCloseCircle
          className={styles.closeIcon}
          onClick={toggleNavbar}
        />
      </div>
      <button className={styles.signUpBtn}>Sign Up</button>
      {/*    Icon to toggle Navbar*/}
      <PiDotsNineBold className={styles.icon} onClick={toggleNavbar} />
    </div>
  );
};
export default Navbar;
