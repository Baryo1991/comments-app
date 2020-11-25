import React from 'react'
import './Modal.css'
const Modal = ({children, show, toggleModalHandler}) => {
    if(!show) return null
    
    return (
        <div onClick = {toggleModalHandler} className = 'backdrop'>
            <div className = 'modal px-2 py-2'>
                {children}
            </div>
        </div>
    )
}

export default Modal
