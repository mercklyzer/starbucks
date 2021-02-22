import React from 'react'
import './billboard.css'

const breakPoints = ['phone', 'tablet']
const arrangements = ['image', 'text']
const colors = ['indigo', 'dark-green', 'dark-dark-green', 'success']

function Billboard({breakPoint, arrangement, children, image, margin, color}) {
    const ourBreakPoint = breakPoints.includes(breakPoint) ? breakPoint : breakPoints[0]
    const ourArrangement = arrangements.includes(arrangement) ? arrangement : arrangements[0]
    const ourMargin = margin? margin: '0px'
    const ourColor = colors.includes(color)? color: colors[0]

    const billboardStyle = {
        margin: ourMargin
    }

    return (
        <div  className={`billboard-container billboard-${ourArrangement} billboard-${ourColor}`} style={billboardStyle}>
            {
                ourArrangement == 'text' &&
                <div className='billboard-text-container'>
                    {children}
                </div>
            }

            {   image &&
                <div className='billboard-image-container'>
                    <img src={image} className='billboard-image'/>
                </div>
            }

            {
                ourArrangement == 'image' &&
                <div className='billboard-text-container'>
                    {children}
                </div>
            }
        </div>
    )
}

export default Billboard
