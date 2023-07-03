import React, { useRef } from 'react'
import cl from './To_print_page.module.css'
import Initial_inspection_page from './initial_inspection_page/Initial_inspection_page'
import Submit_button from '../../UI/button/submit_button/Submit_button'
import ReactToPrint, { useReactToPrint } from 'react-to-print'

const To_print_page = ({ setPage, patientData }) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className={cl.body_container} >
      <div  className={cl.to_print_block}  >
        <div ref={componentRef} id='printContent' className={cl.print_area} >
        <Initial_inspection_page patientData={patientData} />
        <div className={cl.spacing}></div>
        <Initial_inspection_page patientData={patientData} />
        {/* <Initial_inspection_page patientData={patientData} /> */}
        {/* <Initial_inspection_page patientData={patientData} /> */}
        </div>
      </div>
      <div style={{ paddingTop: '100px' }}></div>

      <Submit_button className={cl.to_print_button} onClick={handlePrint}>Печать</Submit_button>

    </div>

  )
}

export default To_print_page