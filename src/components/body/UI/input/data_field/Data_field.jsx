import React, { useEffect } from 'react'
import cl from './Data_field.module.css'

const Data_field = ({data, setData, disabled, ...props}) => {

  return (
    <input
    {...props}
    className={disabled ? [cl.field, 'field_text_style', cl.field_disabled].join(' ') : [cl.field, 'field_text_style'].join(' ')}
    type='text'
    onInput={e => {setData(e.target.value)}}
    value={data}
    ></input>
  )
}

export default Data_field