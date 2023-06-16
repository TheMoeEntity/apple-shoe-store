import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import cart from "../../public/assets/cart.png";
import { Sidebar } from "./Sidebar";
import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import CartModal from "./CartModal";
import { useRouter } from "next/router";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import { menu } from "../../helpers/context/context";
import { read_cookie } from "sfcookies";

const Header = () => {
  const router = useRouter();
  const [cartOpen, setCartOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const items = useSelector((state) => state.cart.quantity);
  const [sticky, setSticky] = useState("");
  const { menuOpen, setMenuOpen } = useContext(menu);
  const UserInfo = read_cookie("userInfo");
  useEffect(() => {
    window.addEventListener("scroll", isSticky);

    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    let number = 120
    const stickyClass = scrollTop >= number ? styles.isSticky : "";
    setSticky(stickyClass);
  };

  return (
    <div className={`${styles.header} ${sticky}`}>
      <Profile
        forceClose={() => setProfileOpen(false)}
        profileOpen={profileOpen}
      />
      <CartModal
        forceClose={() => setCartOpen(false)}
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

      <div className={styles.logoMain}>
        <Link href={"/"}>
          <h3>Apple-Stores</h3>
        </Link>
      </div>

      <div className={styles.navlinks}>
        {!(UserInfo.length === 0) && (
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
        )}

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
          <Image
            src={cart}
            alt="cart image"
            layout="fill"
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className={styles.cartCount}>{items}</div>
        </div>
      </div>
    </div>
  );
};
export default Header;
