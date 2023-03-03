import { CostItem } from "../CostItem/CostItem"
import styles from './Costs.module.scss'
import { Container } from "../../UI/Container/Container"

const Costs = (props) => {
  return (
    <div className={styles.costs}>
      <Container className="container">
        <div className={styles.grid}>
          {
            props.costsArr.map((item, i) => {
              return(
                <CostItem 
                  date={item.date}
                  description={item.description}
                  amount={item.amount}
                  key={i}
                />
              )
            })
          }
        </div>
      </Container>
    </div>
  )
}

export {Costs}