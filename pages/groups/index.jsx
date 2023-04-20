import React, { useEffect, useState } from 'react'
import styles from'../cart/cart.module.css'
import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'

const mins = 30000
const Groups = ({group}) => {
  const [allgroups,setAllGroups] = useState(group)
 
 
  const getStatus = async ()=> {
    const user= await axios.get("http://localhost:5000/groups/shoe1")
    const allmembers = user.data
    setAllGroups(allmembers)
  }

  useEffect(()=> {
    const interval = setInterval(() => {
     
      getStatus()
    }, mins);
  
    return () => clearInterval(interval); 
  },[])


  return (
    <div className={styles.cart}>
      <Head>
        <title>Apple stores | Group Buying</title>
        <meta name="Apple store" content="Group buying for lower prices" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
      allgroups.members.map((item,key)=> (
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
    <Link href={allgroups.members.length < 10 ? "" : `/checkout`}>
      <button id={allgroups.members.length < 10 ? styles.disabled : styles.checkout}>{allgroups.members.length < 10 ? "Unavailable":"Proceed to checkout"}</button>
    </Link>

    {
      allgroups.members.length < 10 ? (<div className={styles.status}>You need {10-allgroups.members.length} more members to proceed</div>) : (<div className={styles.status}>Group filled</div>)
    }
</div>

</div>
      </div>



</div>
  )
}

export const getServerSideProps = async () => {

  let url = "http://localhost:5000/groups/shoe1"
  
 
  const res = await fetch(url)
  const data = await res.json()

  return {
     props: {
          group:data
      },
     }
}

export default Groups
