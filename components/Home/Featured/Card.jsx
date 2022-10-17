import React, { useEffect, useRef, useState } from 'react'
import styles from './Card.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Card = ({img,name,id}) => {
  const router = useRouter()
  const [coords, setCoords] = useState({x: 0, y: 0});

  const handleMouseMove = event => {
    // setCoords({
    //   x: event.clientX,
    //   y: event.clientY - event.target.offsetTop,
    // });
    // console.log(coords.x)
  };

  return (

    <Link href={router.pathname === '/' ? "":`/items/${id}`}>
    <div className={styles.card}>
        <div onMouseMove={handleMouseMove} className={styles.img}>
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
