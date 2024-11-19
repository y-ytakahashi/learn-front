"use client";
import styles from "./accordion.module.scss";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import clsx from "clsx";
import { useCallback, useState } from "react";

type Props = {
  title: string;
  desc: string;
};
const Accordion = ({ title, desc }: Props) => {
  const [active, setActive] = useState(false);
  const toggleAccordion = useCallback(() => setActive((prev) => !prev), []);

  return (
    <div className={styles.accordion} onClick={toggleAccordion}>
      <span className={clsx(styles.title, active && styles.activeTitle)}>
        {title}
        <span>
          {active ? (
            <BsArrowDownCircle className={styles.icon} />
          ) : (
            <BsArrowUpCircle className={styles.icon} />
          )}
        </span>
      </span>
      <p className={clsx(styles.description, active && styles.show)}>{desc}</p>
    </div>
  );
};
export default Accordion;
