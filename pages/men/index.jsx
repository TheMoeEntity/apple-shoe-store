import styles from '../../components/Men/Men.module.css'
import Image from 'next/image'
import banner from '../../public/assets/banner.jpeg'
import Filter from '../../components/Men/Filter/Filter'

const Men = () => {
  return (
    <div className={styles.men}>
        <div className={styles.banner}>
            <Image priority objectFit='cover' src={banner} layout="fill" />
            <h2>We got styles for every season</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium?</h3>

        </div>

        <Filter />
    </div>
  )
}

export default Men
