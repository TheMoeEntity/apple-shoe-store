import React, { useEffect, useRef, useState } from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { urlFor, urlForThumbnail } from "../../../helpers/image";
import loading from "../../../public/assets/loading.jpeg";
import { addProduct } from "../../../helpers/Redux/cart";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { Helpers } from "../../../helpers";

const Card = ({ img, name, men = false, url }) => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const router = useRouter();
  const addToCart = (item, items) => {
    const price = item.price * items;
    
    let newItem;
    if (!("images" in item)) {
      newItem = { ...item, images: [item.image], more: false };
      item = item.image === undefined ? item : newItem;
    }
    dispatch(addProduct({ ...item, items, price }));
    enqueueSnackbar("Successfully Added item to your cart", {
      variant: "success",
    });
  };
  return router.pathname === "/" ? (
    <div className={`${styles.card} ${men ? styles.cardMen : ""}`}>
      <div className={styles.img}>
        <Link href={`/items/${url}?from=home`} passHref>
          <Image
            src={urlFor(img.image, loading)}
            objectFit="cover"
            alt="card-image"
            layout="fill"
            
          />
        </Link>
        <div className={styles.tag}>-17%</div>
        <div
          onClick={() => {
            enqueueSnackbar("Added item to Wishlist", {
              variant: "success",
            });
          }}
          className={styles.like}
        >
          <i className="fa-solid fa-heart"></i>
        </div>
        <div onClick={() => addToCart(img, 1)} className={styles.cart}>
          <i className="fa-solid fa-shopping-cart"></i>
        </div>
      </div>
      <Link href={`/items/${url}?from=home`} passHref>
        <div className={styles.details}>
          <h3>{img.reviews} reviews</h3>
          <h4>{name}</h4>
          <h4>₦{Helpers.coma(img.price)}</h4>
        </div>
      </Link>
    </div>
  ) : (
    <>
      {router.pathname === "/men" ? (
        <div className={`${styles.card} ${men ? styles.cardMen : ""}`}>
          <div onClick={()=> router.push(`/items/${url}`)} className={styles.img}>
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
          <Link href={`/items/${url}`} passHref>
            <div className={styles.details}>
              <h3>{img.reviews} reviews</h3>
              <h4>{name}</h4>
              <h4>₦{Helpers.coma(img.price)}</h4>
            </div>
          </Link>
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
          <Link href={`/items/${url}`} passHref>
            <div className={styles.details}>
              <h3>{img.reviews} reviews</h3>
              <h4>{name}</h4>
              <h4>₦{Helpers.coma(img.price)}</h4>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};
export default Card;
