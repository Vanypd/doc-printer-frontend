import React from 'react'
import cl from './Header_home_button.module.css'

const Header_home_button = ({ onClick, ...props }) => {
    return (
        <button className={cl.home_button}
            onClick={onClick}
        >
            <span className={cl.home_button_text}>на главную</span>
            <svg className={cl.home_button_icon} width="20" height="19" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9.10813V14.6713C1 15.8365 1 16.4195 1.24524 16.8646C1.46095 17.256 1.8049 17.574 2.22828 17.7734C2.7091 18 3.33886 18 4.59652 18H15.4035C16.6611 18 17.29 18 17.7708 17.7734C18.1942 17.574 18.5393 17.256 18.755 16.8646C19 16.4199 19 15.8379 19 14.675V9.10813C19 8.55233 18.9994 8.27428 18.9264 8.01557C18.8616 7.7864 18.7553 7.56948 18.6114 7.37347C18.449 7.15228 18.2233 6.96887 17.7708 6.60285L12.3708 2.23384C11.5309 1.55426 11.1109 1.21465 10.6383 1.08541C10.2218 0.971531 9.77793 0.971531 9.36145 1.08541C8.88918 1.21455 8.46977 1.55385 7.63115 2.2324L2.22937 6.60285C1.77697 6.96887 1.55129 7.15228 1.38891 7.37347C1.24501 7.56948 1.13787 7.7864 1.07309 8.01557C1 8.27428 1 8.55233 1 9.10813Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        </button>
    )
}

export default Header_home_button