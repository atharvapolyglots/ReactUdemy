import React, { useState } from 'react'
import './CourseInput.css'
import Button from '../../UI/Button/Button'
import styled from 'styled-components'

const formControl=styled.div

export default function CourseInput(props) {


const [value,setValue]=useState('')

const FormSubmitHandler=(event)=>{
    event.preventDefault();
    props.onAdd(value);
}

const InputChangeHandler=(event)=>{
    setValue(event.target.value)
}

    return (
        <form onSubmit={FormSubmitHandler}>
            <div className='container my-3'>
                <h4 className='label'>Course goal</h4>
                <input onChange={InputChangeHandler} className='mx-3' type='text' />
                <Button className='btn btn-primary' type='submit'>Add goal</Button>
            </div>
        </form>
    )
}

