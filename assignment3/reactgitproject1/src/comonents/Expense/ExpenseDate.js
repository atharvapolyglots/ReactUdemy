import React from 'react'
import './ExpenseDate.css'

// CAN USE ARROW FUNCTION AS WELL INSTEAD OF NORMAL FUNCTION
const ExpenseDate=(prop)=> {


  const day = prop.expensedate.toLocaleString('en-US', { day: '2-digit' })
  const month = prop.expensedate.toLocaleString('en-US', { month: 'short' })
  const year = prop.expensedate.getFullYear()

  return (
    <div>
      <div className='expense-date'>
        <h6>{day}</h6><h6>{month}</h6><h6>{year}</h6>
      </div>
    </div>
  )
}


export default ExpenseDate;
