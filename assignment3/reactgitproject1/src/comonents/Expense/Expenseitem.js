// WE NEED TO IMPORT USESTATE FUNCTION FROM REACT
import React, { useState } from 'react'
// ./ means same level file or folder
import ExpenseDate from './ExpenseDate'
import './Expenseitem.css'
// ../ means need to go one level up then into another file or folder
import Card from '../UI/card'

export default function Expenseitem(prop) {


    // CAN USE USESTATE FUNCTION OR ANY HOOKS ONLY INSIDE COMPONENT FUNCTION,
    // NOT OUTSIDE IT OR NOT INSIDE ANY OTHER FUNCTION OR NESTED FUNCTION
    //TO MAKE CHANGES IN USER INTERFACE WE NEED TO USE STATES
    const [titleNew,setTitle]=useState(prop.expensetitle)
    console.log('expense item evaluated by react')

    // FUNCTION FOR ONCLICK EVENT
    function click(){
        console.log('clicked')

        // ONCLICK CHANGE TITLE BUTTON UPDATE NOT HAPPEN WE NEED TO USE STATE
        // BECAUSE OF CLICK Event, VARIABLE VALUE CHANGE, ETC WILL NOT LET WHOLE EXPENSEITEM COMPONENT TO RUN AGAIN
        // WE NEED TO TELL REACT TO RUN THIS AGAIN WE USE STATES

         title='updated'

        //  DUE TO SETTITLE FUNCTION IT WILL NOT ONLY ASSIGN UPDATED VALUE TO VARIABLE BUT ALSO EXECUTE COMPONENT FUNCTION AGAIN
        setTitle('updated')
    }


    let title=prop.expensetitle

    return (
        // WE CANNOT WRITE CONTENT INSIDE CUSTOM COMPONENT, HENCE NEED TO USE PROP.CHILDREN
        <Card className='container'>
            <div className='rowbig'>
                {/* SPILLITING COMPONENTS INTO MULTIPLE COMPONENTS */}
               <ExpenseDate expensedate={prop.expensedate}/>
                <h6>Id - {prop.expenseid}</h6>
                <h6>{prop.expensetitle}</h6>
                <h3>{prop.expenseamount}</h3>

                 {/* ONCLICK EVENT */}

                 {/* ONCLICK CHANGE TITLE BUTTON UPDATE NOT HAPPEN  */}
                <button onClick={click}>Change title</button>

                <h2>{titleNew}</h2>

                <br />
            </div>
        </Card>
    )
}
