import React, {useState} from 'react'
import './collapse.css'
import Arrow from '../../images/collapse/downward-arrow-icon.svg'
import Instagram from '../../images/collapse/instagram-logo.svg'


const colors = ['green']

const alignments = ['left', 'right', 'center', 'justify']

function Collapse({alignment, color, theme, maxWidth, children, accordionHandler, index, isActive}) {
    const ourAlignmenet = alignments.includes(alignment)? alignment: alignments[0]
    const ourColor = colors.includes(color)? color: colors[0]
    const ourMaxWidth = maxWidth? maxWidth : '100%'
    const {header, content} = children

    // STATE
    
    const [active, setActive] = useState(false)
    const clickHandler = () => {
        if(accordionHandler){
            accordionHandler(index)
        }
        else{
            setActive(!active)
        }
    }
    let show = ''
    if(!accordionHandler){
        show = active? 'show' : ''
    }
    else{
        show = isActive? 'show' : ''
    }
    
    return (
        <div className={`collapse-container collapse-${ourColor}`} 
            style={{maxWidth: ourMaxWidth}}
        >
            <div className={`collapse-header-container ${show}`} onClick={clickHandler}>
                <div className={`collapse-header ${show}`}>{header}</div>
                <img src={Arrow} className={`collapse-header-button ${show}`} />
            </div>
            <div className={`collapse-content-container ${show}`}>
                <div className={`collapse-content`}>{content}</div>
            </div>
        </div>
    )
}

export default Collapse
