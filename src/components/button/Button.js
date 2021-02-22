import React from 'react'
import './button.css'

const types = ['solid', 'hollow']
const edges = ['sharp', 'semi', 'round']
const sizes = ['small', 'medium', 'large']
const colors = ['black', 'white']



function Button({type, edge, size, color, children}) {
    const ourType = types.includes(type) ? type: types[0]
    const ourEdge = edges.includes(edge) ? edge: edges[0]
    const ourSize = sizes.includes(size) ? size: sizes[0]
    const ourColor = colors.includes(color) ? color: colors[0]

    return (
        <button 
            className={`btn 
                        btn-${ourColor} 
                        btn-${ourType}
                        btn-${ourEdge}
                        btn-${ourSize}

            `}
        >
            {children}
        </button>
    )
}

export default Button
