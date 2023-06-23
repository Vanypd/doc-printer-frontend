import React, { useEffect } from 'react'
import cl from './Data_field.module.css'

const Data_field = ({id, data, setData, disabled, ...props}) => {

  return (
    <input
    {...props}
    className={disabled ? [cl.field, 'field_text_style', cl.field_disabled].join(' ') : [cl.field, 'field_text_style'].join(' ')}
    type='text'
    id={id}
    defaultValue={213}
    // value={data}
    // onChange={e => setData(e.target.value)}
    ></input>
  )
}

export default Data_field