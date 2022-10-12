import React, { useEffect, useState } from 'react'
import styles from'../cart/cart.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { bake_cookie, read_cookie } from 'sfcookies'
import axios from 'axios'


const Refer = ({data,currRefs}) => {
  const router = useRouter()
  // const referral = router.query['id']
  // console.log(data)
  const [currRef,setCurrRef] = useState("")
  const [allrefs,setAllRefs] = useState(0)

  useEffect(()=> {

    if (read_cookie("ref").length === 0) {
      const newCookie = {
        ref: true,
        referrer: router.query['referrer']
      }
      bake_cookie("ref",JSON.stringify(newCookie))
      console.log(newCookie.referrer)  
    }
    const value = JSON.parse(read_cookie("ref")).referrer
    setCurrRef(value)
  },[])

  const getStatus = async ()=> {
    const cookie = JSON.parse(read_cookie("ref"))
    console.log(cookie)
    const id = cookie.referrer
    const user= await axios.get(`http://localhost:5000/users/${id}`)
    const currRefs = await axios.get("http://localhost:5000/users/"+id)
    const count = user.data.refs
    console.log(count)
    setAllRefs(count)
  }
    
  return (
    <div className={styles.cart}>
      <div>
      {
        (currRef != "" && data.referrer !== currRef && allrefs < 10 ) && (<div className={styles.free}>
        Yay! you have a referral code now, use
        <a target={`_blank`} href={`http://localhost:3000/refer/?referrer=${currRef}`}>
          {`http://localhost:3000/refer/?referrer=${currRef}`}
        </a>
         to invite friends to buy. You must invite 10 friends to be able pay. 
  
      </div>)
      }

      {
       data.referrer == currRef && (<div className={styles.free}>
        You were referred by a buyer with referral id
        <a>
          {`${currRef}`}
        </a>
      </div>

       )
      }

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



      <div>
      <div className={styles.total}>
        <h3>Cart totals</h3>
        <div className={styles.subtotal}>
        <span>Subtotal</span>
        <span>$12.300</span>
        </div>
        <div className={styles.totalpr}>
        <span>Total</span>
        <span>$12.300</span>
        </div>
        <div className={styles.totalpr}>
        <span>Referrals</span>
        <span>{currRefs.refs} persons</span>
        </div>
        <Link href={`/checkout`}>
         {
         
         allrefs == 10 ?
          (<button id={styles.checkout}>Proceed to Checkout</button>) :
          (<button id={currRef==="" || (currRef != "" && data.referrer === undefined) ? styles.disabled:styles.checkout}>{currRef==="" || (currRef != "" && data.referrer === undefined) ?"Not available":"Proceed to checkout"}</button>)
         } 
        
        </Link>
        {
           allrefs == 10 ? 
           (<div className={styles.success}>Congratulations, you have referred 10 persons. You can proceed to checkout</div>):
           (currRef != "" && data.referrer !== currRef ? (<div onClick={getStatus} className={styles.status}>You must invite 10 interested buyers to gain payment access. Tap to refresh referral status</div>): (<span></span>))
        }
        
    </div>
      </div>

  
</div>
  )
}

export const getServerSideProps = async (context) => {

  let url = "http://localhost:5000/referrals"
  const ref = context.query
  // console.log(ref)
 
  const res = await fetch(url)
  const dat = await res.json()
  const cookie = context.req.cookies['ref']
  // console.log(String(cookie).split("\\")[5].substring(1))
  const undef = String(cookie).split("\\")[5] === undefined
  const id = undef === false ?  String(cookie).split("\\")[5].substring(1) : context.query["referrer"]
  
  const refs = await axios.get("http://localhost:5000/users/")
  const currRefs = await axios.get("http://localhost:5000/users/"+id)

  console.log(currRefs.data)

  let exists = "not"

  for (const id of refs.data) {
    if (id.id === ref.referrer && ref.referrer != undefined) {
      exists = "found"
    }
  }
  

  if (exists === "not" && ref.referrer != undefined) {
    return {
      redirect: {
        destination: "404",
        permanent: false,
      }
    }
  }
 
  return {
     props: {
          data:ref,
          currRefs:currRefs.data
      }
      
     }
}

export default Refer
