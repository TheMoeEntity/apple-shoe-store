import Image from "next/image";
import styles from "./account.module.css";
import girl from "../../public/assets/boy4.jpeg";

const index = () => {
  return (
    <div className={styles.account}>
      <div>
        <h2>My Account</h2>
        <h4>
          <b>Moses nwigberi</b> mosesnwigberi@gmail.com, Abakaliki, Ebonyi
        </h4>
        <div className={styles.controls}>
          <div>Account info</div>
          <div>Saved list</div>
          <div>My order</div>
          <div>Change password</div>
          <div>Change Billing</div>
        </div>
        <div className={styles.content}>
          <h3>Account Information</h3>
          <form action="">
            <div>
              <div className={styles.pic}>
                <Image layout="fill" src={girl} alt="product image" />
              </div>
              <label htmlFor="">Full Name</label>
              <input type="text" placeholder="Your Name" />
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Enter email" />
              <label htmlFor="">Phone Number</label>
              <input type="text" placeholder="Enter phone" />
              <label htmlFor="">Address</label>
              <input type="text" placeholder="Enter a new address" />
              <button type="submit">Update info</button>
            </div>

            <div>
              <label htmlFor="">Full Name</label>
              <input type="text" placeholder="Your Name" />
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Enter email" />
              <label htmlFor="">Phone Number</label>
              <input type="text" placeholder="Enter phone" />
              <label htmlFor="">Address</label>
              <input type="text" placeholder="Enter a new address" />
              <button type="submit">Update info</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
