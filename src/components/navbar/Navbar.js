import React, {useState, useEffect} from 'react'
import Hamburger from '../hamburger/Hamburger.js'
import Sidebar from '../sidebar/Sidebar.js'
import './navbar.css'

const themes = [
    'light',
    'dark'
]

const colors = [
    'dark-green'
]

const breakPoints = [
    'phone',
    'tablet'
]

function Navbar({brand, theme, color, height, leftMenu, centerMenu, rightMenu, breakPoint}) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    useEffect( () => {
        if(sidebarOpen)
        document.getElementsByTagName('body')[0].classList.add('hold')
        else
            document.getElementsByTagName('body')[0].classList.remove('hold')
    },[sidebarOpen])

    const sidebarOpenHandler = () => {
        setSidebarOpen(!sidebarOpen)
    }

    let ourTheme = themes.includes(theme)? theme : themes[0]
    let ourColor = colors.includes(color)? color: colors[0]
    let ourHeight = height? height: '46px'
    let ourLeftMenu = leftMenu? leftMenu : []
    let ourCenterMenu = centerMenu? centerMenu : []
    let ourRightMenu = rightMenu? rightMenu : []
    let ourBreakPoint = breakPoints.includes(breakPoint)? breakPoint : breakPoints[0]

    return (
        <div className={`navbar nav-${ourTheme} nav-${ourColor} nav-${ourBreakPoint}`} style={{minHeight: ourHeight}}>
            <div className={`left-menu`} >
                {brand && <img src={brand} className={`brand`} style={{height:ourHeight}}/>}
                <div className={`items-container`}>
                    {ourLeftMenu.map((item, index) => {
                        return <React.Fragment key={index}><span className={`nav-item`}>{item}</span></React.Fragment>
                    })}
                </div>
            </div>
            <div className={`center-menu`}>
                <div className={`items-container`}>
                    {ourCenterMenu.map((item, index) => {
                        return <React.Fragment key={index}><span className={`nav-item`}>{item}</span></React.Fragment>
                    })}
                </div>
            </div>
            <div className={`right-menu`}>
                <div className={`items-container`}>
                    {ourRightMenu.map((item, index) => {
                        return <React.Fragment key={index}><span className={`nav-item`}>{item}</span></React.Fragment>
                    })}
                </div>
            </div>

            <Hamburger 
                sidebarOpen={sidebarOpen} 
                sidebarOpenHandler={sidebarOpenHandler} 
                size='small' 
                theme={theme}
                breakPoint = {ourBreakPoint}
            />

            <Sidebar 
                topMenu={ourLeftMenu}
                centerMenu={ourCenterMenu}
                bottomMenu={ourRightMenu}
                sidebarOpen={sidebarOpen}
                color={`${ourColor}`}
                theme={`${ourTheme}`}
            />
        </div>
    )
}

export default Navbar
