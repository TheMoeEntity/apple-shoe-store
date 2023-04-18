import styles from "./index.module.css";
import { useEffect, useRef } from "react";
const Overview = () => {
    const container = useRef(null);
    const hide = () => {
        
        let others = container.current.children;
        for (const child of others) {
          child.style.display = "none";
        }
        others[0].style.display = "block";

      };
      useEffect(() => {
        hide();
      }, []);
      const displayContent = (index) => {
        let others = container.current.children;
        for (const child of others) {
          child.style.display = "none";
        }
        others[index].style.display = "block";
      };
  return (
    <div className={styles.panel}>
      <div className={styles.controls}>
        <div onClick={() => displayContent(0)}>Return policy</div>
        <div onClick={() => displayContent(1)}>Shipping</div>
        <div onClick={() => displayContent(2)}>Warranty</div>
        <div onClick={() => displayContent(3)}>Reviews</div>
      </div>
      <div ref={container} className={styles.content}>
        <div>There are no returns or exchanges for this particular item</div>

        <div>
          <i className="fa-solid fa-shipping-fast"></i> Delivery time <br />
          {" Estimated delivery time: 1-5 working days"}
        </div>

        <div>Warranty information unavailable for this item.</div>
      </div>
    </div>
  );
};

export default Overview;
