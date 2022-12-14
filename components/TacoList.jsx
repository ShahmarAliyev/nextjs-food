import Link from "next/link";
import styles from "../styles/TacoList.module.css";
import TacoCard from "./TacoCard";

const TacoList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> The Best Tacos in Door County</h1>
      <p className={styles.desc}>
        Consectetur dolor ex consequat exercitation dolor nisi anim. Anim
        laborum ullamco et cillum. Consectetur cupidatat sit consectetur magna
        velit duis. Consectetur dolor ex consequat exercitation dolor nisi anim.
        Anim laborum ullamco et cillum. Consectetur cupidatat sit consectetur
        magna velit duis.
      </p>

      <div className={styles.wrapper}>
        <TacoCard />
        <TacoCard />
        <TacoCard />
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button2}>
          <Link href="#footer">Call to Order </Link>
        </button>
        <button className={styles.button}>
          <Link href="/menu">See the Menu </Link>
        </button>
      </div>
    </div>
  );
};

export default TacoList;
