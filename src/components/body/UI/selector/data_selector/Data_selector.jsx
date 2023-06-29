import React, { useEffect, useMemo, useRef, useState } from 'react'
import cl from './Data_selector.module.css'

const Data_selector = ({ options, value, setValue, selectorStyle, defaultLable, usedStyle, nonUsedStyle }) => {
    const [isActive, setActive] = useState(false)
    const [lable, setLable] = useState(defaultLable)
    const [isUsed, setUsed] = useState(false)
    const rootEl = useRef(null);

    const activeChanger = () => {
        if (isActive) { setActive(false) }
        else { setActive(true) }
    }

    const selectOption = (e, index) => {
        if (!isUsed) { setUsed(true) }
        setLable(e.target.innerHTML)
        setValue(index + 1)
        setActive(false)

    }

    const usedSpanClassManager = () => {
        let classArray = [cl.used_span]

        if (usedStyle) {
            if (usedStyle[0] == 1) { classArray[1] = cl.font_field_weight } // default TITLE WEIGHT
            if (usedStyle[1] == 1) { classArray[2] = cl.color_white } // default CUSTOM
            if (usedStyle[2] == 1) { classArray[3] = cl.font_size_field } // default TITLE
        }
        return classArray.join(' ')
    }
    // GUIDE: weight, color, size
    const nonUsedSpanClassManager = () => {
        let classArray = [cl.non_used_span]

        if (nonUsedStyle) {
            if (nonUsedStyle[0] == 1) { classArray[1] = cl.font_title_weight } // default FIELD WEIGHT
            if (nonUsedStyle[1] == 1) { classArray[2] = cl.color_white } // default CUSTOM
            if (nonUsedStyle[2] == 1) { classArray[3] = cl.font_size_title } // default FIELD
        }
        return classArray.join(' ')
    }

    useEffect(() => {
        if (isActive) {
            const onClick = e => rootEl.current.contains(e.target) || setActive(false);
            document.addEventListener('click', onClick);
            return () => document.removeEventListener('click', onClick);
        }
    }, [isActive])

    useMemo(() => {
     if (value) {
        setUsed(true)
        setLable(options[value - 1])
     }
    }, [options, value])

    return (
        <div className={cl.selector_box} style={selectorStyle}>
            <div className={cl.selector_container}>
                <div ref={rootEl} onClick={activeChanger} className={(isActive) ? [cl.selector, cl.selector_active].join(' ') : cl.selector}>

                    {/* LABLE */}
                    {(value)
                        ? <span className={usedSpanClassManager()}>{lable}</span>
                        : isUsed
                            ? <span className={usedSpanClassManager()}>{lable}</span>
                            : <span className={nonUsedSpanClassManager()}>{lable}</span>}

                    {/* ICON */}
                    <span >
                        <svg className={(isActive) ? [cl.selector_char, cl.selector_char_active].join(' ') : cl.selector_char}
                            xmlns="http://www.w3.org/2000/svg" width="60" height="40" viewBox="-99.5 0.5 400 200"><path d="M156.25 73.7c0 1.6-.612 3.2-1.825 4.425L100 132.55 45.575 78.125c-2.438-2.438-2.438-6.4 0-8.837s6.4-2.438 8.837 0L100 114.862l45.575-45.575a6.253 6.253 0 0 1 8.837 0 6.23 6.23 0 0 1 1.838 4.413z" /></svg>
                    </span>

                    {/* SELECTOR MENU */}
                    <div className={isActive ? [cl.selector_menu, cl.selector_menu_active].join(' ') : cl.selector_menu}>
                        {options.map((option, index) =>
                            <div key={option} onClick={(e) => selectOption(e, index)} className={cl.selector_option}>{option}</div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Data_selector