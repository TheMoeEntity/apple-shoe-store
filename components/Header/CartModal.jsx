import styles from "./Header.module.css";
import Image from "next/image";
import boy from "../../public/assets/shoegreen.jpeg";

const CartModal = ({ cartOpen }) => {
  return (
    <div
      style={{ bottom: !cartOpen ? "100px" : "-500px" }}
      className={styles.cartModal}
    >
      <h2>Shopping Cart</h2>

      <ul>
        {[...Array(4)].map((_x, i) => (
          <li key={i}>
            <div>
              <div className={styles.image}>
                <div>
                  <Image layout="fill" src={boy} alt="product image" />
                </div>
              </div>
              <div className={styles.desc}>
                <h4>Rey Nylon Backpack</h4>
                <h5>Natural | XL</h5>
              </div>
              <div>$76</div>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.bottom}>
        <div className={styles.prices}>
          <h3>Cart total</h3>
          <h4>$325.56</h4>
        </div>
        <p>shipping total calculated at checkout</p>
        
      </div>
    </div>
  );
};

export default CartModal;
