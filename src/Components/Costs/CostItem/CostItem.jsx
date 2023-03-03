import { CostDate } from '../CostDate/CostDate'
import { Card } from '../../UI/Card'

import styles from './CostItem.module.scss'

import { useState } from 'react'



const CostItem = (props) => {
  const [desc, setDesc] = useState(props.description)

  const clickFuncHandler = () => {
    setDesc('dsdsd')
  }


  return(

    <Card className={styles.item}>

      <div className={styles.price}>
        {props.amount} <span className={styles.symbol}>USD</span>
      </div>

      <div className={styles.description}>
        {desc}
      </div>

      <div className={styles.date}>
        <CostDate date={props.date}/>
      </div>

      <div>
        <button onClick={clickFuncHandler}>Click me</button>
      </div>
    </Card>
  )
}

export {CostItem}