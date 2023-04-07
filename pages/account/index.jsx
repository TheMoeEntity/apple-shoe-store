import styles from './account.module.css'

const index = () => {
  return (
    <div className={styles.account}>
        <div>
        <h2>My Account</h2>
        <h4><b>Moses nwigberi</b> mosesnwigberi@gmail.com, Abakaliki, Ebonyi</h4>
        <div className={styles.controls}>
            <div>Account info</div>
            <div>Saved list</div>
            <div>My order</div>
            <div>Change password</div>
            <div>Change Billing</div>
        </div>
        </div>
    </div>
  )
}

export default index