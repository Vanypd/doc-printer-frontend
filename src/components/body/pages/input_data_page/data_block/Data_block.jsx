import React from 'react'
import cl from './Data_block.module.css'

const Data_block = ({ tagName, children }) => {
    return (
        <section className={cl.section}>
            <div className={cl.tag}><span>{tagName}</span></div>
            {children}
        </section>
    )
}

export default Data_block