import React from 'react'

const Button = ({ text, color,onClick }) => {
    return (
        <button style={{ backgroundColor: color }} className='btn' onClick={onClick}>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'Default'
}

export default Button
