import React from 'react'
import cl from './Block_division.module.css'

const Block_division = ({children, ...props}) => {
  return (
    <div className={cl.division} {...props}>{children}</div>
  )
}

export default Block_division