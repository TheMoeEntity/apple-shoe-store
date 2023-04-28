import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../helpers/Redux/cart";
import noimage from "../../public/assets/noimage.png";
import { urlForThumbnail } from "../../helpers/image";
import { read_cookie } from "sfcookies";

const CartModal = ({ cartOpen, closeCart, forceClose}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userinfo = read_cookie("userInfo");
  const cart = useSelector((state) => state.cart);

  const CalculateTotal = (cart) => {
    let total = 0;
    for (let index = 0; index < cart.length; index++) {
      total += cart[index].price;
    }
    return total;
  };
  const total = CalculateTotal(cart.products);
  const removeCartItem = (product, item_id, price, packs) => {
    dispatch(removeProduct({ ...product, item_id, price, packs }));
  };
  const checkoutAction = () => {
    if (userinfo.length === 0) {
      router.push('/login?previous=cartmodal')
    } else {
      router.push('/checkout')
    }
    forceClose()
  }
  return (
    <div
      style={{
        bottom: !cartOpen ? "100px" : "-500px",
        visibility: !cartOpen ? "hidden" : "visible",
      }}
      className={styles.cartModal}
    >
      <h2>Shopping Cart</h2>
      {cart.products.length == 0 ? (
        <div className={styles.nocart}>
          <h4>You have no items in your cart</h4>
        </div>
      ) : (
        <ul>
          {cart.products.map((x, i) => (
            <li key={i}>
              <div>
                <div className={styles.image}>
                  <div>
                    <Image
                      layout="fill"
                      src={urlForThumbnail(x.images[0], noimage)}
                      alt="product image"
                    />
                  </div>
                </div>
                <div className={styles.desc}>
                  <h4>{x.name}</h4>
                  <h5>Natural | XL</h5>
                </div>
                <div className={styles.cost}>
                  <button onClick={() => removeCartItem(x, i, x.price, 1)}>
                    Remove
                  </button>
                  <span className={styles.itempri}>
                    ₦{x.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div
        style={{
          position: cart.products.length < 3 ? "absolute" : "sticky",
        }}
        className={styles.bottom}
      >
        <div className={styles.prices}>
          <h3>Cart total</h3>
          <h4>₦{total.toLocaleString()}</h4>
        </div>
        <p>shipping total calculated at checkout</p>
        <div className={styles.bottomControls}>
          <Link href={"/cart"}>
            <button onClick={closeCart}>View cart</button>
          </Link>
            <button onClick={checkoutAction} className={styles.checkBtn}>Check out</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
