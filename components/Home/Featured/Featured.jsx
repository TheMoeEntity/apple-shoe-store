import  Card  from "./Card";
import styles from "./Featured.module.css";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import banner from "../../../public/assets/banner-22.jpeg";
import banner3 from "../../../public/assets/banner.jpeg";
import banner2 from "../../../public/assets/banner-23.jpeg";
import slider from "../../../public/assets/slider-14.jpeg";
import  Loader  from "../../Loader/Loader";

 const Featured = ({ heading, prods }) => {
  const ref = useRef(null);
  const [state, setState] = useState({
    products: [],
    loading: true,
  });

  const { loading, products } = state;
  const carousel = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        setState({
          products:prods,
          loading: false,
        });
      } catch (err) {
        setState({
          products: undefined,
          loading: true,
        });

      }
    };
    fetchData();
  }, []);
  const next = (direction) => {
    const parent = carousel.current;
    const container = parent.children[0];
    parent.scrollLeft =
      direction === "right"
        ? container.scrollWidth + container.scrollWidth
        : container.scrollWidth - container.scrollWidth;
  };

  return (
    <div className={styles.featured}>
      <div className={styles.title}>
        <h2>{heading}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eius
          ipsam ea dolores sit. Labore qui explicabo aut incidunt pariatur
          aliquid optio, voluptates esse adipisci, aperiam, sit excepturi ex
          molestiae.
        </p>
      </div>

      {loading ? (
        <Loader done={!state.loading} />
      ) : (
        <div ref={ref} className={styles.wrapper}>
          <div className={styles.cardContainer}>
            <Card
              url={products[0].slug.current}
              img={products[3]}
              name={products[3].name}
            />
            <Card
              url={products[1].slug.current}
              img={products[4]}
              name={products[4].name}
            />
            <Card
              url={products[2].slug.current}
              img={products[2]}
              name={products[2].name}
            />
          </div>
          <div className={styles.cardContainer}>
            <Card
              url={products[3].slug.current}
              img={products[0]}
              name={products[0].name}
            />
            <Card
              url={products[4].slug.current}
              img={products[1]}
              name={products[1].name}
            />
            <Card
              url={products[5].slug.current}
              img={products[5]}
              name={products[5].name}
            />
          </div>
          <div className={styles.cardContainer}>
            <Card
              url={products[2].slug.current}
              img={products[2]}
              name={products[1].name}
            />
            <Card
              url={products[0].slug.current}
              img={products[0]}
              name={products[0].name}
            />
            <Card
              url={products[3].slug.current}
              img={products[3]}
              name={products[3].name}
            />
          </div>
        </div>
      )}

      {heading === "Featured products" && (
        <>
          <div className={styles.collection}>
            <div>
              <Image
                src={banner}
                objectFit="cover"
                layout="fill"
                alt="Collection banner"
              />
              <div className={styles.caption}>
                <h3>NEW SEASON</h3>
                <h2>
                  Show off your best season{" "}
                  <span style={{ color: "#98BFCD" }}>fits.</span>
                </h2>

                <div>{`Don't`} miss this opportunity</div>
                <button>
                  Shop collection <i>&#10230;</i>
                </button>
              </div>
            </div>
            <div>
              <Image
                src={banner2}
                objectFit="cover"
                layout="fill"
                alt="Collection banner"
              />
              <div className={styles.caption}>
                <h3>NEW SEASON</h3>
                <h2>
                  How well do you <br /> know street fashion ?
                </h2>

                <div>{`Don't`} miss this opportunity.</div>
                <button>
                  Shop now! <i>&#10230;</i>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.imgSlider}>
            <div ref={carousel} className={styles.carousel}>
              <div>
                <div className={styles.overlay}></div>
                <Image
                  src={slider}
                  objectFit="cover"
                  layout="fill"
                  alt="Collection banner"
                />
                <div className={styles.caption}>
                  <span>Our winter Collection</span>
                  <h1>APPLE STORES ESSENTIAL WINTER COLLECTION</h1>
                  <span>Our summer collection will blow your mind</span>
                  <button>
                    Shop collection <i>&#10230;</i>
                  </button>
                </div>
              </div>
              <div>
                <div className={styles.overlay}></div>
                <Image
                  src={banner3}
                  objectFit="cover"
                  layout="fill"
                  alt="Collection banner"
                />
                <div className={styles.caption}>
                  <span>Our winter Collection</span>
                  <h1>VALENTIN PAUL ESSENTIAL COLLECTION</h1>
                  <span>Peruse our eye catching gallery</span>
                  <button>
                    Shop collection <i>&#10230;</i>
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`${styles.controlButtons} ${styles.left}`}
              onClick={() => next("left")}
            >
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </div>
            <div
              className={`${styles.controlButtons} ${styles.right}`}
              onClick={() => next("right")}
            >
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Featured