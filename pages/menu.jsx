import Image from "next/image";
import styles from "../styles/Menu.module.css";

const Menu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menuImgContainer1}>
        <h1 className={styles.title}> Tacos Menu</h1>
        <Image className={styles.menu1} alt="" src="/img/tacocover.jpg" fill />
      </div>
      <div className={styles.menuImgContainer2}>
        <Image
          className={styles.menu2}
          alt=""
          src="/img/menu.jpg"
          width={868}
          height={656}
        />
      </div>
    </div>
  );
};

export default Menu;
