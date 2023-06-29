import React, { useEffect } from 'react'
import cl from './Analyzes.module.css'
import Data_selector from '../../../../../UI/selector/data_selector/Data_selector'
import Block_division from '../../../block_division/Block_division'
import Data_field from '../../../../../UI/input/data_field/Data_field'
import Analyzes_field from './analyzes_field/Analyzes_field'
import Data_textarea from '../../../../../UI/input/data_textarea/Data_textarea'

const Analizes = ({ itemKey, type, data, setData }) => {

  const returnCompSelector = () => {
    if (type == 1) {
      return (
        <div className={cl.analyzes}>
          <div className={cl.analyzes_left}>
            <Block_division>
              <Data_selector
                value={data[itemKey].selectorValue}
                setValue={e => setData(itemKey, type, 'selectorValue', e)}
                options={['Общий клинический анализ крови', 'Биохимический анализ крови', 'Общий клинический анализ мочи']} />
            </Block_division>

            <Block_division style={{ marginBottom: '0' }}>
              <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '60px' }}>Дата:</div>
              <Data_field onInput={e => setData(itemKey, type, 'date', e.target.value)} data={data[itemKey].date} style={{ width: '130px', textAlign: 'center' }} />
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
          <div className={cl.analyzes_left}>
            <Block_division>
              <Data_selector
                value={data[itemKey].selectorValue}
                setValue={e => setData(itemKey, type, 'selectorValue', e)}
                options={['Общий клинический анализ крови', 'Биохимический анализ крови', 'Общий клинический анализ мочи']} />
            </Block_division>

            <Block_division style={{ marginBottom: '0' }}>
              <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '60px' }}>Дата:</div>
              <Data_field onInput={e => setData(itemKey, type, 'date', e.target.value)} data={data[itemKey].date} style={{ width: '130px', textAlign: 'center' }} />
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
          <div className={cl.analyzes_left}>
            <Block_division>
              <Data_selector
                value={data[itemKey].selectorValue}
                setValue={e => setData(itemKey, type, 'selectorValue', e)}
                options={['Общий клинический анализ крови', 'Биохимический анализ крови', 'Общий клинический анализ мочи']} />
            </Block_division>

            <Block_division style={{ marginBottom: '0' }}>
              <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '60px' }}>Дата:</div>
              <Data_field onInput={e => setData(itemKey, type, 'date', e.target.value)} data={data[itemKey].date} style={{ width: '130px', textAlign: 'center' }} />
            </Block_division>
          </div>

          <div className={cl.analyzes_right}>
            <div className={cl.analyzes_fields}>
              <Data_textarea fieldData={e => setData(itemKey, type, 'comment', e.target.value)} data={data[itemKey].comment} />
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