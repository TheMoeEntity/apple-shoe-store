import React, { useEffect, useState } from 'react'
import styles from'../cart/cart.module.css'
import styles2 from './checkout.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { delete_cookie, read_cookie } from 'sfcookies'
import axios from 'axios'
import Head from 'next/head'


const Checkout = ({data}) => {
  const router = useRouter()

  const [currRef,setCurrRef] = useState("")

  useEffect(()=> {
    console.log(read_cookie("ref"))
    setCurrRef(read_cookie("ref"))
  },[])

  const placeorder = async ()=> {
    console.log("order placed")
    const cookie = JSON.parse(read_cookie("ref"))
    const id = cookie.referrer
    const user= await axios.get(`http://localhost:5000/users/${id}`)
    const count = user.data.refs
    console.log(count)
    const res = await axios.put(`http://localhost:5000/users/${id}`,{
        id: id,
        refs:count+1
    })

    if (cookie.ref === true) {
        delete_cookie("ref")
    }
   
    router.push('/')
    console.log(res.status)
  }
    
  return (
    <div className={styles.cart}>

        <div>
        <div className={styles.free}>
          Add $125.45 more and win free shipping! 
          <div className={styles.bar}>
              <div className={styles.width}></div>
          </div>
        </div>
    
    <h3>Billing Details</h3>
    <form action="" className={styles2.form}>
        <div className={styles2.formGroup}>
            <label htmlFor="">First Name:</label>
            <input type="text" placeholder='Enter your first name' />
        </div>

        <div className={styles2.formGroup}>
            <label htmlFor="">Last Name:</label>
            <input type="text" placeholder='Last Name' />
        </div>

        <div className={styles2.formGroup}>
            <label htmlFor="">Phone:</label>
            <input type="phone" placeholder='Enter your phone'/>
        </div>

        <div className={styles2.formGroup}>
            <label htmlFor="">Delivery Address:</label>
            <input type="text" placeholder='Enter Address' name="" id="" />
        </div>


    </form>
        </div>
        
        <div>
        <div className={styles.total}>
       
       <h3>Your Order</h3>
       <div className={styles.totalpr}>
       <span>Hoodie and Jeans</span>
       <span>1</span>
       </div>
       <div className={styles.totalpr}>
       <span>Nike Airforce 2</span>
       <span>1</span>
       </div>
       <div className={styles.subtotal}>
       <span>Subtotal</span>
       <span>$12.300</span>
       </div>
       <div className={styles.totalpr}>
       <span>Total</span>
       <span>$12.300</span>
       </div>
       <br />
       <select className={styles2.select} placeholder="Debit Card" name="Payment Options" id="">
           
           <option value="Debit Card">Debit Card</option>
           <option value="Pay on Delivery">Pay on Delivery</option>
           <option value="Pay on Delivery">Pay with PayPal</option>
       </select>
       <br />
       <button onClick={placeorder} id={styles.checkout}>Place order</button>
   </div>
        </div>



</div>
  )
}



export default Checkout
