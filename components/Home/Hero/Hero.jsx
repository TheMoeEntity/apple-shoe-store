import banner from "../../../public/assets/slider-11.jpeg";
import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image
        alt="Banner-img"
        objectFit="cover"
        src={banner}
        layout="fill"
        quality={100}
        priority={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className={styles.caption}>
        <span>Our Summer Collection</span>
        <h1>APPLE STORE ESSENTIAL COLLECTION</h1>
        <span>Our summer collection of shoes will blow you away</span>
        <button>
          Shop collection <i>&#10230;</i>
        </button>
      </div>
      <div className={styles.overlay}></div>
      {/* <Dots count={3} /> */}
      {/* <div id={styles.left}><i className="fa-solid fa-angle-left"></i></div>
        <div id={styles.right}><i className="fa-solid fa-angle-right"></i></div> */}
    </div>
  );
};
export default Hero;
