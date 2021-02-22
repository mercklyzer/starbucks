import React from 'react'
import './hamburger.css'

const sizes = ['small', 'medium']
const themes = ['light', 'dark']
const breakPoints = ['phone', 'tablet']

function Hamburger({sidebarOpen, sidebarOpenHandler, size, theme, breakPoint}) {
    let openClass = sidebarOpen? 'open':''
    let ourSize = sizes.includes(size)? size:sizes[0]
    let ourTheme = themes.includes(theme)? theme:themes[0]
    let ourBreakPoint = breakPoints.includes(breakPoint)? breakPoint : breakPoints[0]

    return (
        <div className={`hamburger-container ${openClass} ${ourSize} hamburger-${ourBreakPoint}`} onClick={sidebarOpenHandler}>
            <div className={`hamburger-line ${ourSize} nav-${ourTheme}`}></div>
        </div>
    )
}

export default Hamburger
