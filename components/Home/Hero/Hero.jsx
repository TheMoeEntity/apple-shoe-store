import banner from '../../../public/assets/slider-11.jpeg'
import Image from 'next/image'
import styles from './Hero.module.css'
import { Dots } from '../../Dots/Dots'

export const Hero = () => {
  return (
    <div className={styles.hero}>
        <Image alt='Banner-img' objectFit='cover' layout='fill' priority={true}  src={banner} />
        <div className={styles.caption}>
            <span>Our Summer Collection</span>
            <h1>APPLE STORE ESSENTIAL COLLECTION</h1>
            <span>Our summer collection of shoes will blow you away</span>
            <button>Shop collection <i>&#10230;</i></button>
        </div>
        <div className={styles.overlay}></div>
        <Dots count={3} />
    </div>
  )
}
