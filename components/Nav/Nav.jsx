import styles from "./Nav.module.css";
import { useRouter } from "next/router";
import { useContext, useRef, useEffect } from "react";
import { menu } from "../../helpers/context/context";

const Nav = ({ triggerOn }) => {
  const container = useRef(null);
  const router = useRouter();
  const { menuOpen, setMenuOpen } = useContext(menu);
  const navActions = (payload) => {
    router.push(`${payload}`);
  };
  const addWhite = () => {
    container.current.style.color = "white";
  };
  const removeWhite = () => {
    container.current.style.color = "black";
  };

  useEffect(() => {
    if (triggerOn) {
      addWhite();
    } else {
      removeWhite();
    }
  }, [triggerOn]);

  if (router.pathname === "/items/[id]") {
    return <></>;
  } else {
    return (
      <div ref={container} className={styles.Nav}>
        <div onClick={() => navActions("/")}>
          <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </div>
        {/* <div>
          <i className="fa-solid fa-search"></i>
          <span>Search</span>
        </div> */}
        <div>
          <i className="fa-solid fa-heart"></i>
          <span>wishlist</span>
        </div>
        <div onClick={() => navActions("/cart")}>
          <i className="fa-solid fa-shopping-cart"></i>
          <span>Cart</span>
        </div>
        <div onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fa-solid fa-bars"></i>
          <span>More</span>
        </div>
      </div>
    );
  }
};
export default Nav;
