import React from 'react'
import style from './Button.module.css'

export default function Button(props) {
  return (
    <div>
     <button type={props.type || 'button'} className={style.button} onClick={props.onClick}>{props.children}</button>
    </div>
  )
}
