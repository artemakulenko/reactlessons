import { CostItem } from "../CostItem/CostItem"
import { Container } from "../../UI/Container/Container"
import { CostFilter } from "../CostFilter"


import styles from './Costs.module.scss'
import { useState } from "react"


const Costs = (props) => {

  const [selectedYear, setSelectedYear] = useState('2019')


  const yearChangeHandler = (data) => {
    setSelectedYear(data)
  }

  return (
    <>
      <CostFilter year={selectedYear} onChangeYear={yearChangeHandler}/>  

      <div className={styles.costs}>
        <Container className="container">
          <div className={styles.grid}>
            {
              props.costsArr.map((item, i) => {
                return(
                  <CostItem 
                    date={item.date}
                    name={item.name}
                    amount={item.amount}
                    key={i}
                  />
                )
              })
            }
          </div>
        </Container>
      </div>
    </>
  )
}

export {Costs}