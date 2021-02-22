import React from 'react'
import './icon.css'

function Icon({children}) {
    return (
        <div className='icon-container'>
            <div className='icon'>
                {children}
            </div>
        </div>
    )
}

export default Icon
