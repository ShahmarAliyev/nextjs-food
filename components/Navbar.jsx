import Image from "next/image";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="phone" width={32} height={32} />
        </div>
        <div className={styles.texts}>Order Now</div>
        <div className={styles.texts}>15558887788</div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Order Online</li>
          <li className={styles.listItem}>Menu</li>
          <div className={styles.logoContainer}>
            <Image
              className={styles.logo}
              src={"/img/logo.png"}
              alt="logo"
              width={100}
              height={100}
            />
          </div>

          <li className={styles.listItem}>Contact</li>
          <li className={styles.listItem}>About</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src={"/img/cart.png"} alt="cart" width={30} height={30} />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
