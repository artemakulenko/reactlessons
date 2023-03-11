import React, { useState } from "react";
import { Costs } from "../Costs/Costs";
import { NewCost } from "../NewCost/NewCost";


const costs = [
  {
    date: new Date(2021, 2, 12),
    name: 'Холодильник',
    amount: 750,
    id: 'c1'
  },
  {
    date: new Date(2020, 4, 2),
    name: 'MacBook Pro',
    amount: 2000,
    id: 'c2'
  },
  {
    date: new Date(2021, 3, 5),
    name: 'Джинсы',
    amount: 80,
    id: 'c3'
  },
]


function App() {

  const [costsCopy, setCostsCopy] = useState(costs)

  const addCostHandler = (cost) => {
    setCostsCopy( prevCost => {
      return [...prevCost, cost]
    })
    console.log(cost)
  }





  return (
    <> 
      <NewCost
        onAddCost={addCostHandler}
      />

      <Costs 
        costsArr={costsCopy} 
        />
    </>
  );
}

export {App};
