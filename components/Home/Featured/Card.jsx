import React, { useEffect, useRef } from 'react'
import styles from './Card.module.css'
import Image from 'next/image'
import Link from 'next/link'


export const Card = ({img,name,id}) => {

  const getPos = e => {
    // console.log(e.clientX)
  }
  return (

    <Link href={`/items/${id}`}>
    <div onMouseMove={e => getPos(e)} className={styles.card}>
        <div className={styles.img}>
            <Image  src={img} objectFit="cover" alt='card-image' layout="fill" />
            <div className={styles.tag}>-17%</div>
            <div className={styles.like}>
                <i className='fa-solid fa-heart'></i>
            </div>
            <div className={styles.cart}>
            <i className='fa-solid fa-shopping-cart'></i>
            </div>
        </div>
        <div className={styles.details}>
        <h3>3 reviews</h3>
        <h4>{name}</h4>
        <h4>$34.80</h4>

        </div>
    </div>
    </Link>
  )
}
