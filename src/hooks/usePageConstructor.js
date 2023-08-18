import React, { useEffect } from 'react'

const usePageConstructor = (cl, setPages, elements, containerRef) => {

    useEffect(() => {
        const containerHeight = containerRef.current.offsetHeight
        const containerClass = containerRef.current.classList.value
        const defaultElements = [...elements];
        let elementHeight = 0
        let currentPage = 0;
        let currentPageHeight = 0;
        let pagesConstructor = [[],]
         
        defaultElements.forEach((element, index) => {
            const elementDOM = document.body.querySelector(`.${containerClass}>div:nth-child(${index + 1})`);
            const elementDOMchild = document.body.querySelector(`.${containerClass}>div:nth-child(${index + 1})>*`);

            let hasMargin = elementDOMchild.classList.contains(cl.bottom_margin)
            let elementStyle

            console.log(`
            ДАННЫЕ НА ИТЕРАЦИЮ ЦИКЛА №${index}:

            Высота контейнера: ${containerHeight}
            Текущая высота страницы: ${currentPageHeight}
            Высота текущего элемента: ${elementHeight}
            Наличие margin: ${hasMargin}
            `)
            
            if (hasMargin) {
                elementStyle = window.getComputedStyle(elementDOMchild, null);
                elementHeight = elementDOM.offsetHeight + parseFloat(elementStyle.marginBottom);
            }
            else {
                elementHeight = elementDOM.offsetHeight
            }

            if (currentPageHeight + elementHeight > containerHeight) {
                currentPage++;
                currentPageHeight = 0;

                console.log('NEW PAGE')
            }

            if (!pagesConstructor[currentPage]) {
                pagesConstructor[currentPage] = [];
            }

            pagesConstructor[currentPage].push(element)
            currentPageHeight += elementHeight
        })
        setPages(pagesConstructor)
    }, [])

    console.log('loop end')
}

export default usePageConstructor