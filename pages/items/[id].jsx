import styles from './items.module.css'
import { Card } from '../../components/Home/Featured/Card'
import shoe2 from '../../public/assets/shoes3.JPG'
import girl from '../../public/assets/girl.jpeg'
import shoe1 from '../../public/assets/shoes1.JPG'
import shoe3 from '../../public/assets/slider-11.jpeg'
import man from '../../public/assets/blackwoman.jpeg'
import man2 from '../../public/assets/man.png'
import Image from 'next/image'
import { useState } from 'react'

const assets = [girl,shoe3,shoe3,man]
const Items = () => {
  const [currImage,setCurrImage] = useState(girl)
  
  return (
    <div className={styles.items}>
        <div className={styles.pagination}>
            Home / Men / Sweatshirts and Pants
        </div>
            <h3>Oversized Hoodie</h3>
            <div className={styles.banner}>
                <Image objectFit='cover' src={currImage} layout={"fill"}  />
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
            <div className={styles.variations}>
              <h3>SIZE VARIATIONS:</h3>
              <div>
                <span> 43</span>
                <span> 42</span>
                <span> 41</span>
                <span> 40</span>
                <span> 39</span>
              </div>
              
            </div>
            <div className={styles.color}>
              <h3>COLOR VARIATIONS:</h3>
              <div>
                <span style={{background:'darkred'}}></span>
                <span style={{background:'darkblue'}}></span>
                <span style={{background:'darkgreen'}}></span>
                <span style={{background:'black'}}></span>
                <span style={{background:'yellowgreen'}}></span>
              </div>
              
            </div>
            <div className={styles.desc}>
                <h4>Description</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos praesentium tenetur enim non veritatis debitis quod optio nulla veniam, ratione magnam tempora magni ducimus doloribus consectetur molestias voluptatum nostrum officia eligendi in, architecto fugiat! Doloribus debitis maxime impedit rerum architecto? <br /><br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, aperiam magnam rem obcaecati ducimus, eaque odio voluptates tempora, dignissimos debitis amet at. Nemo culpa tempora saepe perspiciatis labore placeat omnis asperiores maxime laudantium magni, eveniet cum ipsam? Sapiente officia labore dolorum, minima sint voluptatum quae distinctio magni doloribus. Tenetur culpa consectetur omnis praesentium placeat magni exercitationem in dolores eaque iste.
                </p>
            </div>
    </div>
  )
}

export default Items