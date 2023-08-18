import React, { useEffect, useRef, useState } from 'react'
import cl from './Initial_inspection_page.module.css'
import usePageConstructor from '../../../../../hooks/usePageConstructor'
import Page_layout from '../../page_layout/Page_layout'

const Initial_inspection_page = ({ patientData }) => {
    const [elements, setElements] = useState([
        <div className={[cl.mid_title, 'to_print_title_style'].join(' ')}>
            {(() => {
                if (patientData.InitialInspection.manager == 1) {
                    return (
                        <div className={[cl.text, 'to_print_text_style'].join(' ')}>
                            <div className={[cl.title, 'to_print_title_style'].join(' ')}>Осмотр совместно с заведующим урологическим отделением Гуриным Э.В.</div>
                        </div>
                    )
                }
                if (patientData.InitialInspection.manager == 2) {
                    return (
                        <div className={[cl.text, 'to_print_text_style'].join(' ')}>
                            <div className={[cl.title, 'to_print_title_style'].join(' ')}>Осмотр совместно с и.о. заведующего урологическим отделением Метельковой Е. А.</div>
                        </div>
                    )
                }
            })()}
        </div>,

        <div className={cl.bottom_margin}>
            <div className={[cl.title, 'to_print_title_style'].join(' ')}>{patientData.InitialInspection.date}</div>
        </div>,

        <div>
            <div className={[cl.title, 'to_print_title_style'].join(' ')}>Жалобы:</div>
            <div className={[cl.text, 'to_print_text_style'].join(' ')}>{patientData.InitialInspection.complaints}</div>
        </div>,

        <div className={cl.bottom_margin}>
            <div className={[cl.text, 'to_print_text_style'].join(' ')}>
                <div className={[cl.title, 'to_print_title_style'].join(' ')}>Анамнез заболевания:</div>
                {patientData.InitialInspection.medicalHistory}
            </div>
        </div>,

        <div>
            <div className={[cl.title, 'to_print_title_style'].join(' ')}>Гистологическое заключение от</div>
            <div style={{ padding: '0' }} className={[cl.title, 'to_print_title_style'].join(' ')}>{patientData.InitialInspection.histologicalConclusion.histoDate}</div>
            <div className={[cl.title, 'to_print_title_style'].join(' ')}>. №</div>
            <div style={{ padding: '0' }} className={[cl.title, 'to_print_title_style'].join(' ')}>{patientData.InitialInspection.histologicalConclusion.histoNumber}</div>
            <div className={[cl.title, 'to_print_title_style'].join(' ')}>:</div>
            <div style={{ padding: '0' }} className={[cl.text, 'to_print_text_style'].join(' ')}>{patientData.InitialInspection.histologicalConclusion.histoComment}</div>
        </div>,

        <div className={cl.bottom_margin}>
            {
                (() => {
                    if (patientData.InitialInspection.council.councilType == 1) {
                        return <div className={[cl.title, 'to_print_title_style'].join(' ')}>Консилиум</div>
                    }
                    if (patientData.InitialInspection.council.councilType == 2) {
                        return <div className={[cl.title, 'to_print_title_style'].join(' ')}>Врачебная комиссия</div>
                    }
                })()
            }

            <div className={[cl.title, 'to_print_title_style'].join(' ')}>№</div>
            <div className={[cl.title, 'to_print_title_style'].join(' ')}>{patientData.InitialInspection.council.councilNumber}</div>
            <div className={[cl.title, 'to_print_title_style'].join(' ')}>от</div>
            <div style={{ padding: '0' }} className={[cl.title, 'to_print_title_style'].join(' ')}>{patientData.InitialInspection.council.councilDate}</div>
            <div className={[cl.title, 'to_print_title_style'].join(' ')}>:</div>
            <div style={{ padding: '0' }} className={[cl.text, 'to_print_text_style'].join(' ')}>{patientData.InitialInspection.council.councilComment}</div>
        </div>,

        <div className={cl.bottom_margin}>
            <div className={[cl.text, 'to_print_text_style'].join(' ')}>
                <div className={[cl.title, 'to_print_title_style'].join(' ')}>АНАМНЕЗ ЖИЗНИ:</div>
                Туберкулез: отрицает.
                Наследственность: не отягощена.
                Перенесенные заболевания: нет.
                Сопутствующий диагноз: нет (клинически значимой патологии не выявлено).
                По сопутствующей патологии постоянно лекарств не принимает.
                Лечение сопутствующей патологии не планируется.
                Аллергия: отрицает.
                Гемотрансфузии: не было.
                Профессиональные вредности: нет.
                Не курит.
            </div>
        </div>,

        <div className={cl.bottom_margin}>
            <div className={[cl.text, 'to_print_text_style'].join(' ')}>
                <div className={[cl.title, 'to_print_title_style'].join(' ')}>ОБЩИЙ СТАТУС:</div>
                {patientData.InitialInspection.generalStatus}
            </div>
        </div>,

        <div className={cl.bottom_margin}>
            <div className={[cl.text, 'to_print_text_style'].join(' ')}>
                <div className={[cl.title, 'to_print_title_style'].join(' ')}>STATUS LOCALIS:</div>
                {patientData.InitialInspection.statusLocalis}
            </div>
        </div>,

        <div className={cl.bottom_margin}>
            <div className={[cl.text, 'to_print_text_style'].join(' ')}>
                <div className={[cl.title, 'to_print_title_style'].join(' ')}>Дополнительные методы обследования:</div>
                {patientData.InitialInspection.additionalExaminationMethods}
            </div>
        </div>,

        <div className={cl.bottom_margin}>
            <div className={[cl.title, 'to_print_title_style'].join(' ')}>
                Диагноз выставлен на основании данных анамнеза, гистологического заключения, локального статуса и дополнительных методов обследования:
            </div>
        </div>,

        <div className={cl.bottom_margin}>
            <div className={[cl.text, 'to_print_text_style'].join(' ')}>
                <div className={[cl.title, 'to_print_title_style'].join(' ')}>ДИАГНОЗ:</div>
                {patientData.InitialInspection.diagnosis}
            </div>
        </div>,

        <div>
            <div className={[cl.text, 'to_print_text_style'].join(' ')}>
                <div className={[cl.title, 'to_print_title_style'].join(' ')}>Сопутствующий диагноз:</div>
                {patientData.InitialInspection.concomitantDiagnosis}
            </div>
        </div>,

        <div className={cl.bottom_margin}>
            <div className={[cl.text, 'to_print_text_style'].join(' ')}>
                <div className={[cl.title, 'to_print_title_style'].join(' ')}>Осложнения:</div>
                {patientData.InitialInspection.complications}
            </div>
        </div>,

        <div className={cl.bottom_margin}>
            <div className={[cl.text, 'to_print_text_style'].join(' ')}>
                <div className={[cl.title, 'to_print_title_style'].join(' ')}>В плане:</div>
                {patientData.InitialInspection.plans}
            </div>
        </div>,

        <div>
            <div className={[cl.text, 'to_print_text_style'].join(' ')}>
                <div className={[cl.title, 'to_print_title_style'].join(' ')}>Степень риска ВТЭО:</div>
                {(() => {
                    if (patientData.InitialInspection.vtecRiskLevel == 1) { return 'низкий' }
                    if (patientData.InitialInspection.vtecRiskLevel == 2) { return 'умеренный' }
                    if (patientData.InitialInspection.vtecRiskLevel == 3) { return 'высокий' }
                })()}
            </div>
        </div>,

        <div>
            <div className={[cl.text, 'to_print_text_style'].join(' ')}>
                <div className={[cl.title, 'to_print_title_style'].join(' ')}>Риск ГО:</div>
                {(() => {
                    if (patientData.InitialInspection.goRisk == 1) { return 'низкий' }
                    if (patientData.InitialInspection.goRisk == 2) { return 'умеренный' }
                    if (patientData.InitialInspection.goRisk == 3) { return 'высокий' }
                })()}
            </div>
        </div>,

        <div className={cl.bottom_margin}>
            <div className={[cl.text, 'to_print_text_style'].join(' ')}>
                <div className={[cl.title, 'to_print_title_style'].join(' ')}>Способ профилактики ВТЭО:</div>
                {(() => {
                    if (patientData.InitialInspection.vtecRiskLevel == 1) { return 'не требуется.' }
                    if (patientData.InitialInspection.vtecRiskLevel == 2) { return 'эластическое бинтование нижних конечностей.' }
                    if (patientData.InitialInspection.vtecRiskLevel == 3) { return 'эластическое бинтование нижних конечностей, НМГ.' }
                })()}
            </div>
        </div>,

        <div className={cl.bottom_margin}>
            <div className={[cl.text, 'to_print_text_style'].join(' ')}>
                <div className={[cl.title, 'to_print_title_style'].join(' ')}>Лечащий врач:</div>
                {patientData.InitialInspection.attendingDoctor}
            </div>
        </div>,

        <div>
            {(() => {
                if (patientData.InitialInspection.manager == 1) {
                    return (
                        <div className={[cl.text, 'to_print_text_style'].join(' ')}>
                            <div className={[cl.title, 'to_print_title_style'].join(' ')}>Заведующий урологическим отделением:</div>
                            Гурин Э.В.
                        </div>
                    )
                }
                if (patientData.InitialInspection.manager == 2) {
                    return (
                        <div className={[cl.text, 'to_print_text_style'].join(' ')}>
                            <div className={[cl.title, 'to_print_title_style'].join(' ')}>И.о. заведующего урологическим отделением:</div>
                            Метелькова Е. А.
                        </div>
                    )
                }
            })()}
        </div>
    ])
    const [pages, setPages] = useState([elements])
    const containerRef = useRef(null);

    usePageConstructor(cl, setPages, elements, containerRef)

    return (
        <Page_layout pages={pages} containerRef={containerRef} />
    )
}

export default Initial_inspection_page