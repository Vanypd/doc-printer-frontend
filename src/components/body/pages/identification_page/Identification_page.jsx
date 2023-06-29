import React, { useEffect } from 'react'
import cl from './Identification_page.module.css'
import Submit_button from '../../UI/button/submit_button/Submit_button'
import { useNavigate } from 'react-router-dom'
import Data_field from '../../UI/input/data_field/Data_field'

const Identification_page = ({ setPage, patientData, dataSetter}) => {
    const navigate = useNavigate()

    const changePage = (link, page) => {
        navigate(link);
        setPage(page)
    }

    return (
        <div className={cl.body_container}>
            <div className={cl.identificator}>
                <h2 className={cl.identificator_title}>Введите идентификатор пациента</h2>
                <Data_field data={patientData.patientСard.outpatientCard} setData={dataSetter.setOutpatientCard} id={'outpatientCard'} style={{margin: '0 auto', width: '700px', marginBottom: '60px', outlineWidth: '2px', outlineOffset: '1px'}}/>
                <Submit_button onClick={() => { changePage('/input_data', 'Input data') }}>Подтвердить</Submit_button>
            </div>
        </div>
    )
}

export default Identification_page