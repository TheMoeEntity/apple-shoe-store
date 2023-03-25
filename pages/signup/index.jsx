import styles from "../login/login.module.css";
import Link from "next/link";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/router";
import { jsCookie } from "js-cookie";
import Cookies from "js-cookie";
import { bake_cookie, read_cookie } from 'sfcookies'
import { useEffect } from "react";

const signup = () => {
  const router = useRouter();
  useEffect(() => {
    const userInfo = read_cookie("userInfo");
    
    if (userInfo.length != 0) {
      enqueueSnackbar("Already logged in!", { variant: 'info' });
      setTimeout(() => {
        router.push("/");
      }, 2000);
      
    }

  }, []);
  const submitAction = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const confPassword = e.target[3].value;
    console.log(name,email,password,confPassword)
    // const userDetails = {
    //   name: e.target[0].value,
    //   email: e.target[1].value,
    //   password: e.target[3].value,
    // };
    if (password != confPassword) {
      enqueueSnackbar("Passwords do not match!!", { variant: "error" });
    } else {
       fetch("/api/users/register", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      })
        .then(async (res) => {
          const isJson = res.headers
            .get("content-type")
            ?.includes("application/json");
          const data = isJson ? await res.json() : null;

          if (!res.ok) {
            const error = (data && data.message) || res.status;
            // enqueueSnackbar("An error occured", { variant: "error" });
            return Promise.reject(error);
          } else if (res.ok) {
            enqueueSnackbar("User created successfully", {
              variant: "success",
            });
            bake_cookie('userInfo',data);
            setTimeout(() => {
              router.push("/");
            }, 3000);
          }
        })
        .catch((err) => {
          enqueueSnackbar("An error occured" + ` ${err}`, { variant: "error" });
        });
    }
  };

  return (
    <div className={`${styles.login} ${styles.signup}`}>
      <form onSubmit={submitAction} action="">
        <h2>Create An Account</h2>
        <label htmlFor="">First Name</label> <br />
        <input type="text" placeholder="Enter your first name" required />
        <label htmlFor="">Email</label> <br />
        <input type="text" placeholder="Enter a valid email address" required />
        <label htmlFor="">Password</label> <br />
        <input type="password" placeholder="Create a password" required />
        <label htmlFor="">Confirm password</label> <br />
        <input type="password" placeholder="Confirm password" required />
        <button type="submit" className={styles.submitButton}>
          Create account
        </button>
        <div className={styles.account}>
          Already have an account?
          <div>
            <Link href={`/login`}>
              <button type="button">Login</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default signup;
