import styles from './index.module.css'

const Overview = () => {
  return (
    <div className={styles.panel}>
        <div className={styles.controls}>
            <div>Overview</div>
            <div>Return policy</div>
            <div>Shipping</div>
            <div>Warranty</div>
            <div>Reviews</div>
        </div>
    </div>
  )
}

export default Overview