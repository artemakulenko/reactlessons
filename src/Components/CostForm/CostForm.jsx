import styles from './CostForm.module.scss'

const CostForm = (props) => {

  return(
    <>
      <form className={styles.form}  >
        <div className={styles.formGroup}>
          <label htmlFor="text">Название</label>
          <input type="text" placeholder='Название'/>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="">Сумма</label>
          <input 
            type="number" 
            placeholder='Сумма' 
            min={0.01} 
            step={0.01} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="">Сумма</label>
          <input type="date" placeholder='' min='2019-01-01' max='2022-12-31'/>
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