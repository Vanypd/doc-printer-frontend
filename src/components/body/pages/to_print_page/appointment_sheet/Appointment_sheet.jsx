import React, { useRef, useState } from 'react'
import cl from './Appointment_sheet.module.css'
import usePageConstructor from '../../../../../hooks/usePageConstructor'
import Page_layout from '../../page_layout/Page_layout'

const Appointment_sheet = () => {
  const [elements, setElements] = useState([
    <div className={[cl.mid_title, 'to_print_big_title_style'].join(' ')}>ГБУЗ ЯО «Клиническая онкологическая больница»</div>,

    <div className={cl.bottom_margin}>
      <div className={[cl.title, 'to_print_cambria_title_style'].join(' ')}>
        _дн. стац. Хирург._______отделение
      </div>
    </div>,


  ])
  const [pages, setPages] = useState([elements])
  const containerRef = useRef(null);

  usePageConstructor(cl, setPages, elements, containerRef)

  return (
    <Page_layout pages={pages} containerRef={containerRef} horizontal={true} />
  )
}

export default Appointment_sheet