import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Identification_page from './components/body/pages/identification_page/Identification_page';
import Input_data_page from './components/body/pages/input_data_page/Input_data_page';
import To_print_page from './components/body/pages/to_print_page/To_print_page';

function App() {
  const [currentPage, setCurrenPage] = useState('Identification')

  const [outpatientCard, setOutpatientCard] = useState('123124')
  const [fullName, setFullName] = useState('Дмитрий Вчеславович Михно')
  const [dateOfBirth, setDateOfBirth] = useState('20.04.1972')
  const [snils, setSnils] = useState('12-312-3-123-123-1')
  const [gender, setGender] = useState(1)
  const [bloodType, setBloodType] = useState(1)
  const [disability, setDisability] = useState(1)

  const [date, setDate] = useState('21.07.2023')
  const [complaints, setComplaints] = useState('на общую слабость.')
  const [medicalHistory, setMedicalHistory] = useState('. В 2017 г. на фоне терапии бисфосфанатами – остеомиелит нижней челюсти, введение бсфосфанатов отменено. В августе 2017 г. на фоне проведения гормонотерапии аГРГ выявлен рост ПСА, показано проведение гомонотерапии в режиме МАБ: бикалутамид + аГРГ. На фоне проводимой терапии ПСА стабильно низкий, далее лечение получал в интермиттирующем режиме. В феврале 2020 г. на фоне профодимого лечения аГРГ выявлен рост ПСА, по данным остеосцинтиграфии прогрессирование по мтс в кости. Представлен на ВК № 960 от 02.03.2020 – показано проведение ПХТ по схеме доцетаксел + аГРГ. Проведено 6 курсоа ПХТ по схеме: доцетаксел. Прио бследовании по ПСА - рост в 3 раза за последние 2 месяца. Выставлена гормонорезистентность.  Направлен  на ВК № 678 от 11.02.2021- проведение терапии по схеме: кабазитаксел на фоне гормонотерапии. Проведено 17 курсов терапии по схеме: кабазитаксел. 14.02.2022 - проведение 17 курса ПХТ 2 линии по схеме: кабазитаксел 50 мг №1 в/в. Обследован: по МРТ ОМТ от 06.04.2022 - стабилизация. ПСА от 19.04.2022- более 100 нг/мл. Направлен на ВК № 1930 от 20.04.2022 - продолжение ХТ кабазитакселом + аГнРГ. Госпитализирован в онкоурологическое отделение ЯОКОБ для 37 курса ПХТ (Кабазитаксел 25 мг/м2 в/в), АДТ (трипторелин 11,25 мг в/м). Предыдущий курс:  04.05.2023.')
  const [histoDate, setHistoDate] = useState('27.11.13')
  const [histoNumber, setHistoNumber] = useState('30231-5')
  const [histoComment, setHistoComment] = useState('высокодифференцированный мелкоацинарный рак предстательной железы.')
  const [councilType, setCouncilType] = useState(1)
  const [councilNumber, setCouncilNumber] = useState('30231-5')
  const [councilDate, setCouncilDate] = useState('27.11.13')
  const [councilComment, setCouncilComment] = useState('проведение терапии по схеме: кабазитаксел на фоне гормонотерапии.')
  const [treatmentOfComorbidity, setTreatmentOfComorbidity] = useState('')
  const [generalStatus, setGeneralStatus] = useState('Общее состояние: удовлетворительное Общее состояние: удовлетворительное Общее состояние: удовлетворительное Общее состояние: удовлетворительное Общее состояние: удовлетворительноеОбщее состояние: удовлетворительное')
  const [statusLocalis, setStatusLocalis] = useState(': Визуально опухолевой патологии не определяется')
  const [additionalExaminationMethods, setAdditionalExaminationMethods] = useState('Рентгенография ОГК от 09.08.2022 - Пневмосклероз.  Множественные мтс в ребрах и грудных позвонках. Сцинтиграфия от 10.02.2021- картина очаговой патологии (вероятно мтс характера) грудины, нижней челюсти, грудного и поясничного отделов позвоночника, костей таза, плечевой и бедренной костей.Сцинтиграфия костей от 06.07.2021- очаговые изменения в костях скелета вторичного генеза. Стабилизация.МРТ ОМТ от 25.11.2022 - Верифицированный РПЖ, мтс в кости. В сравнении с исследованием 06.04.2022 определяется стабилизация.ПСА от 04.02.2021- 79,11 нг/мл., ПСА от 07.05.2021- 53,71 нг/мл.ПСА от 04.08.2021- 81,48 нг/мл.  ПСА от 05.10.2021- 52,5 нг/мл. ПСА от 16.11.2021 - 37,76 нг/мл.ПСА от 08.12.2021 - 48,47 нг/мл ПСА от 19.04.2022- более 100 нг/мл. ПСА от 07.06.2022 - 69,74 нг/мл. ПСА от 28.06.2022 - 68,09 нг/мл. ПСА от 08.08.2022 - 53,26 нг/мл. ПСА от 19.09.2022 - 47,45 нг/мл. ПСА от 11.10.2022 - 57,87 нг/мл. ПСА от 22.11.2022 - 40,65 нг/мл. ПСА от 10.01.2023 - 42,16 нг/мл, 30.01.2023 - 44,06 нг/мл, 22.02.2023 - 46,96 нг/мл. ПСА от 16.03.2023 - 53,69 нг/мл. ПСА от 06.04.2023 - 40,95 нг/мл. ПСА от 25.04.2023 - 33,33 нг/мл. ПСА от 23.05.2023 - 31,62 нг/мл.ЭКГ - синусовая тахикардия. Нормальное положение ЭОС. Гипертрофия левых отелов сердца. Предсердные экстрасистола. Нарушение процессов реполяризации миокарда диффузного характера.Рентгенография ОГК от 09.08.2022 - Пневмосклероз.  Множественные мтс в ребрах и грудных позвонках. Сцинтиграфия от 10.02.2021- картина очаговой патологии (вероятно мтс характера) грудины, нижней челюсти, грудного и поясничного отделов позвоночника, костей таза, плечевой и бедренной костей.Сцинтиграфия костей от 06.07.2021- очаговые изменения в костях скелета вторичного генеза. Стабилизация.МРТ ОМТ от 25.11.2022 - Верифицированный РПЖ, мтс в кости. В сравнении с исследованием 06.04.2022 определяется стабилизация.ПСА от 04.02.2021- 79,11 нг/мл., ПСА от 07.05.2021- 53,71 нг/мл.ПСА от 04.08.2021- 81,48 нг/мл.  ПСА от 05.10.2021- 52,5 нг/мл. ПСА от 16.11.2021 - 37,76 нг/мл.ПСА от 08.12.2021 - 48,47 нг/мл ПСА от 19.04.2022- более 100 нг/мл. ПСА от 07.06.2022 - 69,74 нг/мл. ПСА от 28.06.2022 - 68,09 нг/мл. ПСА от 08.08.2022 - 53,26 нг/мл. ПСА от 19.09.2022 - 47,45 нг/мл. ПСА от 11.10.2022 - 57,87 нг/мл. ПСА от 22.11.2022 - 40,65 нг/мл. ПСА от 10.01.2023 - 42,16 нг/мл, 30.01.2023 - 44,06 нг/мл, 22.02.2023 - 46,96 нг/мл. ПСА от 16.03.2023 - 53,69 нг/мл. ПСА от 06.04.2023 - 40,95 нг/мл. ПСА от 25.04.2023 - 33,33 нг/мл. ПСА от 23.05.2023 - 31,62 нг/мл.ЭКГ - синусовая тахикардия. Нормальное положение ЭОС. Гипертрофия левых отелов сердца. Предсердные экстрасистола. Нарушение процессов реполяризации миокарда диффузного характера.Рентгенография ОГК от 09.08.2022 - Пневмосклероз.  Множественные мтс в ребрах и грудных позвонках. Сцинтиграфия от 10.02.2021- картина очаговой патологии (вероятно мтс характера) грудины, нижней челюсти, грудного и поясничного отделов позвоночника, костей таза, плечевой и бедренной костей.Сцинтиграфия костей от 06.07.2021- очаговые изменения в костях скелета вторичного генеза. Стабилизация.МРТ ОМТ от 25.11.2022 - Верифицированный РПЖ, мтс в кости. В сравнении с исследованием 06.04.2022 определяется стабилизация.ПСА от 04.02.2021- 79,11 нг/мл., ПСА от 07.05.2021- 53,71 нг/мл.ПСА от 04.08.2021- 81,48 нг/мл.  ПСА от 05.10.2021- 52,5 нг/мл. ПСА от 16.11.2021 - 37,76 нг/мл.ПСА от 08.12.2021 - 48,47 нг/мл ПСА от 19.04.2022- более 100 нг/мл. ПСА от 07.06.2022 - 69,74 нг/мл. ПСА от 28.06.2022 - 68,09 нг/мл. ПСА от 08.08.2022 - 53,26 нг/мл. ПСА от 19.09.2022 - 47,45 нг/мл. ПСА от 11.10.2022 - 57,87 нг/мл. ПСА от 22.11.2022 - 40,65 нг/мл. ПСА от 10.01.2023 - 42,16 нг/мл, 30.01.2023 - 44,06 нг/мл, 22.02.2023 - 46,96 нг/мл. ПСА от 16.03.2023 - 53,69 нг/мл. ПСА от 06.04.2023 - 40,95 нг/мл. ПСА от 25.04.2023 - 33,33 нг/мл. ПСА от 23.05.2023 - 31,62 нг/мл.ЭКГ - синусовая тахикардия. Нормальное положение ЭОС. Гипертрофия левых отелов сердца. Предсердные экстрасистола. Нарушение процессов реполяризации миокарда диффузного характера.Рентгенография ОГК от 09.08.2022 - Пневмосклероз.  Множественные мтс в ребрах и грудных позвонках. Сцинтиграфия от 10.02.2021- картина очаговой патологии (вероятно мтс характера) грудины, нижней челюсти, грудного и поясничного отделов позвоночника, костей таза, плечевой и бедренной костей.Сцинтиграфия костей от 06.07.2021- очаговые изменения в костях скелета вторичного генеза. Стабилизация.МРТ ОМТ от 25.11.2022 - Верифицированный РПЖ, мтс в кости. В сравнении с исследованием 06.04.2022 определяется стабилизация.ПСА от 04.02.2021- 79,11 нг/мл., ПСА от 07.05.2021- 53,71 нг/мл.ПСА от 04.08.2021- 81,48 нг/мл.  ПСА от 05.10.2021- 52,5 нг/мл. ПСА от 16.11.2021 - 37,76 нг/мл.ПСА от 08.12.2021 - 48,47 нг/мл ПСА от 19.04.2022- более 100 нг/мл. ПСА от 07.06.2022 - 69,74 нг/мл. ПСА от 28.06.2022 - 68,09 нг/мл. ПСА от 08.08.2022 - 53,26 нг/мл. ПСА от 19.09.2022 - 47,45 нг/мл. ПСА от 11.10.2022 - 57,87 нг/мл. ПСА от 22.11.2022 - 40,65 нг/мл. ПСА от 10.01.2023 - 42,16 нг/мл, 30.01.2023 - 44,06 нг/мл, 22.02.2023 - 46,96 нг/мл. ПСА от 16.03.2023 - 53,69 нг/мл. ПСА от 06.04.2023 - 40,95 нг/мл. ПСА от 25.04.2023 - 33,33 нг/мл. ПСА от 23.05.2023 - 31,62 нг/мл.ЭКГ - синусовая тахикардия. Нормальное положение ЭОС. Гипертрофия левых отелов сердца. Предсердные экстрасистола. Нарушение процессов реполяризации миокарда диффузного характера.Рентгенография ОГК от 09.08.2022 - Пневмосклероз.  Множественные мтс в ребрах и грудных позвонках. Сцинтиграфия от 10.02.2021- картина очаговой патологии (вероятно мтс характера) грудины, нижней челюсти, грудного и поясничного отделов позвоночника, костей таза, плечевой и бедренной костей.Сцинтиграфия костей от 06.07.2021- очаговые изменения в костях скелета вторичного генеза. Стабилизация.МРТ ОМТ от 25.11.2022 - Верифицированный РПЖ, мтс в кости. В сравнении с исследованием 06.04.2022 определяется стабилизация.ПСА от 04.02.2021- 79,11 нг/мл., ПСА от 07.05.2021- 53,71 нг/мл.ПСА от 04.08.2021- 81,48 нг/мл.  ПСА от 05.10.2021- 52,5 нг/мл. ПСА от 16.11.2021 - 37,76 нг/мл.ПСА от 08.12.2021 - 48,47 нг/мл ПСА от 19.04.2022- более 100 нг/мл. ПСА от 07.06.2022 - 69,74 нг/мл. ПСА от 28.06.2022 - 68,09 нг/мл. ПСА от 08.08.2022 - 53,26 нг/мл. ПСА от 19.09.2022 - 47,45 нг/мл. ПСА от 11.10.2022 - 57,87 нг/мл. ПСА от 22.11.2022 - 40,65 нг/мл. ПСА от 10.01.2023 - 42,16 нг/мл, 30.01.2023 - 44,06 нг/мл, 22.02.2023 - 46,96 нг/мл. ПСА от 16.03.2023 - 53,69 нг/мл. ПСА от 06.04.2023 - 40,95 нг/мл. ПСА от 25.04.2023 - 33,33 нг/мл. ПСА от 23.05.2023 - 31,62 нг/мл.ЭКГ - синусовая тахикардия. Нормальное положение ЭОС. Гипертрофия левых отелов сердца. Предсердные экстрасистола. Нарушение процессов реполяризации миокарда диффузного характера.')
  const [diagnosis, setDiagnosis] = useState('Рак предстательной железы T2N0M1,  4 ст., мтс в кости. Гормонотерапия с 2013 г, МАБ с 08.2017. Прогрессирование 02.2020 по мтс в кости, 6 курсов Доцетаксел (03-07.2020), аЛГРГ, гормонорезистентность (02.21), в процессе ХТ Кабазитакселом с 04.2021, 2 кл. гр')
  const [complications, setComplications] = useState('Остеомиелит нижней челюсти.')
  const [concomitantDiagnosis, setConcomitantDiagnosis] = useState('нет (клинически значимой патологии не выявлено).')
  const [plans, setPlans] = useState(1)
  const [vtecRiskLevel, setVtecRiskLevel] = useState(1)
  const [goRisk, setGoRisk] = useState(1)
  const [attendingDoctor, setAttendingDoctor] = useState('Майстренко Е.В.')
  const [manager, setManager] = useState(1)

  const [diaries, setDiaries] = useState('')

  const [medicalHistoryNumber, setMedicalHistoryNumber] = useState('')
  const [dateOfDischarge, setDateOfDischarge] = useState('')
  const [workAbility, setWorkAbility] = useState('')
  const [instrumentalExaminationMethods, setInstrumentalExaminationMethods] = useState('')
  const [clinicalAnalyzes, setClinicalAnalyzes] = useState(
    [
      {
        itemKey: 0,
        selectorValue: 1,
        date: '',
        rbc: '',
        wbc: '',
        plt: '',
        hgb: '',
      },
      {
        itemKey: 1,
        selectorValue: 2,
        date: '',
        alt: '',
        ast: '',
        tb: '',
        gluc: '',
        cre: '',
        ua: '',
      }, {
        itemKey: 2,
        selectorValue: 3,
        date: '',
        comment: '',
      }
    ]
  )

  const [recomendations, setRecomendations] = useState('')

  const patientData = {
    patientСard: {
      outpatientCard: outpatientCard, // Амбулаторная карта
      fullName: fullName, // ФИО
      dateOfBirth: dateOfBirth,  // Дата рождения
      snils: snils,  // СНИЛС
      gender: gender, // Пол
      bloodType: bloodType, // Группа крови
      disability: disability, // Инвалидность
    },
    InitialInspection: {
      date: date, // Дата
      complaints: complaints, // Жалобы
      medicalHistory: medicalHistory, // Анамнез заболевания
      histologicalConclusion: {
        histoNumber: histoNumber, // Номер гистологического заключения
        histoDate: histoDate, // Дата гистологического заключения
        histoComment: histoComment, // Комментарий гистологического заключения
      },
      council: {
        councilType: councilType, // Тип консилиума
        councilNumber: councilNumber, // Номер консилиума
        councilDate: councilDate, // Дата консилиума
        councilComment: councilComment, // Комментарий консилиума
      },
      treatmentOfComorbidity: treatmentOfComorbidity, // Анамнез жизни 
      generalStatus: generalStatus, // Общий статус
      statusLocalis: statusLocalis, // STATUS LOCALIS
      additionalExaminationMethods: additionalExaminationMethods, // Дополнительные методы обследования
      diagnosis: diagnosis, // Диагноз
      complications: complications, // Осложнения
      concomitantDiagnosis: concomitantDiagnosis, // Сопутствующий диагноз
      plans: plans, // В плане
      vtecRiskLevel: vtecRiskLevel, // Степень риска ВТЭО
      goRisk: goRisk, // Риск ГО
      attendingDoctor: attendingDoctor, // Лечащий врач
      manager: manager, // Заведующий
    },
    diaries: diaries, // Дневники
    summary: {
      medicalHistoryNumber: medicalHistoryNumber, // Номер истории болезни
      dateOfDischarge: dateOfDischarge, // Дата выписки
      workAbility: workAbility, // Трудоспособность
      instrumentalExaminationMethods: instrumentalExaminationMethods, // Инструментальные методы обследования
      clinicalAnalyzes: clinicalAnalyzes,
      recomendations: recomendations, // Рекомендации
    }
  }

  const dataSetter = {
    setOutpatientCard: setOutpatientCard,
    setFullName: setFullName,
    setDateOfBirth: setDateOfBirth,
    setSnils: setSnils,
    setGender: setGender,
    setBloodType: setBloodType,
    setDisability: setDisability,
    setDate: setDate,
    setComplaints: setComplaints,
    setMedicalHistory: setMedicalHistory,
    setHistoDate: setHistoDate,
    setHistoNumber: setHistoNumber,
    setHistoComment: setHistoComment,
    setCouncilType: setCouncilType,
    setCouncilNumber: setCouncilNumber,
    setCouncilDate: setCouncilDate,
    setCouncilComment: setCouncilComment,
    setTreatmentOfComorbidity: setTreatmentOfComorbidity,
    setGeneralStatus: setGeneralStatus,
    setStatusLocalis: setStatusLocalis,
    setAdditionalExaminationMethods: setAdditionalExaminationMethods,
    setDiagnosis: setDiagnosis,
    setComplications: setComplications,
    setConcomitantDiagnosis: setConcomitantDiagnosis,
    setPlans: setPlans,
    setVtecRiskLevel: setVtecRiskLevel,
    setGoRisk: setGoRisk,
    setAttendingDoctor: setAttendingDoctor,
    setManager: setManager,
    setDiaries: setDiaries,
    setMedicalHistoryNumber: setMedicalHistoryNumber,
    setDateOfDischarge: setDateOfDischarge,
    setWorkAbility: setWorkAbility,
    setInstrumentalExaminationMethods: setInstrumentalExaminationMethods,
    setClinicalAnalyzes: setClinicalAnalyzes,
    setRecomendations: setRecomendations,

  }


  return (
    <div className="App">
      <BrowserRouter>
        <Header currentPage={currentPage} setCurrenPage={setCurrenPage} dataSetter={dataSetter} />
        <Routes>
          <Route path='*' element={<Identification_page setPage={setCurrenPage} patientData={patientData} dataSetter={dataSetter} />} />
          <Route path='/input_data' element={<Input_data_page setPage={setCurrenPage} patientData={patientData} dataSetter={dataSetter} />} />
          <Route path='/to_print' element={<To_print_page setPage={setCurrenPage} patientData={patientData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
