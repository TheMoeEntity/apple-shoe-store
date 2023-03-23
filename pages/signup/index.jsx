import styles from '../login/login.module.css'
import Link from 'next/link'


const signup = () => {
  return (
    <div className={`${styles.login} ${styles.signup}`}>
    <form action="">
        <h2>Create An Account</h2>
    
    <label htmlFor="">First Name</label> <br />
    <input type="text" placeholder='Enter your first name' />

    <label htmlFor="">Last Name</label> <br />
    <input type="text" placeholder={`Enter your last name`} />

    <label htmlFor="">Email</label> <br />
    <input type="text" placeholder='Enter a valid email address' />

    <label htmlFor="">Password</label> <br />
    <input type="password" placeholder='Create a password' />
    <button className={styles.submitButton}>Create account</button>

    <div className={styles.account}>
        Already have an account?
        <div>
            <Link  href={`/login`}>
                <button type="button">Login</button>
            </Link>
        </div>
    </div>
    </form>
</div>
  )
}

export default signup