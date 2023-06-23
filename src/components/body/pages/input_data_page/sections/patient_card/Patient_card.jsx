import React from 'react'
import cl from './Patient_card.module.css'
import Data_field from '../../../../UI/input/data_field/Data_field'
import Block_division from '../../block_division/Block_division'
import Data_selector from '../../../../UI/selector/data_selector/Data_selector'

const Patient_card = () => {
  return (
    <section className={cl.data}>
      <Block_division>
        <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '200px', marginRight: '30px' }}>Амбулаторная карта:</div>
        <Data_field disabled={1} data={123123123} style={{ width: '150px', textAlign: 'center' }} />
      </Block_division>
      <Block_division>
        <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '150px' }}>ФИО:</div>
        <Data_field data={123} />
      </Block_division>
      <Block_division style={{ justifyContent: 'space-between' }} >
        <div className={cl.flex_wrapper}>
          <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '150px' }}>Дата рождения:</div>
          <Data_field data={123} style={{ width: '150px', textAlign: 'center' }} />
        </div>
        <div className={cl.flex_wrapper}>
          <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '80px' }}>СНИЛС:</div>
          <Data_field data={123} style={{ width: '150px', textAlign: 'center' }} />
        </div>
        <div className={cl.flex_wrapper}>
          <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '50px' }}>Пол:</div>
          <Data_field data={123} style={{ width: '150px', textAlign: 'center' }} />
        </div>
        <div className={cl.flex_wrapper}>
          <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '130px' }}>Группа крови:</div>
          <Data_selector options={['Нет', 'I', 'II', 'III']} selectorStyle={{width: '150px'}} defaulLable={'Не выбрано'}/>
        </div>
      </Block_division>
      <Block_division>
        <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '150px' }}>Инвалидность:</div>
        <Data_selector options={['Нет', 'I', 'II', 'III']} selectorStyle={{width: '150px'}} defaulLable={'Не выбрано'}/>
      </Block_division>
    </section>
  )
}

export default Patient_card