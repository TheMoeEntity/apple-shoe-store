import Head from 'next/head'
import Image from 'next/image'
import { Benefits } from '../components/Home/Benefits/Benefits'
import { Hero } from '../components/Home/Hero/Hero'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import { Featured } from '../components/Home/Featured/Featured'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="Apple store" content="Your best shopping experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero />
        <div className={styles.container}>
          <Benefits />
          <Featured heading={"Featured products"} />
          <Featured heading={"Our Top sellers"} />
        </div>
      </main>
    </div>
  )
}
