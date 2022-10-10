import styles from './Filter.module.css'
import FilterSideBar from './FilterSideBar'
import { Card } from '../../Home/Featured/Card'
import shoe2 from '../../../public/assets/shoes3.JPG'
import girl from '../../../public/assets/girl.jpeg'
import shoe1 from '../../../public/assets/shoes1.JPG'
import man from '../../../public/assets/men.jpeg'
import man2 from '../../../public/assets/man.png'
import Link from 'next/link'


const Filter = () => {
    const assets = [
        
        {
            one : {
                name:"Jean Shirt",
                img:man,
                id: (Math.floor(Math.random()*1000))
            },
            two: {
                name:"Leather Jacket",
                img:man2,
                id: (Math.floor(Math.random()*1000))
            }

        },
        {
            one : {
                name:"Nike Airforce 1s",
                img:shoe1,
                id: (Math.floor(Math.random()*1000))
            },
            two: {
                name:"Vans shoes",
                img:shoe2,
                id: (Math.floor(Math.random()*1000))
            }

        },
        {
            one : {
                name:"Nike Black",
                img:shoe1,
                id: (Math.floor(Math.random()*1000))
            },
            two: {
                name:"Leather Boots",
                img:girl,
                id: (Math.floor(Math.random()*1000))
            }

        },
        {
            one : {
                name:"Versace Shirt",
                img:man2,
                id: (Math.floor(Math.random()*1000))
            },
            two: {
                name:"Fendi Pants",
                img:man,
                id: (Math.floor(Math.random()*1000))
            }

        },
        {
            one : {
                name:"Jean Shirt",
                img:shoe1,
                id: (Math.floor(Math.random()*1000))
            },
            two: {
                name:"Leather Jacket",
                img:girl,
                id: (Math.floor(Math.random()*1000))
            }

        },


    ]
   
  return (
    <div>
        <FilterSideBar />
        <div className={styles.controls}>
            <div> Filter</div>
            <div> Sort by latest</div>
        </div>
        <div className={styles.flex}>
            {
                assets.map((item,key)=> (
                    <div key={key}>  
                    <Card id={item.one.id} img={item.one.img} name={item.one.name} />
                    <Card id={item.two.id} img={item.two.img} name={item.two.name} />
                </div>                    
                ))
            }
        </div>
        <h2>Recently viewed items</h2>
        <div id={styles.recent} className={styles.flex}>
            {
                assets.map((item,key)=> (
                    <div key={key}>  
                    <Card id={item.one.id} img={item.one.img} name={item.one.name} />
                </div>                    
                ))
            }
        </div>
    </div>
  )
}

export default Filter