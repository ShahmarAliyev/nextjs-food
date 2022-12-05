import Image from "next/image";
import styles from "../styles/TacoCard.module.css";
const TacoCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/taco.png" alt="" width={350} height={350} />
      <h1 className={styles.title}> Tacos de Al postor</h1>
      <span className={styles.price}> 12.99</span>
      <p className={styles.desc}>
        Nostrud eiusmod exercitation deserunt aliquip. Excepteur amet proident
        ipsum nulla anim voluptate. Aute dolore laboris ipsum ullamco aliquip
        elit cillum eiusmod culpa commodo.
      </p>
    </div>
  );
};

export default TacoCard;
