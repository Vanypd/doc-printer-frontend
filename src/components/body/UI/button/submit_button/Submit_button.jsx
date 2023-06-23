import React from 'react'
import cl from './Submit_button.module.css'

const Submit_button = ({onClick, children, ...props}) => {
  return (
    <button
    className={cl.submit_button}
    onClick={onClick}
    ><span>{children}</span></button>
  )
}

export default Submit_button