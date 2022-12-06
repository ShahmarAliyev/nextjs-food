import Image from "next/image";
import styles from "../../styles/Product.module.css";

const Product = () => {
  const taco = {
    id: 1,
    img: "/img/taco.png",
    name: "Al Pastor",
    price: 12.9,
    desc: "Et consectetur veniam nulla in mollit sunt. Ut ipsum excepteur excepteur anim irure. Nulla nisi ut pariatur sit eu occaecat.",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={taco.img} alt="" fill />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{taco.name}</h1>
        <span>$</span>
        <span className={styles.price}>{taco.price}</span>
        <p className={styles.desc}>{taco.desc}</p>

        <h3 className={styles.choose}>Choose any modification</h3>

        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="meat"
              name="meat"
              className={styles.checkbox}
            />
            <label htmlFor="meat">Double meat</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className={styles.checkbox}
            />
            <label htmlFor="cheese">Double cheese</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="sauce"
              name="sauce"
              className={styles.checkbox}
            />
            <label htmlFor="sauce">Double sauce</label>
          </div>
        </div>

        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
