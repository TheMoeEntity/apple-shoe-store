import styles from './items.module.css'
import Image from 'next/image'
import { useRef, useState } from 'react'
import Head from 'next/head'
import boylarge2 from '../../public/assets/boylarge2.jpeg'
import boy from '../../public/assets/boy.jpeg'
import boy4 from '../../public/assets/boy4.jpeg'
import jeans from '../../public/assets/jeans.jpeg'
import Link from 'next/link'
import NavStyles from '../../components/Nav/Nav.module.css'
import { useRouter } from 'next/router'

const assets = [boylarge2,boy,boy4,jeans]
const Items = () => {
  
  const [items,setItems] = useState(1)
  const [currImage,setCurrImage] = useState(boy)
  const sizeRef = useRef(null)
  const colorRef = useRef(null)
  const [currSize,setCurrSize] = useState("")

  const handleSize = (e,type) => {
    const parent = type === "size" ? sizeRef.current : colorRef.current
    const selected = type === "size" ? styles.sizeSelected : styles.colorSelected
    Array(...parent.children).forEach(element => {
        element.classList.remove(selected)
    })
    e.target.classList.toggle(selected)
    setCurrSize(e.target.innerHTML)
  }

  const addToCart = async () => {

  }

  return ( 
    <div className={styles.items}>
      <Head>
        <title>Apple stores | Products</title>
        <meta name="Apple store" content="Our amazing products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <div className={styles.pagination}>
            Home / Men / Sweatshirts and Pants
        </div>
            <h3>Oversized Hoodie</h3>
            <div className={styles.banner}>
                <Image objectFit='cover' src={currImage} layout={"fill"}  priority />
            </div>
            <div className={styles.flex}>
                {
                  assets.map((item,key)=> (
                    <div onClick={()=> setCurrImage(item)} key={key}>
                    <Image objectFit='cover' src={item} layout={"fill"}  />
                    </div>
                  ))
                } 
            </div>
            <h3>Oversized Hoodie</h3>
            <h4>1 review</h4>
            <h4>$324.87</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing. amet consectetur. amet consectetur</p>

      </div>


      <div>
      <div className={styles.variations}>
              <h3>SIZE VARIATIONS:</h3>
              <div ref={sizeRef}>
                <span className={styles.sizeSelected} onClick={e => handleSize(e,"size")}> 43</span>
                <span onClick={e => handleSize(e,"size")}> 42</span>
                <span onClick={e => handleSize(e,"size")}> 41</span>
                <span onClick={e => handleSize(e,"size")}> 40</span>
                <span onClick={e => handleSize(e,"size")}> 39</span>
              </div>
              
            </div>
      <div className={styles.color}>
              <h3>COLOR VARIATIONS:</h3>
              <div ref={colorRef}>
                <span onClick={e => handleSize(e,"color")} style={{background:'darkred'}}></span>
                <span onClick={e => handleSize(e,"color")} style={{background:'darkblue'}}></span>
                <span onClick={e => handleSize(e,"color")} style={{background:'darkgreen'}}></span>
                <span onClick={e => handleSize(e,"color")} style={{background:'black'}}></span>
                <span onClick={e => handleSize(e,"color")} style={{background:'yellowgreen'}}></span>
              </div>
              
            </div>
            <div className={styles.desc}>
                <h4>Description</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos praesentium tenetur enim non veritatis debitis quod optio nulla veniam, ratione magnam tempora magni ducimus doloribus consectetur molestias voluptatum nostrum officia eligendi in, architecto fugiat! Doloribus debitis maxime impedit rerum architecto? <br /><br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, aperiam magnam rem obcaecati ducimus, eaque odio voluptates tempora, dignissimos debitis amet at. Nemo culpa tempora saepe perspiciatis labore placeat omnis asperiores maxime laudantium magni, eveniet cum ipsam? Sapiente officia labore dolorum, minima sint voluptatum quae distinctio magni doloribus. Tenetur culpa consectetur omnis praesentium placeat magni exercitationem in dolores eaque iste.
                </p>
            </div>
        
        <div>
        <div id={styles.hide} style={{
          maxWidth:"400px",
          float:"left",
          height: "70px"
        }} className={NavStyles.controls}>
          <div className={NavStyles.counter}>
              <div onClick={()=> setItems(curr => curr === 0 ? 0:curr-1)}>-</div>
              <div>{items}</div>
              <div onClick={()=> setItems(curr => curr+1)}>+</div>
          </div>
         
          <button onClick={addToCart} className={NavStyles.toCart}>
              Add to cart
          </button>
        </div>

        
        </div>

      </div>
           
    </div>
  )
}

export default Items