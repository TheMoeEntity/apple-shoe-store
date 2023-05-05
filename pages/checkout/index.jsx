import React, { useEffect, useState } from "react";
import styles from "../cart/cart.module.css";
import styles2 from "./checkout.module.css";
import { useRouter } from "next/router";
import { read_cookie } from "sfcookies";
import Head from "next/head";
import { useSelector } from "react-redux";
import { urlForThumbnail } from "../../helpers/image";
import noimage from "../../public/assets/noimage.png";
import Image from "next/image";
import { PayPalButton } from "react-paypal-button-v2";
import { Helpers } from "../../helpers";
import { useSnackbar } from "notistack";


const Checkout = () => {
  const router = useRouter();
  const cart = useSelector((state) => state.cart);
  const { enqueueSnackbar } = useSnackbar();
  const [user, setUser] = useState("");
  const ship = useSelector((state)=> state.cart.shippingAddress)
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [shipping,setShipping] = useState({
    phone:ship.phone,
    address:ship.address ?? null,
    city:ship.city ?? null,
    state:ship.state ?? null,
    zip:ship.zip ?? null

})
  let name;
  useEffect(() => {
    const userinfo = read_cookie("userInfo");
    name = userinfo.name;
    setUser(name);
    
  }, [user, router]);
  const CalculateTotal = (cart) => {
    let total = 0;
    for (let index = 0; index < cart.length; index++) {
      total += cart[index].price;
    }
    return total;
  };
  const total = CalculateTotal(cart.products);
  const payPalScript = () => {
    if (cart.products.length === 0) {
      return;
    }
    if (window.paypal) {
      setScriptLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=Ae7GP2fWATOAu1gLmTXRVqN6jcavIMnjQK74Xoe0N0BPpywgLnjZAjokoLl1vDyKYYEd3pWgRI_K7yCK";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
  };

  useEffect(() => {
    payPalScript();
    let time
    if (Object.keys(ship).length === 0) {
      enqueueSnackbar("Please update shipping details!", {
        variant: 'error',
      });   

     time = setTimeout(() => {
        router.push('/account?link=update')
      }, 3500);
    }

    return () => {
      clearTimeout(time)
    }
  }, []);

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

  const createOrder = ()=>{

  }
  return (
    <div className={styles.cart}>
      <Head>
        <title>Apple stores | Checkout</title>
        <meta name="Apple store" content="Apple stores Checkout page " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={styles.free}>
          Add ₦4,000.45 more and win free shipping!
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

          <div className={styles2.formGroup}>
            <label htmlFor="">Last Name:</label>
            <input type="text" placeholder="Last Name" />
          </div>

          <div className={styles2.formGroup}>
            <label htmlFor="">Phone:</label>
            <input value={shipping.phone} onChange={(e)=> setShipping(x => {return {...x,phone:e.target.value} })}  type="phone" placeholder="Enter your phone" />
          </div>

          <div className={styles2.formGroup}>
            <label htmlFor="">Delivery Address:</label>
            <input value={shipping.address} onChange={(e)=> setShipping(x => {return {...x,address:e.target.value} })}  type="text" placeholder="Enter Address" name="" id="" />
          </div>

          <div className={styles2.formGroup}>
            <label htmlFor="">City:</label>
            <input value={shipping.city} onChange={(e)=> setShipping(x => {return {...x,city:e.target.value} })}  type="text" placeholder="Enter city" name="" id="" />
          </div>

          <div className={styles2.formGroup}>
            <label htmlFor="">State:</label>
            <input value={shipping.state} onChange={(e)=> setShipping(x => {return {...x,state:e.target.value} })}  type="text" placeholder="State" name="" id="" />
          </div>

          <div className={styles2.formGroup}>
            <label htmlFor="">Zip code:</label>
            <input value={shipping.zip} onChange={(e)=> setShipping(x => {return {...x,zip:e.target.value} })}  type="text" placeholder="Zip code" name="" id="" />
          </div>
        </form>

        <div className={`${styles2.contact} ${styles2.contact2}`}>
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
        </div>
      </div>

      <div className={styles2.counter}>
        <div className={`${styles.total} ${styles2.counter}`}>
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
                <div style={{ textAlign: "right" }}>
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
          <div className={styles.subtotal}>
            <span>Shipping fees: </span>
            <span>₦{Helpers.coma((0.20*total))}</span>
          </div>
          <div className={styles.totalpr}>
            <span>Total</span>
            <span>₦{(total+ (0.20*total)).toLocaleString() }</span>
          </div>
          <br />

          <br />
          <button className={styles2.paybtns} onClick={placeorder} id={styles.checkout}>
            Place order
          </button> <br />
          <button className={styles2.paybtns} onClick={placeorder} id={styles.checkout}>
            Stripe
          </button>
            <div style={{textAlign:'center',padding:'20px'}}> or pay with <span>PayPal</span>{" "}
              <i className="fa-brands fa-paypal"></i></div>
          {scriptLoaded ? (
              <PayPalButton
                amount={total}
                onSuccess={(details) => {
                  console.log(details);
                  const shippingDetails = details.purchase_units[0].shipping;
                  createOrder({
                    customer: shippingDetails.name.full_name,
                    address: shippingDetails.address.address_line_1,
                    total: cart.total,
                    paymentMethod: 1,
                  });
                }}
              />
            ) : (
              <span>Loading...</span>
            )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
