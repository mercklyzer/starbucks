import React from 'react'
import './sidebar.css'

const themes = [
    'light',
    'dark'
]

const colors = [
    'dark-green'
]

function Sidebar({sidebarOpen, topMenu, centerMenu, bottomMenu, color, theme}) {
    const ourTopMenu = topMenu? topMenu : []
    const ourCenterMenu = centerMenu? centerMenu : []
    const ourBottomMenu = bottomMenu? bottomMenu : []
    const ourTheme = themes.includes(theme)? theme : themes[0]
    const ourColor = colors.includes(color)? color: colors[0]
    const open = sidebarOpen? 'open' : ''
    
    return (
        <div className={`sidebar-background sidebar-${ourTheme} sidebar-${ourColor} ${open}`}>
            <div className='sidebar-background-relative'>
                <div className={`sidebar-container ${open}`}>
                    <div className='sidebar-topMenu'>
                        {
                            ourTopMenu.map((item, index) => {
                                return <React.Fragment key={index}><span className='sidebar-item'>{item}</span></React.Fragment>
                            })
                        }
                    </div>
                    <div className='sidebar-centerMenu'>
                        {
                            ourCenterMenu.map((item, index) => {
                                return <React.Fragment key={index}><span className='sidebar-item'>{item}</span></React.Fragment>
                            })
                        }
                    </div>
                    <div className='sidebar-bottomMenu'>
                        {
                            ourBottomMenu.map((item, index) => {
                                return <React.Fragment key={index}><span className='sidebar-item'>{item}</span></React.Fragment>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
