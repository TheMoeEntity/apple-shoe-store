import styles from "../../components/Men/Men.module.css";
import Image from "next/image";
import banner from "../../public/assets/slider-14.jpeg";
import Filter from "../../components/Men/Filter/Filter";
import Head from "next/head";
import client from "../../helpers/client";

const Women = ({ items }) => {
  return (
    <div className={styles.men}>
      <Head>
        <title>Apple stores | WOMEN </title>
        <meta
          name="Apple store"
          content="Your best shopping experience for women"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.banner}>
        <Image
          alt="card-image"
          layout="fill"
          quality={100}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          objectFit="cover"
          src={banner}
        />
        <h2>We got styles for every season</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium?
        </h3>
      </div>

      <Filter items={items} />
    </div>
  );
};

export default Women;
export const getStaticProps = async () => {
  const product = await client.fetch(`*[_type == "product" ]`);

  return {
    props: {
      items: product,
    },
  };
};
