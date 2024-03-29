import styles from "./Filter.module.css";
import FilterSideBar from "./FilterSideBar";
import Card from "../../Home/Featured/Card";
import client from "../../../helpers/client";
import { useSnackbar } from "notistack";
import Loader  from "../../Loader/Loader";
import { useState, useEffect } from "react";

const Filter = ({ items }) => {
  const [show, setShow] = useState(false);
  const {enqueueSnackbar} = useSnackbar();
  const [state, setState] = useState({
    products: [],
    loading: true,
  });

  const { loading} = state;

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
        enqueueSnackbar("Error loading collection", {
          variant: "error",
        });
      }
    };

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
                  url={items[7].slug.current}
                  img={items[7]}
                  name={items[7].name}
                />
                <Card
                  url={items[6].slug.current}
                  img={items[6]}
                  name={items[6].name}
                />
              </div>
              <div>
                <Card
                  url={items[5].slug.current}
                  img={items[5]}
                  name={items[5].name}
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
            url={items[10].slug.current}
            img={items[10]}
            name={items[10].name}
          />
        </div>
        <div>
          <Card
            url={items[9].slug.current}
            img={items[9]}
            name={items[9].name}
          />
        </div>
        <div>
          <Card
            url={items[8].slug.current}
            img={items[8]}
            name={items[8].name}
          />
        </div>
        <div>
          <Card
            url={items[4].slug.current}
            img={items[4]}
            name={items[4].name}
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
