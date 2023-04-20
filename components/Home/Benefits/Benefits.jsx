import styles from './Benefits.module.css'
import Link from 'next/link'


const Benefits = () => {
  return (
    <div className={styles.benefits}>
        <div>
            <div className={styles.flexItems}>
                <div>
                <i className='fa-solid fa-shipping-fast'></i>
                </div>
                <div>
                    <h3>Free Shipping</h3>
                    <h4>Free Shipping for orders over ₦45,000</h4>
                </div>
            </div>
            <div className={styles.flexItems}>
            <div>
            <i className='fa-solid fa-money-bill-transfer'></i>
            </div>
                <div>
                    <h3>Money Guarantee</h3>
                    <h4>Within 30 days for an exchange</h4>
                </div>
            </div>
            <div className={styles.flexItems}>
            <div> 
            <i className='fa-solid fa-phone'></i>
            </div>
                <div>
                    <h3>Online Support</h3>
                    <h4>within 30 days for an exchange</h4>
                </div>
            </div>
            <div className={styles.flexItems}>
            <div>
            <i className='fa-solid fa-credit-card'></i>
            </div>
                <div>
                    <h3>Flexible Payment</h3>
                    <h4>Pay on Delivery, PayPal or Credit Cards</h4>
                </div>
            </div>
        </div>

    <ul>
        <li className={styles.flex}>
            <div className={styles.women}>
                <div>
                    30 products 
                    <Link href="/women"><h2>Navigate to our {`Women's`} category</h2></Link>
                    <br />
                    <h3>Hats</h3>
                    <h3>Shoes</h3>
                    <h3>Blouses</h3>
                    <h3>Skirts</h3>
                    <h3>Hats</h3>
                    <h3>Pants</h3>
                </div>
            </div>
        </li>


    <ul className={styles.flex}>
    <li>
            <div className={styles.men}>
            <div>
                    40 products 
                    <Link href="/men"><h2>Navigate to our {`Men's`} category</h2></Link>

                    <h4>Lorem ipsum dolor sit amet consectet. consectetur</h4>
        
                    <h3>Shoes</h3>

                    <h3>Ashawo Shorts</h3>
                    <h3>Jeans</h3>
            
                </div>
            </div>
        </li>
    <li>
            <div className={styles.shoesacc}>
                <div>
                    <h4>20+ products</h4>
                    <h4>Shoes</h4>
                </div>
                <div>
                    <h4>20+ products</h4>
                    <h4>Shoes</h4>
                </div>
            </div>
        </li>
    </ul>


    </ul>

    </div>
  )
}
export default Benefits