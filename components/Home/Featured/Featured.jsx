import { Card } from './Card'
import styles from './Featured.module.css'
import shoe1 from '../../../public/assets/shoes1.JPG'
import shoe2 from '../../../public/assets/shoes3.JPG'
import girl from '../../../public/assets/girl.jpeg'
import banner from '../../../public/assets/banner.jpeg'
import man from '../../../public/assets/men.jpeg'
import { Dots } from '../../Dots/Dots'

export const Featured = ({heading}) => {
  return (
    <div className={styles.featured}>
      <div className={styles.title}>
      <h2>{heading}</h2> 
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eius ipsam ea dolores sit. Labore qui explicabo aut incidunt pariatur aliquid optio, voluptates esse adipisci, aperiam, sit excepturi ex molestiae.

        </p>
      </div>

        <div className={styles.flex}>
            <Dots count={3} />
        </div>

        <div className={styles.wrapper}>
            <div className={styles.cardContainer}>
            <Card img={girl} name={'Nike Airforce'} />
            <Card img={shoe1} name={'VANS'} />
            <Card img={man} name={'VANS'} />
            </div>
            <div className={styles.cardContainer}>
            <Card img={banner} name={'Leather Jacket'} />
            <Card img={man} name={'VANS-special ed'} />
            <Card img={shoe1} name={'VANS'} />
            </div>    
            <div className={styles.cardContainer}>
            <Card img={girl} name={'Leather Jacket'} />
            <Card img={shoe2} name={'VANS-special ed'} />
            <Card img={shoe1} name={'VANS'} />
            </div>    
        </div>
        
    </div>
  )
}
