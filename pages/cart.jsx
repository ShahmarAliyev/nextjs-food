import Image from "next/image";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.imgContainer}>
                <Image src="/img/taco.png" alt="" className={styles.img} fill />
              </td>
              <td>
                <span className={styles.name}> Al Pastor</span>
              </td>
              <td>
                <span className={styles.extras}> Double meat</span>
              </td>
              <td>
                <span className={styles.price}> 12.99</span>
              </td>
              <td>
                <span className={styles.quantity}> 1 Order</span>
              </td>
              <td>
                <span className={styles.total}> $13.45 </span>
              </td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.imgContainer}>
                <Image src="/img/taco.png" alt="" className={styles.img} fill />
              </td>
              <td>
                <span className={styles.name}> Al Pastor</span>
              </td>
              <td>
                <span className={styles.extras}> Double meat</span>
              </td>
              <td>
                <span className={styles.price}> 12.99</span>
              </td>
              <td>
                <span className={styles.quantity}> 1 Order</span>
              </td>
              <td>
                <span className={styles.total}> $13.45 </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Your Cart</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}> Subtotal: </b> $12.99
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}> Taxes</b>$1.1
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}> Total: </b>$14.1
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
