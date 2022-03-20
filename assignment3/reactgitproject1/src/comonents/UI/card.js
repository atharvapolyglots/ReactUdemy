import React from 'react'
import './card.css'

export default function card(prop) {

    const classes= 'card ' + prop.className

  return (
    // WE CANNOT WRITE CONTENT INSIDE CUSTOM COMPONENT, HENCE NEED TO USE PROP.CHILDREN
    <div className='classes'>
      {prop.children}
    </div>
  )
}
