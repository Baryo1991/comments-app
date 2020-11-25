import React from 'react'
import './Input.css'
import propTypes from 'prop-types'

const Input = (props, icon) => {
    const type = props.type ? props.type : 'text';
    let displayInput = null;
    
    switch(type){
        case 'text':
            displayInput = (
                <div className = 'input-container my-1'>
                    <input className = 'py-1 px-1' {...props} /> 
                    {props.icon && <i className = {props.icon}></i>}
                </div>
            )
            break;
        case 'textarea': 
            displayInput = (
                <div className = 'input-container my-1'>
                    <textarea className = 'py-1 px-1' {...props}></textarea>                    
                </div>
            )
            break;
        default: 
            displayInput = (
                <div className = 'input-container my-1'>
                    <input className = 'py-1 px-1' {...props} /> 
                </div>
            )
            break;
    }

    return (
        <>
            {displayInput}
        </>
    )
}

export default Input
