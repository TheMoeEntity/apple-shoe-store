import styles from "./items.module.css";
import Image from "next/image";
import { useRef, useState } from "react";
import Head from "next/head";
import boy from "../../public/assets/boy.jpeg";
import NavStyles from "../../components/Nav/Nav.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import client from "../../helpers/client";
import { urlForThumbnail } from "../../helpers/image";
import { useContext } from "react";
import { Store } from "../../helpers/Context/Store";

const Items = ({ item }) => {
  const {
    state: { cart },
    dispatch,
  } = useContext(Store);
  const [items, setItems] = useState(1);
  const [currImage, setCurrImage] = useState(boy);
  const [images, setImages] = useState([]);
  const sizeRef = useRef(null);
  const colorRef = useRef(null);
  const [currSize, setCurrSize] = useState("");
  useEffect(() => {
    const imgArray = [];
    item.images.forEach((element) => {
      imgArray.push(urlForThumbnail(element));
    });
    setImages(imgArray);
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
  };

  const addToCart = async () => {};

  return (
    <div className={styles.items}>
      <Head>
        <title>Apple stores | Products</title>
        <meta name="Apple store" content="Our amazing products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={styles.pagination}>Home / Men / {item.name}</div>
        <h3>{item.name}</h3>
        <div className={styles.banner}>
          <Image objectFit="cover" src={images[0]} layout={"fill"} priority />
        </div>
        <div className={styles.flex}>
          {images.map((item, key) => (
            <div onClick={() => setCurrImage(item)} key={key}>
              <Image objectFit="cover" src={item} layout={"fill"} />
            </div>
          ))}
        </div>
        <h3>{item.name}</h3>
        <h4>
          {item.reviews} {item.reviews > 1 ? "reviews" : "review"}
        </h4>
        <h4>$324.87</h4>
        <p>{item.headline}</p>
      </div>

      <div>
        <div className={styles.variations}>
          <h3>SIZE VARIATIONS:</h3>
          <div ref={sizeRef}>
            <span
              className={styles.sizeSelected}
              onClick={(e) => handleSize(e, "size")}
            >
              {" "}
              43
            </span>
            <span onClick={(e) => handleSize(e, "size")}> 42</span>
            <span onClick={(e) => handleSize(e, "size")}> 41</span>
            <span onClick={(e) => handleSize(e, "size")}> 40</span>
            <span onClick={(e) => handleSize(e, "size")}> 39</span>
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
                onClick={() => setItems((curr) => (curr === 0 ? 0 : curr - 1))}
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
        </div>
      </div>
    </div>
  );
};

export default Items;
export const getServerSideProps = async ({ params }) => {
  const id = params.id;
  const item = await client.fetch(
    `*[_type == "product" && slug.current == $id][0]`,
    { id }
  );
  return {
    props: {
      item,
    },
  };
};
