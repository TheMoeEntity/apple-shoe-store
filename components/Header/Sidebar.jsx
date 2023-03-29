import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { delete_cookie, read_cookie } from "sfcookies";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

export const Sidebar = ({ sidebar, set }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [greeting, setGreeting] = useState("");
  const router = useRouter();
  const [user, setUser] = useState("");
  let name;
  useEffect(() => {
    const userinfo = read_cookie("userInfo");
    name = userinfo.name;
    setUser(name);
    const hour = new Date().getHours();
    setGreeting(() => {
      let timeCheck =
        hour < 12
          ? "Good Morning"
          : hour < 18
          ? "Good Afternoon"
          : "Good Evening";

      return timeCheck;
    });
  }, [user, router]);
  const showDiv = (e) => {
    const height = e.target.nextElementSibling.style.maxHeight;
    const elemHeight = e.target.nextElementSibling.scrollHeight;
    e.target.nextElementSibling.style.maxHeight =
      height === "" || height === "0px" ? `${elemHeight}px` : "0";
    e.target.nextElementSibling.style.padding =
      height === "" || height === "0px" ? "10px" : "0";
  };

  return (
    <>
      <div
        style={{ visibility: sidebar ? "visible" : "hidden" }}
        className={styles.sidebar}
      ></div>
      <div
        style={{ left: sidebar ? "0" : "-100%" }}
        className={styles.sidebarContent}
      >
        <h2>Apple Stores</h2>
        <div className={styles.closeBtn}>
          <span onClick={set}>&times;</span>
        </div>
        {user === "" || user == undefined ? (
          <></>
        ) : (
          <h3>
            {greeting}, {user}
          </h3>
        )}
        {/* <h3>Good evening, Moses Nwigberi</h3> */}
        <h4>Main Menu</h4>
        <ul>
          <Link href={`/`}>
            <div onClick={set}>
              <li>Home</li>
            </div>
          </Link>
          {user === "" || user == undefined ? (
            <Link href={`/login`}>
              <div onClick={set}>
                <li>Login</li>
              </div>
            </Link>
          ) : (
            <></>
          )}

          <div onClick={set}>
            {user === "" || user == undefined ? (
              <li>
                <Link href={`/signup`}>Create account</Link>
              </li>
            ) : (
              <></>
            )}
          </div>

          <li>
            <span onClick={(e) => showDiv(e)}>Shop</span>
            <div>
              <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
                <li>Option 4</li>
              </ul>
            </div>
          </li>
          <li>Women</li>
          <li>
            <Link href={`/men`}>Men</Link>
          </li>
          <li>Blog</li>
        </ul>

        <h4>Categories</h4>
        <ul>
          <li>
            <span onClick={(e) => showDiv(e)}>Shop</span>
            <div>
              <ul>
                <li>{`Men's`} shoes</li>
                <li>Ashawo Shorts</li>
                <li>Pants</li>
                <li>Option 4</li>
              </ul>
            </div>
          </li>
          <li>
            <Link href={`/men`}>Men</Link>
          </li>
          <li>Women</li>
          <li>Kids</li>
          <li>Baby</li>
          <li>shoes</li>
        </ul>
      </div>
    </>
  );
};
