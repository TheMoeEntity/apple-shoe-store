import { Card } from './Card'
import styles from './Featured.module.css'
import shoe1 from '../../../public/assets/shoes1.JPG'
import shoe2 from '../../../public/assets/shoes3.JPG'
import girl from '../../../public/assets/girl.jpeg'
import man5 from '../../../public/assets/man5.jpeg'
import jeans from '../../../public/assets/jeans.jpeg'
import boy from '../../../public/assets/boy.jpeg'
import boy4 from '../../../public/assets/boy4.jpeg'
import shoegreen from '../../../public/assets/shoegreen.jpeg'
import shoered from '../../../public/assets/shoered2.jpg'
import { useState,useRef, useEffect } from 'react'
import Image from 'next/image'
import banner from '../../../public/assets/banner-22.jpeg'
import banner2 from '../../../public/assets/banner-23.jpeg'

export const Featured = ({heading}) => {
  const ref = useRef(null)
  const [coords, setCoords] = useState({x: 0, y: 0})
  
  
  useEffect(()=> {
    // HoverEffect(ref)
  },[])

  return (
    <div className={styles.featured}>
      <div className={styles.title}>
      <h2>{heading}</h2> 
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eius ipsam ea dolores sit. Labore qui explicabo aut incidunt pariatur aliquid optio, voluptates esse adipisci, aperiam, sit excepturi ex molestiae.

        </p>
      </div>


        <div ref={ref} className={styles.wrapper}>
            <div className={styles.cardContainer}>
            <Card img={man5} name={'Soft jacket'} />
            <Card img={jeans} name={'Men\'s Jeans'} />
            <Card img={boy} name={'Hoodie'} />
            </div>
            <div className={styles.cardContainer}>
            <Card img={boy4} name={'Leather Jacket'} />
            <Card img={shoegreen} name={'VANS-special ed'} />
            <Card img={shoe1} name={'VANS'} />
            </div>    
            <div className={styles.cardContainer}>
            <Card img={girl} name={'Wool Sweather'} />
            <Card img={shoered} name={'NIKE-red'} />
            <Card img={shoe2} name={'VANS'} />
            </div>    
        </div>

      {
        heading === "Featured products" && (
          
          <div className={styles.collection}>
          <div>
            <Image src={banner} objectFit='cover' layout='fill' alt='Collection banner' />
            <div className={styles.caption}>
              <h3>NEW SEASON</h3>
              <h2>Show off your best season <span style={{color:'#98BFCD'}}>fits.</span></h2>

              <div>Don't miss this opportunity</div>
              <button>Shop collection <i>&#10230;</i></button>
            </div>
          </div>
          <div>
          <Image src={banner2} objectFit='cover' layout='fill' alt='Collection banner' />
          <div className={styles.caption}>
              <h3>NEW SEASON</h3>
              <h2>How well do you <br /> know street fashion ?</h2>

              <div>Don't miss this opportunity.</div>
              <button>Shop now! <i>&#10230;</i></button>
            </div>
          </div>
      </div>

        )
      }

        
    </div>
  )
}
