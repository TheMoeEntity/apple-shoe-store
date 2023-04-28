import React, { useEffect, useState } from "react";
import styles from "../cart/cart.module.css";
import styles2 from "./checkout.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { delete_cookie, read_cookie } from "sfcookies";
import axios from "axios";
import Head from "next/head";
import { useSelector } from "react-redux";
import { urlForThumbnail } from "../../helpers/image";
import noimage from "../../public/assets/noimage.png";
import Image from "next/image";

const Checkout = ({ data }) => {
  const router = useRouter();
  const cart = useSelector((state) => state.cart);
  const [user, setUser] = useState("");
  const [email, setMail] = useState("");
  let name;
  let mail;
  useEffect(() => {
    const userinfo = read_cookie("userInfo");
    name = userinfo.name;
    mail = userinfo.email;
    setUser(name);
    setMail(mail);
  }, [user, router]);
  const CalculateTotal = (cart) => {
    let total = 0;
    for (let index = 0; index < cart.length; index++) {
      total += cart[index].price;
    }
    return total;
  };
  const total = CalculateTotal(cart.products);

  const placeorder = async () => {
    //
    // const cookie = JSON.parse(read_cookie("ref"));
    // const id = cookie.referrer;
    // const user = await axios.get(`http://localhost:5000/users/${id}`);
    // const count = user.data.refs;
    // const res = await axios.put(`http://localhost:5000/users/${id}`, {
    //   id: id,
    //   refs: count + 1,
    // });
    // if (cookie.ref === true) {
    //   delete_cookie("ref");
    // }
    // router.push("/");
  };

  return (
    <div className={styles.cart}>
      <Head>
        <title>Apple stores | Checkout</title>
        <meta name="Apple store" content="Apple stores Checkout page " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={styles.free}>
          Add $125.45 more and win free shipping!
          <div className={styles.bar}>
            <div className={styles.width}></div>
          </div>
        </div>

        <div className={styles2.contact}>
          <div>
            <div>
              <i className="fa-solid fa-user"></i>
            </div>
            <div>
              <span> CONTACT INFO</span> <i className="fa-solid fa-check"></i>
              <br />
              <br />
              <strong>{user},</strong> 08075489362
            </div>
          </div>

          <div>
            <button>Change</button>
          </div>
        </div>

        <form action="" className={styles2.form}>
          <h3>Billing Details</h3>
          <div className={styles2.formGroup}>
            <label htmlFor="">First Name:</label>
            <input
              defaultValue={user}
              type="text"
              placeholder="Enter your first name"
            />
          </div>

          {/* <div className={styles2.formGroup}>
            <label htmlFor="">Last Name:</label>
            <input type="text" placeholder="Last Name" />
          </div> */}

          <div className={styles2.formGroup}>
            <label htmlFor="">Phone:</label>
            <input type="phone" placeholder="Enter your phone" />
          </div>

          <div className={styles2.formGroup}>
            <label htmlFor="">Delivery Address:</label>
            <input type="text" placeholder="Enter Address" name="" id="" />
          </div>
        </form>

        <div className={styles2.contact}>
          <div>
            <div>
              <i className="fa-solid fa-credit-card"></i>
            </div>
            <div>
              <span> PAYMENT INFO</span> <i className="fa-solid fa-check"></i>
              <br />
              <br />
              <strong>Mastercard,</strong> xxx - xxx - xx34
            </div>
          </div>

          <div>
            <button>Change</button>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.total}>
          <h3>Your Order</h3>
          {cart.products.map((x, i) => (
            <div key={i} className={styles.totalpr}>
              <div className={styles2.checkItemImg}>
                <Image
                  layout="fill"
                  src={urlForThumbnail(x.images[0], noimage)}
                  alt="product image"
                  priority={true}
                />
              </div>
              <span>
                <div style={{textAlign:'right'}}>
                {x.name}
                <br />
                <br />
                Size: {x.currSize}
                <br />
                <br />
                Quantity: {x.items}
                <br />
                <br />
                Price: ₦{x.price.toLocaleString()}
                </div>
              </span>
              <span className={styles2.qty}>{x.items}</span>
            </div>
          ))}
          <div className={styles.subtotal}>
            <span>Subtotal</span>
            <span>₦{total.toLocaleString()}</span>
          </div>
          <div className={styles.totalpr}>
            <span>Total</span>
            <span>₦{total.toLocaleString()}</span>
          </div>
          <br />

          <br />
          <button onClick={placeorder} id={styles.checkout}>
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
