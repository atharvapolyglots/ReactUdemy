import React, { useState } from 'react'
// ./ means same level file or folder
import Expenseitem from './comonents/Expense/Expenseitem'
import ExpenseDate from './comonents/Expense/ExpenseDate'
import card from './comonents/UI/card'
import NewExpense from './comonents/NewExpense/NewExpense'
import ExpenseForm from './comonents/NewExpense/ExpenseForm'
import Expense from './comonents/Expense/Expense'
import Chart from './comonents/Chart/Chart'
import ChartBar from './comonents/Chart/ChartBar'
import ExpenseChart from './comonents/Expense/ExpenseChart'


// const ExampleExpenses=
const expensesObj = [{
  id: 1,
  title: 'expense item1',
  amount: 5000,
  date: new Date(2021, 7, 15)
}, {
  id: 2,
  title: 'expense item2',
  amount: 5500,
  date: new Date(2021, 8, 15)
}, {
  id: 3,
  title: 'expense item3',
  amount: 5555,
  date: new Date(2021, 7, 16)
}]

export default function App() {

 

 const[expenses,SetExpenses]= useState(expensesObj)

 const addExpenseHandler=expense=>{
   SetExpenses([expense, ...expenses])
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expense items={expenses}></Expense>
    </div>


    // IF WE NOT IMPORT REACT THEN NEED TO WRITE THIS COMPLECATED PROGRAM
    // React.createElement(
    //   div,{},React.createElement(
    //     h2,{},'This is without JSX'),React.createElement(
    //       Expenseitem,items={items}))

    //       THIS IS BASIC REACT JSX CODE, WHICH NEED TO WRITE IF WE IMPORT REACT
    //     <div>
    //       <h2>This is JSX</h2>
    //       <Expenseitem item={items} />
    //     </div>
  )
}
