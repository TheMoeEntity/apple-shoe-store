import styles from '../Home/Hero/Hero.module.css'

export const Dots = ({count}) => {
  return (
    <div className={styles.page}>

        {
        Array(...Array(count)).map((_item,key)=>(
          <div key={key}></div>
        ))
        }

    </div>
  )
}
