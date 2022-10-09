import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
import cart from '../../public/assets/cart.png'
import { Sidebar } from './Sidebar'
import { useState } from 'react'

export const Header = () => {
  const [sideBar,setSideBar] = useState(false)
 
  const set = ()=> {
    setSideBar(false)
  }
  return (
    <div className={styles.header}>
      <Sidebar sidebar={sideBar} set={set} />
        <div onClick={()=> setSideBar(!sideBar)} className={styles.hamburger}>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div>
            <h3>Apple-Stores</h3>
        </div>

        <div>
            <Image src={cart} alt="cart image" />
            <div className={styles.cartCount}>0</div>
        </div>
        
    </div>
  )
}
