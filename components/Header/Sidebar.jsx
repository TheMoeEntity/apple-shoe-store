import { useState } from 'react'
import styles from './Header.module.css'
import Link from 'next/link'

export const Sidebar = ({sidebar,set}) => {

    const showDiv = e => {
        const height =  e.target.nextElementSibling.style.maxHeight
        e.target.nextElementSibling.style.maxHeight = height === "" || height === "0px" ? "220px": "0"
        e.target.nextElementSibling.style.padding = height === "" || height === "0px" ? "10px":"0"
    }

  return (
    <div style={{visibility: sidebar ? "visible":"hidden"}}  className={styles.sidebar}>
        <div style={{left:sidebar ? "0":"-100%"}}  className={styles.sidebarContent}>
            <h2>Apple Stores</h2>
            <div className={styles.closeBtn}>
                <span onClick={set}>&times;</span>
            </div>

            <h4>Main Menu</h4>
            <ul>
                <li><Link href={`/`}>Home</Link></li>
                <li>
                    <span onClick={e => showDiv(e)}>Shop</span>
                    <div>
                        <ul>
                            <li>Option 1</li>
                            <li>Option 2</li>
                            <li>Option 3</li>
                            <li>Option 4</li>
                        </ul>
                    </div>
                </li>
                <li>
                   Women 
                </li>
                <li>
                    <Link href={`/men`}>Men</Link>
                </li>
                <li>
                    Blog
                </li>
            </ul>

            <h4>Categories</h4>
            <ul>
                <li>
                    <span onClick={e => showDiv(e)}>Shop</span>
                    <div>
                        <ul>
                            <li>Men's shoes</li>
                            <li>Ashawo Shorts</li>
                            <li>Pants</li>
                            <li>Option 4</li>
                        </ul>
                    </div>
                </li>
                <li>
                <Link href={`/men`}>Men</Link>
                </li>
                <li>
                    Women
                </li>
                <li>
                    Kids
                </li>
                <li>
                    Baby
                </li>
                <li>
                    shoes
                </li>
            </ul>
        </div>
    </div>
  )
}
