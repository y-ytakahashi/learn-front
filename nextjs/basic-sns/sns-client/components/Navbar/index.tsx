import Link from "next/link";
import styles from "./style.module.scss"

const Navbar = () => {
  return (
    <header className={styles.container}>
      <h3>Basic SNS</h3>
      <nav>
        <ul>
          <li>
            <Link href={"/signIn"}>Login</Link>
          </li>
          <li>
            <Link href={"/signUp"}>SignUp</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
