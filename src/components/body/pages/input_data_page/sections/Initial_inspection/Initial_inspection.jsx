import React from 'react'
import cl from './Initial_inspection.module.css'
import Block_division from '../../block_division/Block_division'
import Data_field from '../../../../UI/input/data_field/Data_field'
import Data_textarea from '../../../../UI/input/data_textarea/Data_textarea'
import Data_selector from '../../../../UI/selector/data_selector/Data_selector'

const Initial_inspection = ({ patientData, dataSetter }) => {
    return (
        <section className={cl.data}>
            <Block_division>
                <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px' }}>Дата и время:</div>
                <Data_field data={patientData.InitialInspection.date} setData={e => dataSetter.setDate(e)} style={{ width: '250px', textAlign: 'center' }} />
            </Block_division>

            <Block_division>
                <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px' }}>Жалобы:</div>
                <Data_textarea data={patientData.InitialInspection.complaints} setData={e => dataSetter.setComplaints(e)} />
            </Block_division>

            <Block_division>
                <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px' }}>Анамнез заболевания:</div>
                <Data_textarea data={patientData.InitialInspection.medicalHistory} setData={e => dataSetter.setMedicalHistory(e)} style={{ minHeight: '100px' }} />
            </Block_division>

            <Block_division>
                <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '260px' }}>Гистологическое заключение</div>
                <div className={[cl.title_char, 'title_text_style'].join(' ')} style={{ width: '40px' }}>№</div>
                <Data_field data={patientData.InitialInspection.histologicalConclusion.histoNumber} setData={e => dataSetter.setHistoNumber(e)} style={{ width: '120px', textAlign: 'center' }} />
                <div className={[cl.title_char, 'title_text_style'].join(' ')} style={{ width: '40px' }}>от</div>
                <Data_field data={patientData.InitialInspection.histologicalConclusion.histoDate} setData={e => dataSetter.setHistoDate(e)} style={{ width: '120px', textAlign: 'center' }} />
                <div className={[cl.title_char, 'title_text_style'].join(' ')} style={{ width: '20px' }}>:</div>
                <Data_textarea data={patientData.InitialInspection.histologicalConclusion.histoComment} setData={e => dataSetter.setHistoComment(e)} />
            </Block_division>

            <Block_division>
                <Data_selector value={patientData.InitialInspection.council.councilType} setValue={dataSetter.setCouncilType} options={['Консилиум', 'Врачебная комиссия']} selectorStyle={{ width: '260px' }} defaultLable={'Выберите консилиум'} />
                <div className={[cl.title_char, 'title_text_style'].join(' ')} style={{ width: '40px' }}>№</div>
                <Data_field data={patientData.InitialInspection.council.councilNumber} setData={e => dataSetter.setCouncilNumber(e)} style={{ width: '120px', textAlign: 'center' }} />
                <div className={[cl.title_char, 'title_text_style'].join(' ')} style={{ width: '40px' }}>от</div>
                <Data_field data={patientData.InitialInspection.council.councilDate} setData={e => dataSetter.setCouncilDate(e)} style={{ width: '120px', textAlign: 'center' }} />
                <div className={[cl.title_char, 'title_text_style'].join(' ')} style={{ width: '20px' }}>:</div>
                <Data_textarea data={patientData.InitialInspection.council.councilComment} setData={e => dataSetter.setCouncilComment(e)} />
            </Block_division>

            <Block_division>
                <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px', textAlign: 'start' }}>Лечение сопутствующей патологии:</div>
                <Data_textarea data={patientData.InitialInspection.treatmentOfComorbidity} setData={e => dataSetter.setTreatmentOfComorbidity(e)} style={{ minHeight: '100px' }} />
            </Block_division>

            <Block_division>
                <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px' }}>Общий статус:</div>
                <Data_textarea data={patientData.InitialInspection.generalStatus} setData={e => dataSetter.setGeneralStatus(e)} style={{ minHeight: '100px' }} />
            </Block_division>

            <Block_division>
                <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px' }}>STATUS LOCALIS:</div>
                <Data_textarea data={patientData.InitialInspection.statusLocalis} setData={e => dataSetter.setStatusLocalis(e)} />
            </Block_division>

            <Block_division>
                <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px', textAlign: 'start' }}>Дополнительные методы обследования:</div>
                <Data_textarea data={patientData.InitialInspection.additionalExaminationMethods} setData={e => dataSetter.setAdditionalExaminationMethods(e)} style={{ minHeight: '100px' }} />
            </Block_division>

            <div className={cl.isolation_block} style={{ marginBottom: '20px' }}>
                <div className={cl.isolation}>
                    <Block_division>
                        <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px' }}>Диагноз:</div>
                        <Data_textarea data={patientData.InitialInspection.diagnosis} setData={e => dataSetter.setDiagnosis(e)} style={{ minHeight: '80px' }} />
                    </Block_division>
                    <Block_division>
                        <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px' }}>Осложнения:</div>
                        <Data_textarea data={patientData.InitialInspection.complications} setData={e => dataSetter.setComplications(e)} />
                    </Block_division>
                    <Block_division>
                        <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px' }}>Сопутствующий диагноз:</div>
                        <Data_textarea data={patientData.InitialInspection.concomitantDiagnosis} setData={e => dataSetter.setConcomitantDiagnosis(e)} />
                    </Block_division>
                </div>
                <div className={cl.isolation_recolor}></div>
            </div>

            <Block_division>
                <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px', textAlign: 'start' }}>В плане:</div>
                <Data_selector value={patientData.InitialInspection.plans} setValue={dataSetter.setPlans} options={['ВПХТ', 'ВПИТ', 'ПХТ', 'АДТ', 'ПХТ + АДТ' ]} defaultLable={'Выберите план'} selectorStyle={{width: '150px', textAlign: 'start', marginRight: '10px' }} usedStyle={[1, 1, 1]} />
                <Data_selector value={patientData.InitialInspection.plans} setValue={dataSetter.setPlans} options={['1, 2, 3 курс (Доксорубицин 50 мг в/п, еженедельно).', '4, 5, 6 курс (Доксорубицин 50 мг в/п, еженедельно).', '7, 8, 9 поддерживающие курсы (Доксорубицин 50 мг в/п, еженедельно).', '10, 11, 12 поддерживающие курсы (Доксорубицин 50 мг в/п, еженедельно).', '13, 14, 15 поддерживающие курсы (Доксорубицин 50 мг в/п, еженедельно).', ]} defaultLable={'Выберите план'} selectorStyle={{ justifyContent: 'start', textAlign: 'start' }} usedStyle={[1, 1, 1]} />
            </Block_division>

            <div className={cl.isolation_block} style={{ marginBottom: '20px' }}>
                <div className={cl.isolation}>
                    <Block_division>
                        <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px' }}>Степень риска ВТЭО:</div>
                        <Data_selector value={patientData.InitialInspection.vtecRiskLevel} setValue={dataSetter.setVtecRiskLevel} options={['Низкий', 'Умеренный', 'Высокий']} defaultLable={'Не выбрано'} selectorStyle={{ justifyContent: 'start', textAlign: 'start' }}  />
                    </Block_division>
                    <Block_division>
                        <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px' }}>Риск ГО:</div>
                        <Data_selector value={patientData.InitialInspection.goRisk} setValue={dataSetter.setGoRisk} options={['Низкий', 'Умеренный', 'Высокий']} defaultLable={'Не выбрано'} selectorStyle={{ justifyContent: 'start', textAlign: 'start' }}  />
                    </Block_division>
                </div>
                <div className={cl.isolation_recolor}></div>
            </div>

            <Block_division>
                <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '230px', textAlign: 'start' }}>Лечащий врач:</div>
                <Data_textarea data={patientData.InitialInspection.attendingDoctor} setData={e => dataSetter.setAttendingDoctor(e)} />
            </Block_division>

            <Block_division>
                <Data_selector value={patientData.InitialInspection.manager} setValue={dataSetter.setManager} options={['Заведующий', 'Уборщик']} defaultLable={'Выберите заведующего'} selectorStyle={{ width: '800px', margin: 'auto' }} nonUsedStyle={[1, 0, 0]} />
            </Block_division>
        </section>
    )
}

export default Initial_inspection