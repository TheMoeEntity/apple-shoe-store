import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import cart from "../../public/assets/cart.png";
import { Sidebar } from "./Sidebar";
import { useState } from "react";
import Link from "next/link";
import CartModal from "./CartModal";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  const [sideBar, setSideBar] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const set = () => {
    setSideBar(false);
  };
  return (
    <div className={styles.header}>
      <CartModal cartOpen={cartOpen} />
      <Sidebar sidebar={sideBar} set={set} />
      <div onClick={() => setSideBar(!sideBar)} className={styles.hamburger}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div>
        <Link href={"/"}>
          <h3>Apple-Stores</h3>
        </Link>
      </div>

      {/* <Link href={`/cart`}> */}
      <div
        onClick={() => setCartOpen(!cartOpen)}
        style={{
          cursor: "pointer",
          visibility:
            router.pathname == "/login" || router.pathname == "/signup"
              ? "hidden"
              : "visible",
        }}
      >
        <Image src={cart} alt="cart image" />
        <div className={styles.cartCount}>0</div>
      </div>
      {/* </Link> */}
    </div>
  );
};
