import Link from "next/link";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <header className={styles.container}>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/blogs"}>Nested Layout with Blogs</Link>
        <Link href={"/streaming-sr"}>Streaming SR</Link>
        <Link href={"/auth"}>Auth with CRUD</Link>
      </nav>
    </header>
  );
};
export default Navbar;
