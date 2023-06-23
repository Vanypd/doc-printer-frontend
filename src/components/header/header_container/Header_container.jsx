import React, { useEffect } from 'react'
import cl from './Header_container.module.css'
import Header_back_button from './header_back_button/Header_back_button'
import Header_home_button from './header_home_button/Header_home_button'
import { useLocation, useNavigate } from 'react-router-dom'

const Header_container = ({ page, setPage }) => {

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (location.pathname == '/') { setPage('Identification') }
        if (location.pathname == '/input_data') { setPage('Input data') }
        if (location.pathname == '/to_print') { setPage('To print') }
    }, [])

    const changePage = (link, page) => {
        navigate(link);
        setPage(page)
    }

    const headerToPage = () => {
        switch (page) {
            case 'Identification': return (
                <div className={cl.header_container}>
                    <div className={cl.header_title}>
                        <h2 className={cl.header_title_text}>Идентификация</h2>
                    </div>
                </div>

            )

            case 'Input data': return (
                <div className={cl.header_container}>
                    <Header_back_button onClick={() => changePage('/', 'Identification')} />
                    <div className={cl.header_title}>
                        <h2 className={cl.header_title_text}>Входные данные</h2>
                    </div>
                    <Header_home_button onClick={() => changePage('/', 'Identification')} />
                </div>
            )

            case 'To print': return (
                <div className={cl.header_container}>
                    <Header_back_button onClick={() => changePage('/input_data', 'Input data')} />
                    <div className={cl.header_title}>
                        <h2 className={cl.header_title_text}>Документы на печать</h2>
                    </div>
                    <Header_home_button onClick={() => changePage('/', 'Identification')} />
                </div>
            )
        }
    }

    return (
        headerToPage()
    )
}

export default Header_container