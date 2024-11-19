"use client";
import Link from "next/link";
import styles from "./style.module.scss";
import useAuthStore from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Navbar = () => {
  const { signOut, authUser } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    console.log({ authUser });
  }, [authUser]);

  const AuthedNavUnAuth = () => {
    return (
      <>
        <li>
          <Link href={"/signIn"}>Login</Link>
        </li>
        <li>
          <Link href={"/signUp"}>SignUp</Link>
        </li>
      </>
    );
  };

  const AuthedNavAuth = ({ username }: { username: string | undefined }) => {
    return (
      <>
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>
        <li>
          <p>{username}</p>
        </li>
        <li>
          <button
            onClick={() => {
              signOut();
              router.push("/signIn");
            }}
          >
            SignOut
          </button>
        </li>
      </>
    );
  };

  return (
    <header className={styles.container}>
      <h3>Basic SNS</h3>
      <nav>
        <ul>{authUser.sub ? <AuthedNavAuth username={authUser.username} /> : <AuthedNavUnAuth />}</ul>
      </nav>
    </header>
  );
};
export default Navbar;
