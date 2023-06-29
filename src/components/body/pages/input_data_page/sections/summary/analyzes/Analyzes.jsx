import React, { useEffect } from 'react'
import cl from './Analyzes.module.css'
import Data_selector from '../../../../../UI/selector/data_selector/Data_selector'
import Block_division from '../../../block_division/Block_division'
import Data_field from '../../../../../UI/input/data_field/Data_field'
import Analyzes_field from './analyzes_field/Analyzes_field'
import Data_textarea from '../../../../../UI/input/data_textarea/Data_textarea'

const Analizes = ({ itemKey, type, data, setData, arraySetter }) => {

  const deleteAnalyze = () => {
    let array = [...data];
    array.splice(itemKey, 1);

    for (let i = 0; i < array.length; i++) {
      array[i].itemKey = i
    }

    arraySetter(array)
  }

  const returnCompSelector = () => {
    if (type == 1) {
      return (
        <div className={cl.analyzes}>
          <div className={cl.close_button} onClick={deleteAnalyze}>
            <svg width="30px" height="30px" viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg" ><path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" /></svg>
          </div>
          <div className={cl.analyzes_left}>
            <Block_division>
              <Data_selector
                value={data[itemKey].selectorValue}
                setValue={e => setData(itemKey, type, 'selectorValue', e)}
                options={['Общий клинический анализ крови', 'Биохимический анализ крови', 'Общий клинический анализ мочи']} />
            </Block_division>

            <Block_division style={{ marginBottom: '0' }}>
              <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '60px' }}>Дата:</div>
              <Data_field setData={e => setData(itemKey, type, 'date', e)} data={data[itemKey].date} style={{ width: '130px', textAlign: 'center' }} />
            </Block_division>
          </div>

          <div className={cl.analyzes_right}>
            <div className={cl.analyzes_fields}>
              <Analyzes_field fieldData={'rbc'} data={data[itemKey].rbc} setData={setData} before={'эритроциты'} after={'x10¹² ед/л'} itemKey={itemKey} type={type} />
              <Analyzes_field fieldData={'wbc'} data={data[itemKey].wbc} setData={setData} before={'лейкоциты'} after={'x10⁹ ед/л'} itemKey={itemKey} type={type} />
              <Analyzes_field fieldData={'plt'} data={data[itemKey].plt} setData={setData} before={'гемоглобин'} after={'г/л'} itemKey={itemKey} type={type} />
              <Analyzes_field fieldData={'hgb'} data={data[itemKey].hgb} setData={setData} before={'тромбоциты'} after={'x10⁹ ед/л'} itemKey={itemKey} type={type} />
            </div>
          </div>
        </div>
      )
    }

    if (type == 2) {
      return (
        <div className={cl.analyzes}>
          <div className={cl.close_button} onClick={deleteAnalyze}>
            <svg width="30px" height="30px" viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg" ><path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" /></svg>
          </div>
          <div className={cl.analyzes_left}>
            <Block_division>
              <Data_selector
                value={data[itemKey].selectorValue}
                setValue={e => setData(itemKey, type, 'selectorValue', e)}
                options={['Общий клинический анализ крови', 'Биохимический анализ крови', 'Общий клинический анализ мочи']} />
            </Block_division>

            <Block_division style={{ marginBottom: '0' }}>
              <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '60px' }}>Дата:</div>
              <Data_field setData={e => setData(itemKey, type, 'date', e)} data={data[itemKey].date} style={{ width: '130px', textAlign: 'center' }} />
            </Block_division>
          </div>

          <div className={cl.analyzes_right}>
            <div className={cl.analyzes_fields}>
              <Analyzes_field fieldData={'alt'} data={data[itemKey].alt} setData={setData} before={'АЛТ'} after={'ед/л'} itemKey={itemKey} type={type} />
              <Analyzes_field fieldData={'ast'} data={data[itemKey].ast} setData={setData} before={'АСТ'} after={'ед/л'} itemKey={itemKey} type={type} />
              <Analyzes_field fieldData={'tb'} data={data[itemKey].tb} setData={setData} before={'билирубин'} after={'мкмоль/л'} itemKey={itemKey} type={type} />
              <Analyzes_field fieldData={'gluc'} data={data[itemKey].gluc} setData={setData} before={'глюкоза'} after={'ммоль/л'} itemKey={itemKey} type={type} />
              <Analyzes_field fieldData={'cre'} data={data[itemKey].cre} setData={setData} before={'креатинин'} after={'мкмоль/л'} itemKey={itemKey} type={type} />
              <Analyzes_field fieldData={'ua'} data={data[itemKey].ua} setData={setData} before={'мочевина'} after={'ммоль/л'} itemKey={itemKey} type={type} />
            </div>
          </div>
        </div>
      )
    }

    if (type == 3) {
      return (
        <div className={cl.analyzes}>
          <div className={cl.close_button} onClick={deleteAnalyze}>
            <svg width="30px" height="30px" viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg" ><path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" /></svg>
          </div>
          <div className={cl.analyzes_left}>
            <Block_division>
              <Data_selector
                value={data[itemKey].selectorValue}
                setValue={e => setData(itemKey, type, 'selectorValue', e)}
                options={['Общий клинический анализ крови', 'Биохимический анализ крови', 'Общий клинический анализ мочи']} />
            </Block_division>

            <Block_division style={{ marginBottom: '0' }}>
              <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '60px' }}>Дата:</div>
              <Data_field setData={e => setData(itemKey, type, 'date', e)} data={data[itemKey].date} style={{ width: '130px', textAlign: 'center' }} />
            </Block_division>
          </div>

          <div className={cl.analyzes_right}>
            <div className={cl.analyzes_fields}>
              <Data_textarea setData={e => setData(itemKey, type, 'comment', e)} data={data[itemKey].comment} />
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div className={cl.isolation_block} style={{ marginBottom: '20px' }}>
      <div className={cl.isolation}>
        {returnCompSelector()}
      </div>
      <div className={cl.isolation_recolor}></div>
    </div>

  )
}

export default Analizes