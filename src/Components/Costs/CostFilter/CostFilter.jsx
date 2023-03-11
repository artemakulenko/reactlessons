// import { useState } from 'react'
import { Card } from '../../UI/Card'
import { Container } from '../../UI/Container/Container'
import styles from './CostFilter.module.scss'



const CostFilter = (props) => {

  const yearChangeHandler = (event) => {
    props.onChangeYear(event.target.value);
  };

  return(
    <>
      <Container>
        <Card>
          <div className={styles.costsFilter}>
            <div className={styles.control}>
              <label>Выбор По Году</label>
              <select 
                value={props.year}
                onChange={yearChangeHandler}
              >
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
              </select>
            </div>
          </div>
        </Card>
      </Container>
    </>
  )
}

export {CostFilter}