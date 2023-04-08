import styles from '../../components/Men/Men.module.css'
import Image from 'next/image'
import banner from '../../public/assets/banner.jpeg'
import Filter from '../../components/Men/Filter/Filter'
import Head from 'next/head'
import client from '../../helpers/client'

const Men = ({items}) => {

  return (
    <div className={styles.men}>
      <Head>
        <title>Apple stores | MEN </title>
        <meta name="Apple store" content="Your best shopping experience for men" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.banner}>
            <Image priority objectFit='cover' src={banner} layout="fill" />
            <h2>We got styles for every season</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium?</h3>

        </div>

        <Filter items={items} />
    </div>
  )
}

export default Men
export const getStaticProps = async () => {
  const product = await client.fetch(`*[_type == "product" ]`);

  return {
    props: {
      items: product,
     }
    }

}
