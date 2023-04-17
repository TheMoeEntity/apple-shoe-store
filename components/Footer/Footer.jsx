import styles from "../Nav/Nav.module.css";
import { useRef, useEffect, useState } from "react";
import Nav from "../Nav/Nav";

const Footer = () => {
  const container = useRef(null);
  const container2 = useRef(null)
  const [trigger, setTrigger] = useState(false);
  const animateIn = () => {
    let width = container.current;
    let height = window.innerHeight;
    let second = container2.current

    let revealTop = width.getBoundingClientRect().top;
    let revealpoint = 70;

    if (revealTop < height - revealpoint) {
        setTrigger(true)
    } else {
      setTrigger(false)
    }

    if (second.getBoundingClientRect().top < height - revealpoint) {
        setTrigger(false)
    }
  };
  useEffect(()=> {
    window.addEventListener('scroll', ()=> {
        animateIn()
    })
  },[])

  return (
    <>
      <div className={styles.footer}>
        <div ref={container}>
          <h2>Get our emails for info on new items, sales and more</h2>
          <h3>
            We&apos;ll email you a voucher worth $30 off your first order. From
            us
          </h3>
          <div className={styles.subscribe}>
            <input placeholder="Enter your Email address" type="email" />
            <button> Subscribe</button>
          </div>
          <h3>
            By subscribing you agree to our Terms & Conditions and Privacy &
            Cookies Policy
          </h3>
        </div>

        <div>
          <h2>
            Need to reach us? <br />
            (+234) 807 548 9362
          </h2>
          <h3>We are available 10:00am - 5:30pm </h3>
          <h3>
            Our Apple store app is available on PlayStore and App Store!
            Download now for more features{" "}
          </h3>

          <div className={styles.apps}></div>
        </div>
      </div>
      <div ref={container2} className={styles.footer2}>
        <div className={styles.flex}>
          <h2>Apple Stores</h2>
          <h3>
            Lorem, ipsum dolor sit elit. Sequi ex, quis temporibus ratione
            magnam sint! temporibus ratione magnam sint!
          </h3>{" "}
          <br />
        </div>

        <div id={styles.second} className={styles.flex}>
          <div>
            <h4>Information</h4>
            <h3>About Us</h3>
            <h3>Privacy Policy</h3>
            <h3>Returns Policy</h3>
            <h3>Shipping Policy</h3>
            <h3>Dropshipping</h3>
          </div>

          <div>
            <h4>Account</h4>
            <h3>Dashboard</h3>
            <h3>My Orders</h3>
            <h3>My Wishlist</h3>
            <h3>Account Details</h3>
            <h3>Track My Orders</h3>
          </div>

          <div>
            <h4>Categories</h4>
            <h3>Women</h3>
            <h3>Men</h3>
            <h3>bags</h3>
            <h3>Shoes</h3>
            <h3>Pants</h3>
          </div>
        </div>

        <div className={styles.copyright}>
          Copyright 2022 @ Apple Stores. All rights reserved. Powered by Moe
          Enterprises.
        </div>
      </div>
      <Nav triggerOn={trigger} />
    </>
  );
};
export default Footer;
