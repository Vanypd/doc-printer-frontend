import React from 'react'
import cl from './Data_block.module.css'

const Data_block = ({ tagName, children, ...props}) => {
    return (
        <section className={cl.section} {...props}>
            <div className={cl.tag}><span>{tagName}</span></div>
            {children}
        </section>
    )
}

export default Data_block