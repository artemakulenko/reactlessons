import { useState } from 'react'
import styles from './CostForm.module.scss'

const CostForm = (props) => {

  const [inputName, setInputName] = useState('')
  const [inputAmount, setInputAmount] = useState('')
  const [inputDate, setInputDate] = useState('')

  

  const nameChangeHandler = (e) => setInputName(e.target.value)
  const amountChangeHandler = (e) => setInputAmount(e.target.value)
  const dateChangeHandler = (e) => setInputDate(e.target.value)

  const sumbitForm = (e) => {
    e.preventDefault()
    const data = {
      name: inputName,
      amount: inputAmount,
      date: new Date(inputDate)
    }

    props.onSaveCostData(data)
    setInputName('')
    setInputAmount('')
    setInputDate('')

  }



  return(
    <>
      <div> name: {inputName} </div>
      <div> amount: {inputAmount} </div>
      <div> date: {inputDate} </div>


      <form className={styles.form} onSubmit={sumbitForm} >

        <div className={styles.formGroup}>
          <label htmlFor="text">Название</label>
          <input 
            type="text" 
            placeholder='Название' 
            onChange={nameChangeHandler} 
            value={inputName}
            />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="">Сумма</label>
          <input 
            type="number" 
            placeholder='Сумма' 
            min={0.01} 
            step={0.01} 
            onChange={amountChangeHandler}
            value={inputAmount}
            />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="">Сумма</label>
          <input 
            type="date" 
            placeholder='' 
            min='2019-01-01' 
            max='2019-12-31' 
            onChange={dateChangeHandler} 
            value={inputDate}
            />
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