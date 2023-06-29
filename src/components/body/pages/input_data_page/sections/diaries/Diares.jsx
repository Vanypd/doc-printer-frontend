import React from 'react'
import cl from './Diares.module.css'
import Block_division from '../../block_division/Block_division'
import Data_textarea from '../../../../UI/input/data_textarea/Data_textarea'
import Submit_button from '../../../../UI/button/submit_button/Submit_button'

const Diares = () => {
    

    return (
        <section className={cl.data}>
            <Block_division>
                <div className={[cl.title, 'header_title_style'].join(' ')}>Дневники</div>
            </Block_division>

            <Block_division>
                <Data_textarea style={{ minHeight: '400px' }} />
            </Block_division>

            <Block_division>
                <Submit_button onClick={() => { }}>Редактировать</Submit_button>
            </Block_division>
        </section>
    )
}

export default Diares