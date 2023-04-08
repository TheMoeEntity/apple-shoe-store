import React, { useEffect, useRef, useState } from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { urlFor, urlForThumbnail } from "../../../helpers/image";
import loading from "../../../public/assets/loading.jpeg";


const Card = ({ img, name, men = false, url }) => {
  const router = useRouter();
  const coma = price => {
    return price.toLocaleString()
  }
  return (
    router.pathname === "/" ? (
      <Link href={`/items/${url}?from=home`} passHref>
        <div className={`${styles.card} ${men ? styles.cardMen : ""}`}>
          <div className={styles.img}>
            <Image
              src={urlFor(img.image, loading)}
              objectFit="cover"
              alt="card-image"
              layout="fill"
            />
            <div className={styles.tag}>-17%</div>
            <div className={styles.like}>
              <i className="fa-solid fa-heart"></i>
            </div>
            <div className={styles.cart}>
              <i className="fa-solid fa-shopping-cart"></i>
            </div>
          </div>
          <div className={styles.details}>
            <h3>{img.reviews} reviews</h3>
            <h4>{name}</h4>
            <h4>₦{img.price.toLocaleString()}</h4>
          </div>
        </div>
    </Link>
    ):(    <Link href={`/items/${url}`} passHref>
    {router.pathname === "/men" ? (
      <div className={`${styles.card} ${men ? styles.cardMen : ""}`}>
        <div className={styles.img}>
          <Image
            src={urlFor(img.images[0], loading)}
            objectFit="cover"
            alt="card-image"
            layout="fill"
          />
          <div className={styles.tag}>-17%</div>
          <div className={styles.like}>
            <i className="fa-solid fa-heart"></i>
          </div>
          <div className={styles.cart}>
            <i className="fa-solid fa-shopping-cart"></i>
          </div>
        </div>
        <div className={styles.details}>
          <h3>{img.reviews} reviews</h3>
          <h4>{name}</h4>
          <h4>₦{coma(img.price)}</h4>
        </div>
      </div>
    ) : (
      <div className={`${styles.card} ${men ? styles.cardMen : ""}`}>
        <div className={styles.img}>
          <Image
            src={urlFor(img.image, loading)}
            objectFit="cover"
            alt="card-image"
            layout="fill"
          />
          <div className={styles.tag}>-17%</div>
          <div className={styles.like}>
            <i className="fa-solid fa-heart"></i>
          </div>
          <div className={styles.cart}>
            <i className="fa-solid fa-shopping-cart"></i>
          </div>
        </div>
        <div className={styles.details}>
          <h3>{img.reviews} reviews</h3>
          <h4>{name}</h4>
          <h4>₦{img.price.toLocaleString()}</h4>
        </div>
      </div>
    )}
  </Link>)

  );
};
export default Card