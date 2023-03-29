import styles from "./profile.module.css";
import Image from "next/image";
import Link from "next/link";
import boy from "../../public/assets/boy.jpeg";

const Profile = ({ profileOpen = false }) => {
  return (
    <div
      style={{ bottom: !profileOpen ? "100px" : "-380px" }}
      className={styles.profile}
    >
      <div className={styles.userheader}>
        <div className="">
          <Image layout="fill" src={boy} alt="user image" />
        </div>
        <div className={styles.details}>
          <div>
            <b>Moses Nwigberi</b>
          </div>
          <div>Lagos, Nigeria</div>
        </div>
      </div>
      <div className="">
        <ul>
          <li>
            <div>
              <i className="fa-solid fa-user"></i> My Account
            </div>
          </li>
          <li>
            <div>
              <i className="fas fa-tasks"></i> My Order
            </div>
          </li>
          <li>
            <div>
              <i className="fas fa-heart"></i> Wishlist
            </div>
          </li>
          <li>
            <div>
              <i className="fa-solid fa-clock"></i> Recently Viewed
            </div>
          </li>
        </ul>
      </div>
      <div className="">
        <ul>
          <li>
            <div>
              <i className="fa-solid fa-circle-half-stroke"></i>Dark mode
            </div>
          </li>
          <li>
            <div>
              <i className="fa-solid fa-gear"></i>Settings
            </div>
          </li>

          <li>
            <div>
              <i className="fa-solid fa-arrow-right-from-bracket"></i> Log out
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;