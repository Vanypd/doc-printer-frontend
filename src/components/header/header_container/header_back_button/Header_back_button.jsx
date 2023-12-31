import React from 'react'
import cl from './Header_back_button.module.css'

const Back_button = ({ onClick, ...props }) => {
  return (
    <button className={cl.back_button}
      onClick={onClick}
    >
      <svg className={cl.back_button_icon} width="10" height="16" viewBox="0 0 9 18" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.50669 17.9999C7.31458 18.0006 7.12476 17.9582 6.95118 17.8759C6.77761 17.7935 6.62469 17.6734 6.50366 17.5242L0.292537 9.81069C0.103398 9.58065 0 9.29211 0 8.99433C0 8.69656 0.103398 8.40802 0.292537 8.17798L6.72227 0.464424C6.94054 0.201884 7.2542 0.0367824 7.59423 0.00543999C7.93427 -0.0259024 8.27284 0.0790816 8.53545 0.297296C8.79806 0.515511 8.96321 0.829082 8.99456 1.16903C9.02591 1.50897 8.9209 1.84744 8.70262 2.10998L2.95444 9.00076L8.50973 15.8915C8.66698 16.0802 8.76687 16.31 8.79758 16.5537C8.82828 16.7974 8.78853 17.0448 8.68301 17.2666C8.57749 17.4884 8.41062 17.6753 8.20216 17.8053C7.99369 17.9352 7.75235 18.0028 7.50669 17.9999Z" fill="white" />
      </svg>
      <span className={cl.back_button_text}>назад</span>
    </button>
  )
}

export default Back_button