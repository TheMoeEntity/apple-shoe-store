import React from 'react'
import styles from './Card.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore} from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'


export const Card = ({img,name,id}) => {
  
  return (

    <Link href={`/items/${id}`}>
    <div className={styles.card}>
        <div className={styles.img}>
            <Image src={img} objectFit="cover" alt='card-image' layout="fill" />
            <div className={styles.tag}>-17%</div>
            <div className={styles.like}>
                <i className='fa-solid fa-heart'></i>
            </div>
            <div className={styles.cart}>
            <i className='fa-solid fa-shopping-cart'></i>
            </div>
        </div>
        <h3>3 reviews</h3>
        <h4>{name}</h4>
        <h4>$34.80</h4>
    </div>
    </Link>
  )
}
