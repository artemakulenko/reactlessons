const CostDate = (props) => {
  const month = props.date.toLocaleString('ru-RU', {
    month: '2-digit'
  })

  const year = props.date.getFullYear()
  
  const day = props.date.toLocaleString('ru-RU', {
    day: '2-digit'
  })


  return(
    <>
      {year}.{month}.{day}
    </>
  )
}

export {CostDate}