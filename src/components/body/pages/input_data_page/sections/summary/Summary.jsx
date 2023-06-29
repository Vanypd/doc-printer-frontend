import React, { useEffect, useMemo, useState } from 'react'
import cl from './Summary.module.css'
import Block_division from '../../block_division/Block_division'
import Data_field from '../../../../UI/input/data_field/Data_field'
import Data_textarea from '../../../../UI/input/data_textarea/Data_textarea'
import Data_selector from '../../../../UI/selector/data_selector/Data_selector'
import Analyzes from './analyzes/Analyzes'

const Summary = () => {

    const [clinicalAnalyzes, setClinicalAnalyzes] = useState([{ itemKey: 0, selectorValue: 1, date: '', }, { itemKey: 1, selectorValue: 2, date: '', }, { itemKey: 2, selectorValue: 3, date: '', }])

    const arrayDataChanger = (itemKey, type, fieldData, event) => {
        if (fieldData == 'selectorValue') {
            let array = [...clinicalAnalyzes]
            array[itemKey] = {
                itemKey: itemKey,
                selectorValue: event,
                date: '', 
            }
            setClinicalAnalyzes(array)
        }
        else {
            let array = [...clinicalAnalyzes]
            array[itemKey][fieldData] = event
            setClinicalAnalyzes(array)
        }
    }

    useMemo(() => {

    }, [])

    return (
        <section className={cl.data}>
            <Block_division>
                <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '175px' }}>История болезни №</div>
                <Data_field data={123} style={{ width: '200px', textAlign: 'center' }} />
            </Block_division>

            <Block_division>
                <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '175px' }}>Дата выписки:</div>
                <Data_field data={123} style={{ width: '200px', textAlign: 'center' }} />
            </Block_division>

            <Block_division>
                <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '175px' }}>Трудоспособность:</div>
                <Data_field data={123} />
            </Block_division>

            <Block_division>
                <div className={[cl.center_title, 'title_text_style'].join(' ')}>Инструментальные методы обследования</div>
            </Block_division>

            <Block_division>
                <Data_textarea style={{ minHeight: '300px' }} />
            </Block_division>

            <Block_division>
                <div className={[cl.center_title, 'title_text_style'].join(' ')}>Общее обследование</div>
            </Block_division>

            {clinicalAnalyzes.map(analyze =>
                <Analyzes key={analyze.itemKey} itemKey={analyze.itemKey} type={analyze.selectorValue} data={clinicalAnalyzes} setData={arrayDataChanger} />
            )}

            <div className={cl.analyze_adder_block}>
                <button className={cl.analyze_adder_button}>
                    <div>
                        <svg className={cl.analyze_adder_icon} width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="plus_circle-[#1427]" fillRule="evenodd" clipRule="evenodd" d="M43.4 31C43.4 32.7112 42.0112 34.1 40.3 34.1H34.1V40.3C34.1 42.0112 32.7112 43.4 31 43.4C29.2888 43.4 27.9 42.0112 27.9 40.3V34.1H21.7C19.9888 34.1 18.6 32.7112 18.6 31C18.6 29.2888 19.9888 27.9 21.7 27.9H27.9V21.7C27.9 19.9888 29.2888 18.6 31 18.6C32.7112 18.6 34.1 19.9888 34.1 21.7V27.9H40.3C42.0112 27.9 43.4 29.2888 43.4 31ZM31 55.8C17.3259 55.8 6.2 44.6741 6.2 31C6.2 17.3259 17.3259 6.2 31 6.2C44.6741 6.2 55.8 17.3259 55.8 31C55.8 44.6741 44.6741 55.8 31 55.8ZM31 0C13.8787 0 0 13.8787 0 31C0 48.1213 13.8787 62 31 62C48.1213 62 62 48.1213 62 31C62 13.8787 48.1213 0 31 0Z" />
                        </svg>

                    </div>
                </button>
            </div>

            <Block_division>
                <div className={[cl.center_title, 'title_text_style'].join(' ')}>Рекомендации</div>
            </Block_division>

            <Block_division>
                <Data_textarea style={{ minHeight: '300px' }} />
            </Block_division>
        </section>
    )
}

export default Summary