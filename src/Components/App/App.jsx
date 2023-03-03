import React from "react";
import { Costs } from "../Costs/Costs";
import { NewCost } from "../NewCost/NewCost";

function App() {
  
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: 'Холодильник',
      amount: 750
    },
    {
      date: new Date(2020, 4, 2),
      description: 'MacBook Pro',
      amount: 2000
    },
    {
      date: new Date(2021, 3, 5),
      description: 'Джинсы',
      amount: 80
    },
  ]

  return (
    <> 
      <NewCost/>
      <Costs costsArr={costs} />
    </>
  );
}

export {App};
