import { useState } from 'react'
import styles from './CostForm.module.scss'

const CostForm = (props) => {

  const [userInput, setUserInput] = useState({
    name: '',
    amount: '',
    date: ''
  })

  const nameChangeHandler = (e) => setUserInput({ ...userInput, name: e.target.value})
  const amountChangeHandler = (e) => setUserInput({...userInput, amount: e.target.value})
  const dateChangeHandler = (e) => setUserInput({...userInput, date: e.target.value})




  return(
    <>
      <div> name: {userInput.name} </div>
      <div> amount: {userInput.amount} </div>
      <div> date: {userInput.date} </div>
      <form className={styles.form}  >
        <div className={styles.formGroup}>
          <label htmlFor="text">Название</label>
          <input type="text" placeholder='Название' onChange={nameChangeHandler}/>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="">Сумма</label>
          <input 
            type="number" 
            placeholder='Сумма' 
            min={0.01} 
            step={0.01} 
            onChange={amountChangeHandler}
            />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="">Сумма</label>
          <input type="date" placeholder='' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
        </div>

        <div className={styles.buttonWrapper}>
          <button type='submit'>Добавить расход</button>
          <button type='submit'>Отмена</button>
        </div>

      </form>
    </>
  )
}

export {CostForm}