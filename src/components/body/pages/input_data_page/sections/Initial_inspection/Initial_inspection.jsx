import React from 'react'
import cl from './Initial_inspection.module.css'
import Block_division from '../../block_division/Block_division'
import Data_field from '../../../../UI/input/data_field/Data_field'
import Data_textarea from '../../../../UI/input/data_textarea/Data_textarea'
import Data_selector from '../../../../UI/selector/data_selector/Data_selector'

const Initial_inspection = () => {
    return (
        <section className={cl.data}>
            <Block_division>
                <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px' }}>Дата:</div>
                <Data_field data={123} style={{ width: '250px', textAlign: 'center' }} />
            </Block_division>

            <Block_division>
                <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px' }}>Жалобы:</div>
                <Data_textarea />
            </Block_division>

            <Block_division>
                <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px' }}>Анамнез заболевания:</div>
                <Data_textarea style={{ minHeight: '100px' }} />
            </Block_division>

            <Block_division>
                <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '260px' }}>Гистологическое заключение</div>
                <div className={[cl.title_char, 'title_text_style'].join(' ')} style={{ width: '40px' }}>№</div>
                <Data_field data={123} style={{ width: '120px', textAlign: 'center' }} />
                <div className={[cl.title_char, 'title_text_style'].join(' ')} style={{ width: '40px' }}>от</div>
                <Data_field data={123} style={{ width: '120px', textAlign: 'center' }} />
                <div className={[cl.title_char, 'title_text_style'].join(' ')} style={{ width: '20px' }}>:</div>
                <Data_textarea />
            </Block_division>

            <Block_division>
                <Data_selector options={['Консилиум', 'Врачебная комиссия']} selectorStyle={{ width: '260px' }} defaulLable={'Выберите консилиум'} />
                <div className={[cl.title_char, 'title_text_style'].join(' ')} style={{ width: '40px' }}>№</div>
                <Data_field data={123} style={{ width: '120px', textAlign: 'center' }} />
                <div className={[cl.title_char, 'title_text_style'].join(' ')} style={{ width: '40px' }}>от</div>
                <Data_field data={123} style={{ width: '120px', textAlign: 'center' }} />
                <div className={[cl.title_char, 'title_text_style'].join(' ')} style={{ width: '20px' }}>:</div>
                <Data_textarea />
            </Block_division>

            <Block_division>
                <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px' }}>Анамнез жизни:</div>
                <Data_textarea style={{ minHeight: '100px' }} />
            </Block_division>

            <Block_division>
                <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px' }}>Общий статус:</div>
                <Data_textarea style={{ minHeight: '100px' }} />
            </Block_division>

            <Block_division>
                <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px' }}>STATUS LOCALIS:</div>
                <Data_textarea />
            </Block_division>

            <Block_division>
                <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px', textAlign: 'start' }}>Дополнительные методы обследования:</div>
                <Data_textarea style={{ minHeight: '100px' }} />
            </Block_division>

            <div className={cl.isolation_block} style={{ marginBottom: '20px' }}>
                <div className={cl.isolation}>
                    <Block_division>
                        <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px' }}>Диагноз:</div>
                        <Data_textarea style={{ minHeight: '80px' }} />
                    </Block_division>
                    <Block_division>
                        <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px' }}>Осложнения:</div>
                        <Data_textarea />
                    </Block_division>
                    <Block_division>
                        <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px' }}>Сопутствующий диагноз:</div>
                        <Data_textarea />
                    </Block_division>
                </div>
                <div className={cl.isolation_recolor}></div>
            </div>

            <Block_division>
                <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px', textAlign: 'start' }}>В плане:</div>
                <Data_selector options={['Героин', 'Кокаин']} defaulLable={'Выберите план'} selectorStyle={{ justifyContent: 'start', textAlign: 'start' }} usedStyle={[1, 1, 1]} />
            </Block_division>

            <div className={cl.isolation_block} style={{ marginBottom: '20px' }}>
                <div className={cl.isolation}>
                    <Block_division>
                        <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px' }}>Степень риска ВТЭО:</div>
                        <Data_textarea />
                    </Block_division>
                    <Block_division>
                        <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px' }}>Риск ГО:</div>
                        <Data_textarea />
                    </Block_division>
                    <Block_division>
                        <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px', textAlign: 'start' }}>Способ профилактики ВТЭО:</div>
                        <Data_textarea />
                    </Block_division>
                </div>
                <div className={cl.isolation_recolor}></div>
            </div>

            <Block_division>
                <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px', textAlign: 'start' }}>Лечащий врач:</div>
                <Data_textarea />
            </Block_division>

            <Block_division>
                <Data_selector options={['Заведующий', 'Уборщик']} defaulLable={'Выберите заведующего'} selectorStyle={{ width: '800px', margin: 'auto' }} nonUsedStyle={[1, 0, 0]} />
            </Block_division>
        </section>
    )
}

export default Initial_inspection