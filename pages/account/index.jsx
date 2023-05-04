import Image from "next/image";
import styles from "./account.module.css";
import girl from "../../public/assets/boy4.jpeg";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { read_cookie } from "sfcookies";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { updateShipping } from "../../helpers/Redux/cart";
import { useSelector } from "react-redux";

const Index = ({}) => {
  const container = useRef(null);
  const ship = useSelector((state)=> state.cart.shippingAddress)
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const { link } = router.query;
  const [shipping,setShipping] = useState({
      phone:ship.phone,
      address:ship.address ?? null,
      city:ship.city ?? null,
      state:ship.state ?? null,
      zip:ship.zip ?? null

  })


  useEffect(() => {
    if (link === "signup") {
      enqueueSnackbar("Update your details and information", {
        variant: 'info',
      });   
    }
  }, []);

  const UserInfo = read_cookie("userInfo");

  useEffect(() => {
    if (UserInfo.length === 0) {
      router.push('/')
    }
  }, [user,router, UserInfo]);

  const displayContent = (index) => {
    let others = container.current.children;
    for (const child of others) {
      child.style.display = "none";
    }
    others[index].style.display = "block";
  };
  const hide = (query) => {
    let others = container.current.children;
    for (const child of others) {
      child.style.display = "none";
    }
    switch (query) {
      case undefined:
        others[0].style.display = "block";
        break;
      case "order":
        others[2].style.display = "block";
        break;
      case "wishlist":
        others[3].style.display = "block";
        break;
      default:
        others[0].style.display = "block";
        break;
    }
  };
  useEffect(() => {
    const query = router.query["link"];
    hide(query);
  }, []);

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

  const submitAction = e => {
    e.preventDefault()
    dispatch(updateShipping(shipping))
    enqueueSnackbar("Successfully updated your details", {
      variant: "success",
    });

    if (link && link === 'update') {
      router.push('/checkout')
    }
  }

  return (
    <div className={styles.account}>
      <div>
        <h2>My Account</h2>
        <h4>
          <b>{user}</b> <br />
          {email}, <br /> <br /> Abakaliki, Ebonyi
        </h4>
        <div className={styles.controls}>
          <div onClick={() => displayContent(0)}>Account info</div>
          <div onClick={() => displayContent(1)}>Change password</div>
          <div onClick={() => displayContent(2)}>My Order</div>
          <div onClick={() => displayContent(3)}>Wishlist</div>
        </div>
        <div className={styles.content} ref={container}>
          <div className={styles.acc}>
            <form onSubmit={submitAction}>
              <h3>Account Information</h3>
              <div className={styles.pic}>
                <Image priority layout="fill" src={girl} alt="product image" />
              </div>
              <label htmlFor="">Full Name</label>
              <input type="text" placeholder="Your Name" value={user} />
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Enter email" value={email} />
              <label htmlFor="">Phone Number</label>
              <input required type="text" value={shipping.phone} onChange={(e)=> setShipping(x => {return {...x,phone:e.target.value} })} placeholder="Enter phone" />
              <label htmlFor="">Address</label>
              <input required type="text" value={shipping.address} onChange={(e)=> setShipping(x => {return {...x,address:e.target.value} })} placeholder="Enter a new address" />
              <label htmlFor="">City</label>
              <input required type="text" value={shipping.city} onChange={(e)=> setShipping(x => {return {...x,city:e.target.value} })} placeholder="Enter City" />
              <label htmlFor="">State:</label>
              <input required type="text" value={shipping.state} onChange={(e)=> setShipping(x => {return {...x,state:e.target.value} })} placeholder="Enter state" />
              <label htmlFor="">Zip code:</label>
              <input required type="text" value={shipping.zip} onChange={(e)=> setShipping(x => {return {...x,zip:e.target.value} })} placeholder="Zip code" />
              <button type="submit">Update info</button>
            </form>
          </div>

          <div className={styles.psw}>
            <form action="">
              <h3>Change password</h3>
              <label htmlFor="">Old password</label>
              <input type="text" placeholder="Enter your old password" />
              <label htmlFor="">New Password</label>
              <input type="text" placeholder="Enter a new password" />
              <label htmlFor="">Confirm Password</label>
              <input type="text" placeholder="Enter new password again" />
              <button type="submit">Update info</button>
            </form>
          </div>

          <div className={styles.ord}>
            <h3>Your order history</h3>
            <div className={styles.orders}>
              <div className={styles.head}>
                <b>#2341478733930</b>
                <h4>
                  <b>Fri, Aug 27, 2021</b> Delivered{" "}
                  <i className="fa-solid fa-check"></i>
                </h4>
              </div>
              <ul>
                <li>
                  <div>
                    <b>{`Men's`} Shorts</b>
                  </div>
                  <div>Natural | XXL</div>
                  <div>$3549.34</div>
                  <div>
                    <span>Leave a review</span>
                  </div>
                </li>
                <li>
                  <div>
                    <b>{`Men's`} Shorts</b>
                  </div>
                  <div>Natural | XXL</div>
                  <div>$3549.34</div>
                  <div>
                    <span>Leave a review</span>
                  </div>
                </li>
                <li>
                  <div>
                    <b>{`Men's`} Shorts</b>
                  </div>
                  <div>Natural | XXL</div>
                  <div>$3549.34</div>
                  <div>
                    <span>Leave a review</span>
                  </div>
                </li>
                <li>
                  <div>
                    <b>{`Men's`} Shorts</b>
                  </div>
                  <div>Natural | XXL</div>
                  <div>$3549.34</div>
                  <div>
                    <span>Leave a review</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className={styles.orders}>
              <div className={styles.head}>
                <b>#2341478733930</b>
                <h4>
                  <b>Fri, Aug 27, 2021</b> Delivered{" "}
                  <i className="fa-solid fa-check"></i>
                </h4>
              </div>
              <ul>
                <li>
                  <div>
                    <b>{`Men's`} Shorts</b>
                  </div>
                  <div>Natural | XXL</div>
                  <div>$3549.34</div>
                  <div>
                    <span>Leave a review</span>
                  </div>
                </li>
                <li>
                  <div>
                    <b>{`Men's`} Shorts</b>
                  </div>
                  <div>Natural | XXL</div>
                  <div>$3549.34</div>
                  <div>
                    <span>Leave a review</span>
                  </div>
                </li>
                <li>
                  <div>
                    <b>{`Men's`} Shorts</b>
                  </div>
                  <div>Natural | XXL</div>
                  <div>$3549.34</div>
                  <div>
                    <span>Leave a review</span>
                  </div>
                </li>
                <li>
                  <div>
                    <b>{`Men's`} Shorts</b>
                  </div>
                  <div>Natural | XXL</div>
                  <div>$3549.34</div>
                  <div>
                    <span>Leave a review</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.wish}>
            <form action="">
              <h3>Items in your wishlist</h3>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
export const getServerSideProps = async (context) => {
  const userinfo = context.req.cookies["userInfo"];

  if (!userinfo) {
    return {
      props: {},
      redirect: { destination: "/login" },
    };
  }
  return { props: {} };
};
