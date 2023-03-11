// import styles from './NewCost.module.scss'
import { Container } from '../UI/Container/Container'
import { Card } from '../UI/Card'
import { CostForm } from '../CostForm'

const NewCost = (props) => {
  
  const costSaveDataHandler = (inputCostData) => {

    const costData = {
      ...inputCostData,
      id: Math.random().toString()
    }

    props.onAddCost(costData)
  }

  return(
    <Container>
      <Card>
        <CostForm onSaveCostData={costSaveDataHandler}/>
      </Card>
    </Container>
  )
}

export {NewCost}