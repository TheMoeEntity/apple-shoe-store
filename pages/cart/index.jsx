import styles from "./cart.module.css";
import Image from "next/image";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";
import axios from "axios";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, reset } from "../../helpers/Redux/cart";
import noimage from '../../public/assets/noimage.png'
import { urlForThumbnail } from "../../helpers/image";

const Cart = ({}) => {
  const router = useRouter();
  const [price, setprice] = useState(34000);
  const [less, setLess] = useState(false);
  const dispatch = useDispatch();
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

  const ProceedToRefer = async () => {
    const didRefer = read_cookie("ref").length != 0;

    if (didRefer) {
      alert("Already generated referral link");
      router.push("/refer");
    }

    if (!didRefer) {
      let ref = nanoid(10);
      const newCookie = {
        ref: false,
        referrer: ref,
      };
      bake_cookie("ref", JSON.stringify(newCookie));

      const newUser = {
        id: ref,
        refs: 0,
      };
      const res = await axios.post("http://localhost:5000/users", newUser);

      if (res.status !== 201) {
        alert("Internal Server error");
      }
      setTimeout(() => {
        res.status === 201 && router.push("/refer");
      }, 4000);
    }
  };

  const ProceedToGroup = async () => {
    const didJoin = read_cookie("groups").length != 0;

    if (didJoin) {
      alert("Already in group");
      router.push("/groups");
    }
    if (!didJoin) {
      let groups = nanoid(10);
      let timestamp = String(new Date()).split(" ");
      timestamp.length = 5;
      const newTime = timestamp.map((time, index) =>
        index === 4
          ? time.slice(0, -3)
          : index === 3
          ? ""
          : index === 2
          ? `${time},`
          : time
      );
      console.log(newTime);
      const createdAt = newTime.join(" ");
      console.log(createdAt);

      const newUser = {
        id: groups,
        ts: createdAt,
      };
      bake_cookie("groups", JSON.stringify(newUser));
      const thisgroup = await axios.get("http://localhost:5000/groups/shoe1");
      let members = thisgroup.data.members;
      members.push(newUser);
      console.log(members);

      const res = await axios.put(`http://localhost:5000/groups/shoe1`, {
        id: "shoe1",
        members: members,
      });
      console.log(res.status);
      setTimeout(() => {
        res.status === 200 && router.push("/groups");
      }, 3000);
    }
  };

  const [cartitems, setItems] = useState([
    {
      name: "Men's Hoodie with zipper",
      quantity: 1,
      subtotal: "₦7400",
      more: false,
    },
    {
      name: "Ashawo shorts",
      quantity: 2,
      subtotal: "₦2000",
      more: false,
    },
  ]);

  const handleMore = (name) => {
    setItems((prev) => {
      const newItem = prev.map((x) =>
        x.name === name
          ? {
              ...x,
              more: !x.more,
            }
          : { ...x, more: false }
      );
      return newItem;
    });
  };

  return (
    <div className={styles.cart}>
      <Head>
        <title>Apple stores | Cart</title>
        <meta name="Apple store" content="Apple store | your cart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h2>Your Shopping Cart</h2>
        {cartitems.length === 0 ? (
          <div className={styles.noItems}>
            <h3>You have no items in your shopping cart!</h3>
          </div>
        ) : (
          <div>
            <div className={styles.free}>
              Add $125.45 more and win free shipping!
              <div className={styles.bar}>
                <div className={styles.width}></div>
              </div>
            </div>
            <div className={styles.title}>
              <div>Product</div>
              <div className={styles.quantity}>Quantity</div>
              <div>Subtotal</div>
            </div>

            <ul className={styles.item}>
              {cart.products.map((x, i) => (
                <li key={i}>
                  <div className={styles.itemDetails}>
                    <div>
                      <div className="">
                        <Image layout="fill" src={urlForThumbnail(x.images[0],noimage)} alt="product image" />
                      </div>
                    </div>
                    <div>
                      <h3>{x.name}</h3>
                      <span>Natural | XL</span>
                    </div>
                  </div>
                  <div className={styles.quantity}>{x.quantity}</div>
                  <div>₦{x.price.toLocaleString()}</div>
                  <div
                    onClick={() => handleMore(x.name)}
                    className={styles.more}
                  >
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div
                    style={{ display: x.more ? "block" : "none" }}
                    className={styles.moreOptions}
                  >
                    <div>Remove from cart</div>
                    <div>Edit item number</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        <div className={styles.total}>
          <h3>Cart totals</h3>
          <div className={styles.subtotal}>
            <span>Subtotal</span>
            <span>₦{total.toLocaleString()}</span>
          </div>
          <div className={styles.totalpr}>
            <span>Total</span>
            <span>₦{total.toLocaleString()}</span>
          </div>
          <div className={styles.totalpr}>
            <span>Pay less</span>
            <span style={{ cursor: "pointer" }} onClick={() => setLess(!less)}>
            ₦{(total - 0.7 * total).toLocaleString()}
            </span>
          </div>
          <button className={styles.totalbutton}>Proceed to checkout</button>
          <button
            style={{ maxHeight: less ? "60px" : "0" }}
            onClick={ProceedToRefer}
            className={styles.group}
          >
            Generate link
          </button>
          <button
            style={{ maxHeight: less ? "60px" : "0" }}
            onClick={ProceedToGroup}
            className={styles.group}
          >
            Proceed to group buying
          </button>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Cart;
