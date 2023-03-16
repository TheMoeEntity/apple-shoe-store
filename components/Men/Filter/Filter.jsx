import styles from "./Filter.module.css";
import FilterSideBar from "./FilterSideBar";
import { Card } from "../../Home/Featured/Card";
import shoe2 from "../../../public/assets/shoes3.JPG";
import girl from "../../../public/assets/girl.jpeg";
import shoe1 from "../../../public/assets/shoes1.JPG";
import man from "../../../public/assets/men.jpeg";
import man2 from "../../../public/assets/man.png";
import boylarge2 from "../../../public/assets/cap.jpeg";
import shoegreen from "../../../public/assets/shoegreen.jpeg";
import Link from "next/link";
import { useState } from "react";

const Filter = () => {
  const assets = [
    {
      one: {
        name: "Oversized Hoodie",
        img: boylarge2,
        id: 1,
        arr: ["boylarge2", "boy", "boy4", "cap"],
      },
      two: {
        name: "Apple Shoes",
        img: shoegreen,
        id: 2,
        arr: ["shoegreen", "shoegreen2", "shoegreen3", "shoegreen5"],
      },
    },
    {
      one: {
        name: "Nike Airforce 1s",
        img: shoe1,
        id: Math.floor(Math.random() * 1000),
      },
      two: {
        name: "Vans shoes",
        img: shoe2,
        id: Math.floor(Math.random() * 1000),
      },
    },
  ];
  const [show, setShow] = useState(false);

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
          <div className={styles.flex}>
            {assets.map((item, key) => (
              <div key={key}>
                <Card
                  id={item.one.id}
                  img={item.one.img}
                  name={item.one.name}
                />
                <Card
                  id={item.two.id}
                  img={item.two.img}
                  name={item.two.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <h2>More items</h2>

      <div className={styles.recentlyviewed}>
        <div>
          <Card
            id={Math.floor(Math.random() * 10000)}
            img={man}
            name={"NIKE pro max"}
          />
        </div>
        <div>
          <Card
            id={Math.floor(Math.random() * 10000)}
            img={man2}
            name={"NIKE pro max"}
          />
        </div>
        <div>
          <Card
            id={Math.floor(Math.random() * 10000)}
            img={girl}
            name={"NIKE pro max"}
          />
        </div>
        <div>
          <Card
            id={Math.floor(Math.random() * 10000)}
            img={shoe1}
            name={"NIKE pro max"}
          />
        </div>

        <div>
          <Card
            id={Math.floor(Math.random() * 10000)}
            img={girl}
            name={"NIKE pro max"}
          />
        </div>
        <div>
          <Card
            id={Math.floor(Math.random() * 10000)}
            img={shoe2}
            name={"NIKE pro max"}
          />
        </div>
        <div>
          <Card
            id={Math.floor(Math.random() * 10000)}
            img={girl}
            name={"NIKE pro max"}
          />
        </div>
        <div>
          <Card
            id={Math.floor(Math.random() * 10000)}
            img={shoe1}
            name={"NIKE pro max"}
          />
        </div>
      </div>

      <h2>Recently viewed items</h2>

      <div className={styles.recentlyviewed}>
        <div>
          <Card
            men={true}
            id={Math.floor(Math.random() * 10000)}
            img={man}
            name={"NIKE pro max"}
          />
        </div>
        <div>
          <Card
            men={true}
            id={Math.floor(Math.random() * 10000)}
            img={man2}
            name={"NIKE pro max"}
          />
        </div>
        <div>
          <Card
            men={true}
            id={Math.floor(Math.random() * 10000)}
            img={girl}
            name={"NIKE pro max"}
          />
        </div>
        <div>
          <Card
            men={true}
            id={Math.floor(Math.random() * 10000)}
            img={shoe1}
            name={"NIKE pro max"}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
