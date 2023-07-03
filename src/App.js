import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Identification_page from './components/body/pages/identification_page/Identification_page';
import Input_data_page from './components/body/pages/input_data_page/Input_data_page';
import To_print_page from './components/body/pages/to_print_page/To_print_page';

function App() {
  const [currentPage, setCurrenPage] = useState('Identification')

  const [outpatientCard, setOutpatientCard] = useState('')
  const [fullName, setFullName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [snils, setSnils] = useState('')
  const [gender, setGender] = useState(undefined)
  const [bloodType, setBloodType] = useState(undefined)
  const [disability, setDisability] = useState(undefined)

  const [date, setDate] = useState('')
  const [complaints, setComplaints] = useState('')
  const [medicalHistory, setMedicalHistory] = useState('')
  const [histoDate, setHistoDate] = useState('')
  const [histoNumber, setHistoNumber] = useState('')
  const [histoComment, setHistoComment] = useState('')
  const [councilType, setCouncilType] = useState(undefined)
  const [councilNumber, setCouncilNumber] = useState('')
  const [councilDate, setCouncilDate] = useState('')
  const [councilComment, setCouncilComment] = useState('')
  const [treatmentOfComorbidity, setTreatmentOfComorbidity] = useState('')
  const [generalStatus, setGeneralStatus] = useState('')
  const [statusLocalis, setStatusLocalis] = useState('')
  const [additionalExaminationMethods, setAdditionalExaminationMethods] = useState('')
  const [diagnosis, setDiagnosis] = useState('')
  const [complications, setComplications] = useState('')
  const [concomitantDiagnosis, setConcomitantDiagnosis] = useState('')
  const [plans, setPlans] = useState(undefined)
  const [vtecRiskLevel, setVtecRiskLevel] = useState(undefined)
  const [goRisk, setGoRisk] = useState(undefined)
  const [attendingDoctor, setAttendingDoctor] = useState('Майстренко Е.В.')
  const [manager, setManager] = useState(undefined)

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
