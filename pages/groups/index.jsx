import React, { useEffect, useState } from 'react'
import styles from'../cart/cart.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { read_cookie } from 'sfcookies'


const Groups = ({group}) => {
    
  return (
    <div className={styles.cart}>

      <div id={styles.one}>
      <div className={styles.title}>
        <div>Product</div>
        <div className={styles.quantity}>Quantity</div>
        <div>Subtotal</div>
    </div>
    <ul className={styles.item}>
      <li>
      <div>Oversize Hooder with Zipper</div>
        <div className={styles.quantity}>1</div>
        <div>$344.58</div>
      </li>
      <li>
      <div>{`Men's`} Ashawo Shorts</div>
        <div className={styles.quantity}>1</div>
        <div>$678.58</div>
      </li>
    </ul> <br />
      </div>
      
      <div id={styles.two}>
      <div className={styles.flex}>

<div className={styles.total}>
    <div className={styles.overlay}></div>
    <h3>Group members for this product</h3>
    {
      group.members.map((item,key)=> (
        <div key={key} className={styles.subtotal}>
          <span>ID: {item.id}</span>
          <span>joined {item.ts}</span>
        </div>
      ))
    }

</div>

<div className={styles.total}>
    <div className={styles.overlay}></div>
    <h3>Cart totals</h3>
    <div className={styles.subtotal}>
    <span>Subtotal</span>
    <span>$12.300</span>
    </div>
    <div className={styles.totalpr}>
    <span>Total</span>
    <span>$12.300</span>
    </div>
    <button id={group.members.length < 10 ? styles.disabled : styles.checkout}>{group.members.length < 10 ? "Unavailable":"Proceed to checkout"}</button>
    {
      group.members.length < 10 && (<div className={styles.status}>You need {10-group.members.length} more members to proceed</div>)
    }
</div>

</div>
      </div>



</div>
  )
}

export const getServerSideProps = async () => {

  let url = "http://localhost:5000/groups/shoe1"
  // console.log(ref)
 
  const res = await fetch(url)
  const data = await res.json()

  return {
     props: {
          group:data
      },
     }
}

export default Groups
