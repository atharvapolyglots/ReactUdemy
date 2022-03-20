import React from 'react'

export default function App() {

//THIS IS JAVASCRIPT IMPERATIVE APPROACH
const ele=document.createElement('p').innerText='this is para'
console.log(ele) 

//------------------------------------------------------

const date=new Date(2021,7,15)
const text='car Ins.'
const number=5000



  return (
    <div>

      {/* THIS IS JAVASCRIPT NON IMPERATIVE APPROACH */}
      <p>{console.log('this is para')}</p>

      {/*------------------------------------------------------ */}

      {/*new Date() RETURNS OBJECT, HENCE TO PRINT IT ON WEBPAGE USE 'toISOString' TO CONVERT OBJECT DATA INTO STRING */}
      <p>expense item</p>
      <p>{text}</p>
      <p>{date.toISOString()}</p>
      <p>{number}</p>

      {/*------------------------------------------------------ */}


    </div>
  )
}

