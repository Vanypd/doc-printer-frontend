import React from 'react'
import cl from './Analyzes_field.module.css'
import Data_field from '../../../../../../UI/input/data_field/Data_field'

const Analyzes_field = ({data, setData, itemKey, type, fieldData, before, after, ...props}) => {
    return (
        <div className={cl.analyzes_field}>
            <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '120px' }}>{before}</div>
            <Data_field data={data} setData={e => setData(itemKey, type, fieldData, e.target.value)} style={{ width: '80px', textAlign: 'center', marginRight: '5px' }} />
            <div className={[cl.title, 'title_text_style'].join(' ')} style={{ width: '90px' }}>{after}</div>
        </div>
    )
}

export default Analyzes_field