"use client";
import styles from "./routerButton.module.scss";
import { useRouter } from "next/navigation";

type Props = {
  destination?: string;
}
const RouterButton = ({ destination = "" }: Props) => {
  const router = useRouter();
  return (
    <button className={styles.btn} onClick={() => router.push(`/${destination}`)}>
      Nav to {destination ? destination : "home"}
    </button>
  );
};
export default RouterButton;
