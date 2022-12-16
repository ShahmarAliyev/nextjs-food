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
          <li className={styles.listItem}>
            <Link href="/menu"> Menu</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="#footer"> Contact</Link>
          </li>

          <li className={styles.listItem}>
            <Link href="#footer"> Location</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/about"> About</Link>
          </li>
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
        <li className={styles.menuItem}>
          <Link href="/menu">Menu</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="#footer" scroll={true}>
            Contact
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="#footer" scroll={true}>
            Location
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
