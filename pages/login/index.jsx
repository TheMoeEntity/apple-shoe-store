import styles from "./login.module.css";
import Link from "next/link";
import { useSnackbar } from "notistack";
import { bake_cookie } from 'sfcookies'
import { useEffect, useState } from "react";
import { useRouter } from "next/router"; 

const Login = ({userinfo}) => {
  const {enqueueSnackbar} = useSnackbar()
  const [loginStatus,setLoginStatus] = useState('Login')
  const router = useRouter()
  useEffect(()=> {
    
    if ((!(userinfo) && previous === undefined) || previous === "cartmodal") {
      enqueueSnackbar("You are not logged in!", {
        variant: 'info',
      });     
    }
  },[])
  let {previous}=router.query ?? "/"
  const loginAction = async (e) => {
    setLoginStatus('Loggin in.....')
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;   
 
      fetch("/api/users/login", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then(async (res) => {
          const isJson = res.headers
            .get("content-type")
            ?.includes("application/json");
          const data = isJson ? await res.json() : null;

          if (!res.ok) {
            const error = (data && data.message) || res.status;
            return Promise.reject(error);
          } else if (res.ok) {
            enqueueSnackbar("Successfully logged in", {
              variant: "success",
            });
            setLoginStatus('Login')
            bake_cookie("userInfo", data,{});
            console.log(data)
            setTimeout(() => {
              previous = previous === undefined ? "/account?link=wishlist":
              previous === 'cartmodal' ? '/checkout' :
              previous
              router.push(previous)
             
            }, 2000);
          }
        })
        .catch((err) => {
          enqueueSnackbar("An error occured while logging in" + ` ${err}`, { variant: "error" });
          setLoginStatus('Login')
        });
    
  };
  return (
    <div className={styles.login}>
      <form action="" onSubmit={loginAction}>
        <h2>Login</h2>
        <label htmlFor="">Email or Phone Number</label> <br />
        <input type="text" placeholder="Enter email address or phone number" />
        <label htmlFor="">Password</label> <br />
        <input type="password" placeholder="Enter your password" />
        <div>
          <button>Forgot password?</button>
        </div>
        <button type="submit" className={styles.submitButton}>
          {loginStatus}
        </button>
        <div className={styles.account}>
          {`Don't`} have an account?
          <div>
            <Link href={`/signup`}>
              <button type="button">Create account</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
export const getServerSideProps = async (context) => {
  const userinfo = context.req.cookies["userInfo"] ?? null;
  console.log(userinfo)

  if (userinfo) {
    return {
      props: {},
      redirect: { destination: "/" },
    };
  } else {
    return { props: {userinfo}};
  }
  
};