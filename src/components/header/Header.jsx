import React, { useState } from 'react'
import cl from './Header.module.css'
import Header_container from './header_container/Header_container'

const Header = ({currentPage, setCurrenPage}) => {
  

  return (
    <header className={cl.header}>
      <Header_container page={currentPage} setPage={setCurrenPage}/>
    </header>
  )
}

export default Header