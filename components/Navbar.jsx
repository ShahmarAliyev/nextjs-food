import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
  const [open, setOpen] = useState(false);

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
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <ul
        onClick={() => {
          setOpen(false);
        }}
        className={styles.menu}
        style={{ right: open ? "0px" : "-50vw" }}
      >
        <li className={styles.menuItem}>Menu</li>
        <li className={styles.menuItem}>Cart</li>
        <li className={styles.menuItem}>Location</li>
        <li className={styles.menuItem}>About</li>
        <li className={styles.menuItem}>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
