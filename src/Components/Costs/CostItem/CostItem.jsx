import { CostDate } from '../CostDate/CostDate'
import { Card } from '../../UI/Card'
import styles from './CostItem.module.scss'


const CostItem = (props) => {
  
  return(
    <Card className={styles.item}>

      <div className={styles.price}>
        {props.amount} <span className={styles.symbol}>USD</span>
      </div>

      <div className={styles.description}>
        {props.name}
      </div>

      <div className={styles.date}>
        <CostDate date={props.date}/>
      </div>

    </Card>
  )
}

export {CostItem}