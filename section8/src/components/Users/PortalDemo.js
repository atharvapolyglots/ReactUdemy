import React from 'react'
import ReactDOM from 'react-dom'

export default function PortalDemo() {
  return ReactDOM.createPortal (
    //   return(
      <h4>
          This is portal component
      </h4>
      ,document.getElementById('portal-root')
    
  )
}
