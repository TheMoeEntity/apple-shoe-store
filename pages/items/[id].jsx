import styles from "./items.module.css";
import styles2 from "../../components/Nav/Nav.module.css";
import Image from "next/image";
import { useRef, useState } from "react";
import Head from "next/head";
import NavStyles from "../../components/Nav/Nav.module.css";
import { useEffect } from "react";
import client from "../../helpers/client";
import { urlForThumbnail } from "../../helpers/image";
import noimage from "../../public/assets/noimage.png";
import { addProduct } from "../../helpers/Redux/cart";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import Link from "next/link";
import { Helpers } from "../../helpers";
import Overview from "../../components/Overview";

const Items = ({ item }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [items, setItems] = useState(1);
  const [images, setImages] = useState([]);
  const [currImage, setCurrImage] = useState(noimage);
  const sizeRef = useRef(null);
  const colorRef = useRef(null);
  const [sizes, setSizes] = useState([]);
  const [currSize, setCurrSize] = useState(item.sizes[0]);
  const dispatch = useDispatch();
  useEffect(() => {
    const imgArray = [];
    const allSizes = [];
    if (item.images) {
      item.images.forEach((element) => {
        imgArray.push(urlForThumbnail(element, noimage));
      });
      setCurrImage(imgArray[0]);
      setImages(imgArray);
    } else {
      setCurrImage(urlForThumbnail(item.image, noimage));
    }
    item.sizes.forEach((element) => {
      allSizes.push(element);
    });
    setSizes(allSizes);
  }, []);

  const handleSize = (e, type) => {
    const parent = type === "size" ? sizeRef.current : colorRef.current;
    const selected =
      type === "size" ? styles.sizeSelected : styles.colorSelected;
    Array(...parent.children).forEach((element) => {
      element.classList.remove(selected);
    });
    e.target.classList.toggle(selected);
    setCurrSize(e.target.innerHTML);
    console.log(currSize);
  };

  const addToCart = () => {
    const price = item.price * items;
    let newItem;
    if (!("images" in item)) {
      newItem = { ...item, images: [item.image], more: false };
      item = item.image === undefined ? item : newItem;
    }

    dispatch(addProduct({ ...item, items, price, currSize }));
    enqueueSnackbar("Successfully Added item to your cart", {
      variant: "success",
    });
  };

  return (
    <div className={styles.items}>
      <Head>
        <title>Apple stores | Products</title>
        <meta name="Apple store" content="Our amazing products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div style={{ background: "whitesmoke" }} className={styles2.Nav}>
          <div className={styles2.controls}>
            <div className={styles2.counter}>
              <div
                onClick={() => setItems((curr) => (curr === 0 ? 0 : curr - 1))}
              >
                -
              </div>
              <div>{items}</div>
              <div onClick={() => setItems((curr) => curr + 1)}>+</div>
            </div>
            {/* <Link href={`/cart`}> */}
            <button onClick={addToCart} className={styles2.toCart}>
              Add to cart
            </button>
            {/* </Link> */}
          </div>
        </div>

        <div className={styles.pagination}>
          {" "}
          <Link href={`/`}>Home</Link> / <Link href={`/men`}>Men</Link> /{" "}
          {item.name}
        </div>
        <h3>{item.name}</h3>
        <div className={styles.banner}>
          <Image
            alt="card-image"
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            objectFit="cover"
            src={currImage}
            layout="fill"
          />
        </div>

        {item.images ? (
          <div className={styles.flex}>
            {images.map((item, key) => (
              <div onClick={() => setCurrImage(item)} key={key}>
                <Image
                  objectFit="cover"
                  src={item}
                  alt="card-image"
                  layout="fill"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.flex}>
            {[...Array(4)].map((_item, key) => (
              <div key={key}>
                <Image
                  objectFit="cover"
                  src={noimage}
                  alt="card-image"
                  layout="fill"
                  quality={100}
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        )}
        <h3>{item.name}</h3>
        <h3
          style={{
            color: "green",
            fontSize: "22px",
            border: "2px solid green",
            width: "fit-content",
            padding: "8px",
            borderRadius: "8px",
          }}
        >
          ₦{Helpers.coma(item.price)}
        </h3>
        <p>{item.headline}</p>
      </div>

      <div>
        <div className={styles.variations}>
          <h3>SIZE VARIATIONS:</h3>
          <div ref={sizeRef}>
            {sizes.map((size, key) => (
              <span key={key} onClick={(e) => handleSize(e, "size")}>
                {" "}
                {size}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.color}>
          <h3>COLOR VARIATIONS:</h3>
          <div ref={colorRef}>
            <span
              onClick={(e) => handleSize(e, "color")}
              style={{ background: "darkred" }}
            ></span>
            <span
              onClick={(e) => handleSize(e, "color")}
              style={{ background: "darkblue" }}
            ></span>
            <span
              onClick={(e) => handleSize(e, "color")}
              style={{ background: "darkgreen" }}
            ></span>
            <span
              onClick={(e) => handleSize(e, "color")}
              style={{ background: "black" }}
            ></span>
            <span
              onClick={(e) => handleSize(e, "color")}
              style={{ background: "yellowgreen" }}
            ></span>
          </div>
        </div>
        <div className={styles.desc}>
          <h4>Description</h4>
          <p>
            {item.description}
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div>
          <div>
            <div
              id={styles.hide}
              style={{
                maxWidth: "400px",
                float: "left",
                height: "70px",
              }}
              className={NavStyles.controls}
            >
              <div className={NavStyles.counter}>
                <div
                  onClick={() =>
                    setItems((curr) => (curr === 0 ? 0 : curr - 1))
                  }
                >
                  -
                </div>
                <div>{items}</div>
                <div onClick={() => setItems((curr) => curr + 1)}>+</div>
              </div>
              <button onClick={addToCart} className={NavStyles.toCart}>
                Add to cart
              </button>
            </div>
            <br />
            <div className={styles.wish}>
              <br />
              <div>
                <i className="fa-solid fa-heart"></i> Add to wishlist <br />{" "}
              </div>

              <br />
              <div>
                <i className="fas fa-share"></i> Share with friends{" "}
                <i className="fa-brands fa-twitter"></i>{" "}
                <i className="fa-brands fa-facebook"></i>{" "}
                <i className="fa-brands fa-whatsapp"></i>
              </div>
            </div>{" "}
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className={styles.share}>
        <br />
        <h2>
          <i className="fa-solid fa-star"></i> 4.87, {item.reviews} reviews{" "}
        </h2>
        <Overview />
      </div>
    </div>
  );
};

export default Items;
export const getServerSideProps = async ({ params, query }) => {
  const id = params.id;
  var item = await client.fetch(
    `*[_type == "product" && slug.current == $id][0]`,
    { id }
  );
  const featured = await client.fetch(
    `*[_type == "featured" && slug.current == $id][0]`,
    { id }
  );
  if (query.from === "home") {
    item = featured;
  }

  return {
    props: {
      item,
    },
  };
};
