import styles from "./profile.module.css";
import Image from "next/image";
import Link from "next/link";
import boy from "../../public/assets/boy.jpeg";
import { useSnackbar } from "notistack";
import { delete_cookie, read_cookie } from "sfcookies";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Profile = ({ profileOpen = false, forceClose }) => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const [user, setUser] = useState("");
  let name;
  const logoutAction = () => {
    const conf = confirm("Do you really want to logout?");
    if (conf) {
      delete_cookie("userInfo");
      setUser(undefined);
      forceClose();
      enqueueSnackbar("You have been logged out!", { variant: "info" });
      window.location.href = '/'
    }
  };
  useEffect(() => {
    const userinfo = read_cookie("userInfo");
    name = userinfo.name;
    setUser(name);
  }, [user, router]);

  return (
    <div
      style={{
        bottom: !profileOpen ? "100px" : "-380px",
        visibility: !profileOpen ? "hidden" : "visible",
      }}
      className={styles.profile}
    >
      <div className={styles.userheader}>
        <div className="">
          <Image layout="fill" src={boy} alt="user image" />
        </div>
        <div className={styles.details}>
          <div>
            <b>{user ?? "Username"}</b>
          </div>
          <div>Lagos, Nigeria</div>
        </div>
      </div>
      <div className="">
        <ul>
          <li>
            <Link href={`/account`}>
              <div>
                <i className="fa-solid fa-user"></i> My Account
              </div>
            </Link>
          </li>
          <li>
            <Link href={`/account?link=order`}>
              <div>
                <i className="fas fa-tasks"></i> My Order
              </div>
            </Link>
          </li>
          <li>
            <Link href={`/account?link=wishlist`}>
              <div>
                <i className="fas fa-heart"></i> Wishlist
              </div>
            </Link>
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
            <div onClick={logoutAction}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i> Log out
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
