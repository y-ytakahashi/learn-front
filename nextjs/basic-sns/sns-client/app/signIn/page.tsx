import { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "basic sns login page",
  description: "Login Page"
};
export default function SignInPage() {
  return (
    <div className={styles.container}>
      <h2>Sign In</h2>
      <form>
        <input
          className={styles.item}
          type={"Enter your email"}
          placeholder={"Email"}
          required
          autoComplete={"email"}
        />
        <input
          className={styles.item}
          type={"Enter your password"}
          placeholder={"Password"}
          required
          autoComplete={"current-password"}
        />
        <button className={styles.submit} type={"submit"}>
          Let's go
        </button>
      </form>
    </div>
  );
}
