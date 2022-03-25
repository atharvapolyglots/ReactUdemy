import React from 'react'
import Button from './Button'
import Card from './Card'
import style from './ErrorModel.module.css'

export default function ErrorModel(props) {
  return (
    <Card className={style.model}>
        <header className={style.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={style.content}>
            <p>{props.message}</p>
        </div>
        <footer className={style.actions}>
            <Button onClick={props.onConfirm}>ok</Button>
        </footer>
    </Card>
  )
}
