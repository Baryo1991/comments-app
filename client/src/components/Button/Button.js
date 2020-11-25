import React from 'react'
import './Button.css'

const Button = ({children, type, variant = 'btn-primary'}) => {
    return (
        <button className = {`btn ${variant} py-1 px-1`}>
            {children}
        </button>
    )
}

export default Button
