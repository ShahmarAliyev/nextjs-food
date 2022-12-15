import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container} id="footer">
      <div className={styles.item}>
        <Image className={styles.bgImage} src="/img/bg.png" fill alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH, YES, WE DID. DOOR COUNTYS BEST TACOS. FRESH AND DELICUOS
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}> Find Our Location</h1>
          <p className={styles.text}>
            2452 Pigly Road 35.
            <br /> Sister Bay, 85033
            <br /> +1 (224) 224-4242
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Working Hours</h1>
          <p className={styles.text}>
            Saturday-Sunday
            <br /> 9am-3pm
            <br /> 4pm-9pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
