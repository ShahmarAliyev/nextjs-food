import Image from "next/image";
import styles from "../styles/Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.featuredImage}
            src="/img/66.png"
            alt=""
            fill
          />
        </div>
        ))
      </div>
    </div>
  );
};

export default Logo;
