import React from 'react'
import cl from './Patient_card.module.css'
import Data_field from '../../../../UI/input/data_field/Data_field'
import Block_division from '../../block_division/Block_division'
import Data_selector from '../../../../UI/selector/data_selector/Data_selector'

const Patient_card = ({ patientData, dataSetter }) => {

  const selectorValueChecker = (value) => {

    dataSetter.setDisability(value)

    if (value == 1) { dataSetter.setWorkAbility('Восстановлена полностью') }
    else { dataSetter.setWorkAbility('Стойко утрачена') }
  }

  return (
    <section className={cl.data}>
      <Block_division>
        <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '200px', marginRight: '30px' }}>Амбулаторная карта:</div>
        <Data_field disabled={1} data={patientData.patientСard.outpatientCard} style={{ width: '150px', textAlign: 'center' }} />
      </Block_division>
      <Block_division>
        <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '150px' }}>ФИО:</div>
        <Data_field data={patientData.patientСard.fullName} setData={e => dataSetter.setFullName(e)} />
      </Block_division>
      <Block_division style={{ justifyContent: 'space-between' }} >
        <div className={cl.flex_wrapper}>
          <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '150px' }}>Дата рождения:</div>
          <Data_field data={patientData.patientСard.dateOfBirth} setData={e => dataSetter.setDateOfBirth(e)} style={{ width: '150px', textAlign: 'center' }} />
        </div>
        <div className={cl.flex_wrapper}>
          <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '80px' }}>СНИЛС:</div>
          <Data_field data={patientData.patientСard.snils} setData={e => dataSetter.setSnils(e)} style={{ width: '150px', textAlign: 'center' }} />
        </div>
        <div className={cl.flex_wrapper}>
          <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '50px' }}>Пол:</div>
          <Data_selector value={patientData.patientСard.gender} setValue={dataSetter.setGender} options={['Мужской', 'Женский']} selectorStyle={{ width: '150px' }} defaultLable={'Не выбрано'} />
        </div>
        <div className={cl.flex_wrapper}>
          <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '130px' }}>Группа крови:</div>
          <Data_selector value={patientData.patientСard.bloodType} setValue={dataSetter.setBloodType} options={['0 Rh (-)', '0 Rh (+)', 'A Rh (-)', 'A Rh (+)', 'B Rh (-)', 'B Rh (+)', 'AB Rh (-)', 'AB Rh (+)']} selectorStyle={{ width: '150px' }} defaultLable={'Не выбрано'} />
        </div>
      </Block_division>
      <Block_division>
        <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '150px' }}>Инвалидность:</div>
        <Data_selector value={patientData.patientСard.disability} setValue={selectorValueChecker} options={['Нет', 'I', 'II', 'III']} selectorStyle={{ width: '150px' }} defaultLable={'Не выбрано'} />
      </Block_division>
    </section>
  )
}

export default Patient_card