import React, { useEffect } from 'react'
import cl from './Data_textarea.module.css'

const Data_textarea = ({id, data, setData, disabled, ...props}) => {

  const inputText = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = (e.target.scrollHeight) + 'px';
  }

  return (
    <textarea
    {...props}
    onInput={inputText}
    className={disabled ? [cl.field, 'field_text_style', cl.field_disabled].join(' ') : [cl.field, 'field_text_style'].join(' ')}
    type='text'
    id={id}
    value={data}
    // onChange={e => setData(e.target.value)}
    ></textarea>
  )
}

export default Data_textarea