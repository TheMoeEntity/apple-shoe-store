import Head from 'next/head'
import Image from 'next/image'
import { Benefits } from '../components/Home/Benefits/Benefits'
import { Hero } from '../components/Home/Hero/Hero'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Featured  from '../components/Home/Featured/Featured'
import client from '../helpers/client'



export default function Home({products}) {
  return (
    <div>
      <Head>
        <title>Apple stores | Home</title>
        <meta name="Apple store" content="Your best shopping experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero />
        <div className={styles.container}>
          <Benefits />
          <Featured prods={products} heading={"Featured products"} />
          <Featured  prods={products} heading={"Our Top sellers"} />
        </div>
      </main>
      <Script src="https://kit.fontawesome.com/4ef8c63dd7.js" crossorigin="anonymous"></Script>
    </div>
  )
}
export const getStaticProps = async () =>{
  const products = await client.fetch(`*[_type == "featured" ]`);

  return {
    props: {
      products
    }
    
  }
}