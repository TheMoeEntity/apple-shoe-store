import styles from "./Nav.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { addProduct } from "../../helpers/Redux/cart";

 const Nav = () => {
  const {enqueueSnackbar} = useSnackbar()
  const [currSize, setCurrSize] = useState("");
  const dispatch = useDispatch();
  const [items, setItems] = useState(1);
  const router = useRouter();
  // const addToCart = () => {
  //   const price = item.price*items
  //   dispatch(addProduct({ ...item, items, price }));
  //   enqueueSnackbar("Successfully Added item to your cart", {
  //     variant: "success",
  //   }); 
  // };
  const navActions = payload => {
    router.push(`${payload}`)
  }

  if (router.pathname === "/items/[id]") {
    return (
      <div>
        {/* <div className={styles.controls}>
          <div className={styles.counter}>
            <div
              onClick={() => setItems((curr) => (curr === 0 ? 0 : curr - 1))}
            >
              -
            </div>
            <div>{items}</div>
            <div onClick={() => setItems((curr) => curr + 1)}>+</div>
          </div>
          <Link href={`/cart`}>
            <button className={styles.toCart}>Add to cart</button>
          </Link>
        </div> */}
      </div>
    );
  } else {
    return (
      <div className={styles.Nav}>
        <div onClick={()=>navActions('/')}>
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
        <div onClick={()=>navActions('/cart')}>
          <i className="fa-solid fa-shopping-cart"></i>
          <span>Cart</span>
        </div>
        <div>
          <i className="fa-solid fa-bars"></i>
          <span>More</span>
        </div>
      </div>
    );
  }
};
export default Nav