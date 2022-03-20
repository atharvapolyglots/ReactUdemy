import React from 'react'
import Expenseitem from './Expenseitem'

export default function Expense(prop) {
    return (
        <div>

            {/* THIS IS ALTERNATIVE METHOD OF WRITTING COMPONENTS USING MAP FUNCTION */}
            {prop.items.map(expense => <Expenseitem
                expenseid={expense.id}
                expensetitle={expense.title}
                expenseamount={expense.amount}
                expensedate={expense.date}
            />)}


            {/* THIS IS BASIC METHOD OF WRITING EACH COMPONENT */}
            {/*          
      <Expenseitem expenseid={prop.items[0].id} expensetitle={prop.items[0].title} expenseamount={prop.items[0].amount} expensedate={prop.items[0].date} />
      <Expenseitem expenseid={prop.items[1].id} expensetitle={prop.items[1].title} expenseamount={prop.items[1].amount} expensedate={prop.items[1].date} />
      <Expenseitem expenseid={prop.items[2].id} expensetitle={prop.items[2].title} expenseamount={prop.items[2].amount} expensedate={prop.items[2].date} />
       */}
        </div>
    )
}
