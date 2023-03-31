import React, { useEffect, useRef, useState } from 'react'
import styles from './Card.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {urlFor} from '../../../helpers/image'
import loading from '../../../public/assets/loading.jpeg'

export const Card = ({img,name,id,men=false,url}) => {
  const router = useRouter()


  const handleMouseMove = event => {
    // setCoords({
    //   x: event.clientX,
    //   y: event.clientY - event.target.offsetTop,
    // });
    // console.log(coords.x)
  };
 
  return (

    <Link href={`/items/${url}`} passHref>
    <div className={`${styles.card} ${men ? styles.cardMen:""}`}>
        <div onMouseMove={handleMouseMove} className={styles.img}>
            <Image  src={urlFor(img.image,loading)} objectFit="cover" alt='card-image' layout="fill" />
            <div className={styles.tag}>-17%</div>
            <div className={styles.like}>
                <i className='fa-solid fa-heart'></i>
            </div>
            <div className={styles.cart}>
            <i className='fa-solid fa-shopping-cart'></i>
            </div>
        </div>
        <div className={styles.details}>
        <h3>{img.reviews} reviews</h3>
        <h4>{name}</h4>
        <h4>₦{img.price}</h4>

        </div>
    </div>
    </Link>
  )
}
