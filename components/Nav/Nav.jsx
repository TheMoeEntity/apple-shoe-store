import styles from './Nav.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'


export const Nav = () => {
  const fsize = '22px'

  const router = useRouter()
  
  
  if (router.pathname === '/items/[id]') {
     return (
     <div className={styles.Nav}>
        <div className={styles.controls}>
          <div className={styles.counter}>
              <div>-</div>
              <div>1</div>
              <div>+</div>
          </div>
          <Link href={`/cart`}>
          <button className={styles.toCart}>
              Add to cart
          </button>
          </Link>

        </div>
     </div>
    )
  } else {
    return (
      <div className={styles.Nav}>
          <div>
            <i className='fa-solid fa-store'></i>
            <span>
              Store
            </span>
          </div>
          <div>
           <i className='fa-solid fa-search'></i>
            <span>
              Search
            </span>
          </div>
          <div>
          <i className='fa-solid fa-heart'></i>
            <span>
              wishlist
            </span>
          </div>
          <div>
          <i className='fa-solid fa-user'></i>
            <span>
              Account
            </span>
          </div>
          <div>
            <i className='fa-solid fa-bars'></i>
            <span>
              Categories
            </span>
          </div>
  
      </div> 
    )
  }

}
