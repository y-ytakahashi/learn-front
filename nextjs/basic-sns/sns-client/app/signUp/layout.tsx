import styles from "./layout.module.scss";

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <main className={styles.container}>{children}</main>;
}
