import React from 'react'
import cl from './Input_data_page.module.css'
import Patient_card from './sections/patient_card/Patient_card'
import Data_block from './data_block/Data_block'
import Initial_inspection from './sections/Initial_inspection/Initial_inspection'
import Diares from './sections/diaries/Diares'
import Summary from './sections/summary/Summary'

const Input_data_page = ({ setPage, patientData, dataSetter }) => {
  return (
    <div className={cl.body_container}>
      <Data_block tagName={'Карточка пациента'}><Patient_card patientData={patientData} dataSetter={dataSetter} /></Data_block>
      <Data_block tagName={'Первичный осмотр'}><Initial_inspection patientData={patientData} dataSetter={dataSetter} /></Data_block>
      <Data_block tagName={'Дневники'}><Diares patientData={patientData} dataSetter={dataSetter} /></Data_block>
      <Data_block tagName={'Выписка'}><Summary patientData={patientData} dataSetter={dataSetter} /></Data_block>

    </div>

  )
}

export default Input_data_page