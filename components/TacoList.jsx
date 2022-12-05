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
        <TacoCard />
        <TacoCard />
        <TacoCard />
      </div>
    </div>
  );
};

export default TacoList;