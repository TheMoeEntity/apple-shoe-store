import styles from "./Filter.module.css";
import FilterSideBar from "./FilterSideBar";
import { Card } from "../../Home/Featured/Card";
import shoe2 from "../../../public/assets/shoes3.JPG";
import girl from "../../../public/assets/girl.jpeg";
import shoe1 from "../../../public/assets/shoes1.JPG";
import man from "../../../public/assets/men.jpeg";
import man2 from "../../../public/assets/man.png";
import client from "../../../helpers/client";
import { useSnackbar } from "notistack";
import { Loader } from "../../Loader/Loader";
import { useState, useRef, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";

const Filter = ({ items }) => {
  const [show, setShow] = useState(false);
  const enqueueSnackbar = useSnackbar();
  const [state, setState] = useState({
    products: [],
    error: "",
    loading: true,
  });

  const { loading, error, products } = state;
  const builder = imageUrlBuilder(client);
  function urlForAsset(source) {
    return builder.image(source);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await client.fetch(`*[_type == "product" ]`);
        setState({
          products: product,
          error: false,
          loading: false,
        });
      } catch (err) {
        setState({
          products: undefined,
          error: err.message,
          loading: true,
        });
        enqueueSnackbar("Error loading features", {
          variant: "error",
        });
      }
    };
    console.log(items);
    fetchData();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.flexItems}>
        <div className={styles.filtersect}>
          <FilterSideBar close={() => setShow(false)} show={show} />
        </div>

        <div className={styles.mainsect}>
          <div className={styles.controls}>
            <div className={styles.panel} onClick={() => setShow(!show)}>
              Open Filter Panel
            </div>
            <div> Sort by latest</div>
          </div>
          {loading ? (
            <Loader done={!state.loading} />
          ) : (
            <div className={styles.flex}>
              <div>
                <Card
                  url={items[4].slug.current}
                  img={items[4]}
                  name={items[4].name}
                />
                <Card
                  url={items[1].slug.current}
                  img={items[1]}
                  name={items[1].name}
                />
              </div>
              <div>
                <Card
                  url={items[2].slug.current}
                  img={items[2]}
                  name={items[2].name}
                />
                <Card
                  url={items[3].slug.current}
                  img={items[3]}
                  name={items[3].name}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <h2>More items</h2>

      <div className={styles.recentlyviewed}>
        <div>
          <Card
            url={items[1].slug.current}
            img={items[1]}
            name={items[1].name}
          />
        </div>
        <div>
          <Card
            url={items[0].slug.current}
            img={items[0]}
            name={items[0].name}
          />
        </div>
        <div>
          <Card
            url={items[3].slug.current}
            img={items[3]}
            name={items[3].name}
          />
        </div>
        <div>
          <Card
            url={items[0].slug.current}
            img={items[0]}
            name={items[0].name}
          />
        </div>

        <div>
          <Card
            url={items[3].slug.current}
            img={items[3]}
            name={items[3].name}
          />
        </div>
        <div>
          <Card
             url={items[0].slug.current}
            img={items[0]}
            name={items[0].name}
          />
        </div>
        <div>
          <Card
            url={items[2].slug.current}
            img={items[2]}
            name={items[2].name}
          />
        </div>
        <div>
          <Card
             url={items[3].slug.current}
            img={items[3]}
            name={items[3].name}
          />
        </div>
      </div>

      <h2>Recently viewed items</h2>

      <div className={styles.recentlyviewed}>
        <div>
          <Card
            url={items[0].slug.current}
            img={items[0]}
            name={items[0].name}
          />
        </div>
        <div>
          <Card
            url={items[1].slug.current}
            img={items[1]}
            name={items[1].name}
          />
        </div>
        <div>
          <Card
            url={items[3].slug.current}
            img={items[3]}
            name={items[3].name}
          />
        </div>
        <div>
          <Card
            url={items[0].slug.current}
            img={items[0]}
            name={items[0].name}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
