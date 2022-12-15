import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.itemLogo}>
        <Link href="/">Sergio&apos;s Tacos</Link>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Order Online</li>
          <li className={styles.listItem}>Menu</li>

          <li className={styles.listItem}>
            <Link href="/contact"> Contact</Link>
          </li>
          <li className={styles.listItem}>About</li>
        </ul>
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
        <li className={styles.menuItem}>
          <Link href="#footer" scroll={true}>
            Location
          </Link>
        </li>
        <li className={styles.menuItem}>About</li>
        <li className={styles.menuItem}>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
