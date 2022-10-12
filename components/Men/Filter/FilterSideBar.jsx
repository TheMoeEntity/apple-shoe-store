import styles from './Filter.module.css'
import Link from 'next/link'

const FilterSideBar = ({show,close}) => {
  return (
    <div style={{
        left: show ? "0" : "-100%"
    }} className={styles.sidebar}>
    <div onClick={close} className={styles.sidebarContent}>
        <h2>Apple Stores</h2>
        <div className={styles.closeBtn}>
            <span>&times;</span>
        </div>

        <h4>Filter by price</h4>
        <div className={styles.price}>
            <span>Price: $20-$270</span>
            <span>Filter</span>
        </div>

        <h4>Filter by Color</h4>
        <ul>
            <li>
                <span>
                    <div style={{backgroundColor:"darkred"}} className={styles.circle}></div>
                    Appple Red
                </span>
                <span>
                    (2)
                </span>
            </li>
            <li>
                <span>
                    <div style={{backgroundColor:"yellow"}} className={styles.circle}></div>
                    Yellow
                </span>
                <span>
                    (2)
                </span>
            </li>
            <li>
                <span>
                    <div style={{backgroundColor:"midnightblue"}} className={styles.circle}></div>
                    Blue
                </span>
                <span>
                    (2)
                </span>
            </li>
            <li>
                <span>
                    <div style={{backgroundColor:"orange"}} className={styles.circle}></div>
                    Orange
                </span>
                <span>
                    (2)
                </span>
            </li>
            <li>
                <span>
                    <div style={{backgroundColor:"darkgreen"}} className={styles.circle}></div>
                    Green
                </span>
                <span>
                    (2)
                </span>
            </li>
            <li>
                <span>
                    <div style={{backgroundColor:"black"}} className={styles.circle}></div>
                    Black
                </span>
                <span>
                    (2)
                </span>
            </li>
        </ul>


        <h4>Filter by Size</h4>
        <ul>
            <li>
                <span>
                    <input type="checkbox" name="" id="" />
                    XXL
                </span>
                <span>
                    (2)
                </span>
            </li>
            <li>
                <span>
                <input type="checkbox" name="" id="" />
                    XL
                </span>
                <span>
                    (2)
                </span>
            </li>
            <li>
                <span>
                <input type="checkbox" name="" id="" />
                    L
                </span>
                <span>
                    (2)
                </span>
            </li>
            <li>
                <span>
                <input type="checkbox" name="" id="" />
                    S
                </span>
                <span>
                    (2)
                </span>
            </li>
            <li>
                <span>
                <input type="checkbox" name="" id="" />
                    M
                </span>
                <span>
                    (2)
                </span>
            </li>
            <li>
                <span>
                <input type="checkbox" name="" id="" />
                    XS
                </span>
                <span>
                    (2)
                </span>
            </li>
        </ul>



    </div>
</div>
  )
}

export default FilterSideBar