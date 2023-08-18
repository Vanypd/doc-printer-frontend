import React from 'react'
import cl from './Page_layout.module.css'

const Page_layout = ({ pages, containerRef, horizontal }) => {
    return (
        <div>
            {pages.map((page, index) => {
                return (
                    <div className={horizontal ? cl.div : null} key={index}>
                        <div className={horizontal ? [cl.A4_list_page_horizontal, cl.text_justify].join(' ') : [cl.A4_list_page, cl.text_justify].join(' ')}>
                            <div className={cl.page_container} ref={containerRef}>
                                {page.map((element, index) => (<div key={index}>{element}</div>))}
                            </div>
                        </div>
                        {index != (pages.length - 1) ? <div className={cl.spacing}></div> : null}
                    </div>
                )
            })}
        </div>
    )
}

export default Page_layout