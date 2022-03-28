import React, { useState } from 'react'
import Card from '../UI/Card'
import style from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModel from '../UI/ErrorModel'

export default function AddUser(props) {

    const [error, setError] = useState()

    const formSubmitHandler = (event) => {

        event.preventDefault()

        if (userName.trim().length === 0) {
            setError({
                title: 'An error occured',
                message: 'Please enter valid username'
            })
            return;
        }
        if (age.trim().length === 0 || +age < 1) {
            setError({
                title: 'An error occured',
                message: 'Please enter valid age'
            })
            return;
        }

        props.onAddUser(userName, age)

        console.log(userName, age)

        setUserName('')
        setAge('')



    }

    const [userName, setUserName] = useState('')
    const usernameHandler = (event) => {
        setUserName(event.target.value)
    }

    const [age, setAge] = useState('')
    const ageHandler = (event) => {
        setAge(event.target.value)
    }

    const errorHandler=()=>{
        setError(null)
    }

    return (
        <div>
            {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={style.input}>
                <div>
                    <form onSubmit={formSubmitHandler}>
                        <label htmlFor='username'>Username</label>
                        <input id='username' type='text' onChange={usernameHandler} value={userName} />
                        <label htmlFor='age'>Age</label>
                        <input id='age' type='number' onChange={ageHandler} value={age} />
                        <Button type='submit'>Add User</Button>
                    </form>
                </div>
            </Card>
        </div>
    )
}
