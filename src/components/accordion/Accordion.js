import React, {useState} from 'react'
import './accordion.css'

import Collapse from '../collapse/Collapse.js'

const colors =['green']

function Accordion({items, color}) {
    const ourColor = colors.includes(color)? color: colors[0]

    const length = items.length
    let initialState = []
    for(let i = 0; i < length; i++){
        initialState = [...initialState, false]
    }

    const [showState, setShowState] = useState(initialState)

    const accordionHandler = (index) => {
        let replacement = []
        for(let i = 0; i < length; i++){
            replacement = [...replacement, false]
        }
        replacement[index] = showState[index]? false: true
        setShowState(replacement)
    }

    return (
        <div className='accordion-container'>
            {
                items.map( (item,index) => {
                    console.log(item.header, index)
                    let header = item.header
                    let content = item.content

                    return (<Collapse
                        alignment='left' 
                        color='green'
                        maxWidth='100%'
                        index={index}
                        isActive={showState[index]}
                        accordionHandler = {accordionHandler}
                    >
                    {
                        {header: header,
                        content: content
                        }
                    }
                    </Collapse>)
                })
            }
        </div>
    )
}

export default Accordion
