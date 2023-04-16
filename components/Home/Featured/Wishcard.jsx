import styles from './Card.module.css'
import Image from 'next/image'

const Wishcard = () => {
  return (
    <div className={`${styles.card} ${men ? styles.cardMen : ""}`}>
    <div className={styles.img}>
      <Image
        src={urlFor(img.image, loading)}
        objectFit="cover"
        alt="card-image"
        layout="fill"
      />
      <div className={styles.tag}>-17%</div>
      <div className={styles.like}>
        <i className="fa-solid fa-heart"></i>
      </div>
      <div className={styles.cart}>
        <i className="fa-solid fa-shopping-cart"></i>
      </div>
    </div>
    <Link href={`/items/${url}`} passHref>
      <div className={styles.details}>
        <h3>{img.reviews} reviews</h3>
        <h4>{name}</h4>
        <h4>₦{img.price.toLocaleString()}</h4>
      </div>
    </Link>
  </div>
  )
}

export default Wishcard