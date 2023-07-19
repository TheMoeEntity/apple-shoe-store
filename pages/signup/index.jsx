import styles from "../login/login.module.css";
import Link from "next/link";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import { bake_cookie} from 'sfcookies'
import { useState } from "react";


const Signup = () => {
  const router = useRouter()
  const [signupStatus,setsignupStatus] = useState('Create account');
  const {enqueueSnackbar} = useSnackbar()

  const submitAction = async (e) => {
    e.preventDefault();
    setsignupStatus('sending credentials...')
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const confPassword = e.target[3].value;
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
            setsignupStatus('Create account')
            enqueueSnackbar("User created successfully", {
              variant: "success",
            });
            bake_cookie('userInfo',data);
            console.log(data)
            setTimeout(() => {
              router.push("/account?link=signup");
            }, 3000);
          }
        })
        .catch((err) => {
          setsignupStatus('Create account')
          enqueueSnackbar("An error occured: " + err, { variant: "error" });
        });
    }
  };

  return (
    <div className={`${styles.login} ${styles.signup}`}>
      <form onSubmit={submitAction} action="">
        <h2>Create An Account</h2>
        <label htmlFor="">Full Name</label> <br />
        <input type="text" placeholder="Enter your name please" required />
        <label htmlFor="">Email</label> <br />
        <input type="text" placeholder="Enter a valid email address" required />
        <label htmlFor="">Password</label> <br />
        <input type="password" placeholder="Create a password" required />
        <label htmlFor="">Confirm password</label> <br />
        <input type="password" placeholder="Confirm password" required />
        <button type="submit" className={styles.submitButton}>
          {signupStatus}
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

export default Signup;
export const getServerSideProps = async (context) => {
  const userinfo = context.req.cookies["userInfo"] ?? null;
  console.log(userinfo)

  if (userinfo) {
    return {
      props: {},
      redirect: { destination: "/" },
    };
  } else {
    return { props: {}};
  }
  
};
