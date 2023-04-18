import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import cart from "../../public/assets/cart.png";
import { Sidebar } from "./Sidebar";
import { useState, useContext } from "react";
import Link from "next/link";
import CartModal from "./CartModal";
import { useRouter } from "next/router";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import { menu } from "../../helpers/context/context";

const Header = () => {
  const router = useRouter();
  const [cartOpen, setCartOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const items = useSelector((state) => state.cart.quantity);
  const { menuOpen, setMenuOpen } = useContext(menu);

  return (
    <div className={styles.header}>
      <Profile profileOpen={profileOpen} />
      <CartModal
        profileOpen={profileOpen}
        closeCart={() => setCartOpen(false)}
        cartOpen={cartOpen}
      />
      <Sidebar sidebar={menuOpen} set={() => setMenuOpen(false)} />
      <div onClick={() => setMenuOpen(!menuOpen)} className={styles.hamburger}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div>
        <Link href={"/"}>
          <h3>Apple-Stores</h3>
        </Link>
      </div>

      <div className={styles.navlinks}>
        <div
          style={{
            cursor: "pointer",
            visibility:
              router.pathname == "/login" || router.pathname == "/signup"
                ? "hidden"
                : "visible",
          }}
          className={styles.profile}
          onClick={() =>
            cartOpen ? setProfileOpen(false) : setProfileOpen(!profileOpen)
          }
        >
          <i className="fa-solid fa-user"></i>
        </div>
        <div
          onClick={() =>
            profileOpen ? setCartOpen(false) : setCartOpen(!cartOpen)
          }
          style={{
            cursor: "pointer",
            visibility:
              router.pathname == "/login" || router.pathname == "/signup"
                ? "hidden"
                : "visible",
          }}
          className={styles.cart}
        >
          <Image src={cart} alt="cart image" />
          <div className={styles.cartCount}>{items}</div>
        </div>
      </div>
    </div>
  );
};
export default Header;
