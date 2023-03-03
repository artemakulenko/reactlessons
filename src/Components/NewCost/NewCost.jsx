import styles from './NewCost.module.scss'
import { Container } from '../UI/Container/Container'
import { Card } from '../UI/Card'
import { CostForm } from '../CostForm'

const NewCost = (props) => {
  

  return(
    <Container>
      <Card>
        <CostForm />
      </Card>
    </Container>
  )
}

export {NewCost}