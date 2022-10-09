import styles from './Nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore} from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const Nav = () => {
  const fsize = '22px'
  return (
    <div className={styles.Nav}>
        <div>
          <FontAwesomeIcon fontSize={fsize} icon={faStore} />
          <span>
            Store
          </span>
        </div>
        <div>
          <FontAwesomeIcon fontSize={fsize} icon={faSearch} />
          <span>
            Search
          </span>
        </div>
        <div>
          <FontAwesomeIcon fontSize={fsize} icon={faHeart} />
          <span>
            wishlist
          </span>
        </div>
        <div>
          <FontAwesomeIcon fontSize={fsize} icon={faUser} />
          <span>
            Account
          </span>
        </div>
        <div>
          <FontAwesomeIcon fontSize={fsize} icon={faBars} />
          <span>
            Categories
          </span>
        </div>

    </div> 
  )
}
