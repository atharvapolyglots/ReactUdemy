import React, { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm() {

    // SETTING MULTIPLE STATES
    const[EnteredTitle,SetEnteredTitle]=useState('')
    const [EnteredAmount,SetEnteredAmount]=useState('')
    const [EnteredDate,SetEnteredDate]=useState('')


    const titlechangehandler=(event)=>{
        console.log('title change')

        // THIS WILL NOT WORK IN REACT
        // console.log(document.getElementsByClassName('inp').value)

        console.log(event.target.value)
        SetEnteredTitle(event.target.value)

    }


    const amountchangehandler=(event)=>{
        SetEnteredAmount(event.target.value)
    }

    const datechangehandler=(event)=>{
        SetEnteredDate(event.target.value)
    }

    const submitHandler=(event)=>{
        event.preventDefault()

        const expenseData={
            title: EnteredTitle,
            amount: EnteredAmount,
            date: new Date(EnteredDate)
        }
        console.log(expenseData)
        SetEnteredTitle('')
        SetEnteredAmount('')
        SetEnteredDate('')
    }



    //SETTING SINGLE STATE USING OBJECT AND SPREAD OPERATOR, THIS IS AN ALTERNATIVE METHOD OF MULTIPLE STATES
    // const[UserInput,SetUserInput]=useState({
    //     title: '',
    //     amount:'',
    //     date:''
    // })

    // const titlechangehandler=(event)=>{
    //     SetUserInput({...UserInput,
    //         title:event.target.value})
    // }

    //THIS IS ANOTHER ALTERNATIVE METHOD INSTEAD OF OBJECT AND SPREAD OPERATOR METHOD,
    // THIS IS TO BE USED WHEN STATE UPDATE DEPENDS ON PREVIOUS STATE THEN TO GET LATEST UPDATED OBJECT WE NEED TO USE THIS METHOD
    //IN ALL THREE METHODS BEST METHOD IS FIRST ONE
    // setUserInput((prevState)=>{
    //     ...prevState,title: event.target.value
    // })


    // const amountchangehandler=(event)=>{
    //     SetUserInput({...UserInput,
    //         amount:event.target.value})
    // }

    // const datechangehandler=(event)=>{
    //     SetUserInput({...UserInput,
    //         date:event.target.value})
    // }



    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense-controls'>
                <div className='new-expense-control'>
                    <label>Title</label>
                    <input className='inp' type='text' value={EnteredTitle} onChange={titlechangehandler}></input>
                </div>
                <div className='new-expense-control'>
                    <label>Amount</label>
                    <input type='number' min={1000} value={EnteredAmount} onChange={amountchangehandler}></input>
                </div>
                <div className='new-expense-control'>
                    <label>Date</label>
                    <input type='date' value={EnteredDate} onChange={datechangehandler}></input>
                </div>
                <div className='new-expense-actions'>
                    <button type='submit'>Add expense</button>
                </div>
            </div>

        </form>
    )
}
