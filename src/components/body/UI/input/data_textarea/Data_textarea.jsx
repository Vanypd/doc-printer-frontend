import React, { useEffect } from 'react'
import cl from './Data_textarea.module.css'

const Data_textarea = ({id, data, setData, disabled, ...props}) => {

  const inputText = (e) => {
    // e.target.style.height = 'auto';
    console.log(e.target.scrollHeight)
    e.target.style.height = (e.target.scrollHeight) + 'px';
    setData(e.target.value)
  }

  return (
    <textarea
    {...props}
    onInput={inputText}
    className={disabled ? [cl.field, 'field_text_style', cl.field_disabled].join(' ') : [cl.field, 'field_text_style'].join(' ')}
    type='text'
    id={id}
    value={data}
    ></textarea>
  )
}

export default Data_textarea