import React from 'react'

const Button = ({ text, color }) => {
    return (
        <button style={{ backgroundColor: color }} className='btn'>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'Default'
}

export default Button
