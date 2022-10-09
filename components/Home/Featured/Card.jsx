import React from 'react'
import styles from './Card.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore} from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export const Card = ({img,name}) => {
  return (
    <div className={styles.card}>
        <div className={styles.img}>
            <Image src={img} objectFit="cover" alt='card-image' layout="fill" />
            <div className={styles.tag}>-17%</div>
            <div className={styles.like}>
                <FontAwesomeIcon color='rgba(254, 33, 33, 0.648)' icon={faHeart} />
            </div>
            <div className={styles.cart}>
                <FontAwesomeIcon icon={faShoppingCart} />
            </div>
        </div>
        <h3>3 reviews</h3>
        <h4>{name}</h4>
        <h4>$34.80</h4>
    </div>
  )
}
