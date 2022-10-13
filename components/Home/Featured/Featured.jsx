import { Card } from './Card'
import styles from './Featured.module.css'
import shoe1 from '../../../public/assets/shoes1.JPG'
import shoe2 from '../../../public/assets/shoes3.JPG'
import girl from '../../../public/assets/girl.jpeg'
import banner from '../../../public/assets/banner.jpeg'
import man from '../../../public/assets/men.jpeg'
import man5 from '../../../public/assets/man5.jpeg'
import jeans from '../../../public/assets/jeans.jpeg'
import { Dots } from '../../Dots/Dots'
import boy from '../../../public/assets/boy.jpeg'
import boy4 from '../../../public/assets/boy4.jpeg'
import shoegreen from '../../../public/assets/shoegreen.jpeg'
import shoered from '../../../public/assets/shoered2.jpg'

export const Featured = ({heading}) => {
  return (
    <div className={styles.featured}>
      <div className={styles.title}>
      <h2>{heading}</h2> 
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eius ipsam ea dolores sit. Labore qui explicabo aut incidunt pariatur aliquid optio, voluptates esse adipisci, aperiam, sit excepturi ex molestiae.

        </p>
      </div>


        <div className={styles.wrapper}>
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
        
    </div>
  )
}
