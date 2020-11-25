import React from 'react'
import './Message.css'
import propTypes from 'prop-types'

const Message = ({ variant, children = ''}) => {
    return (
        <div className = {`py-2 px-2 my-1 message ${variant}`}>
            {children}
        </div>
    )
}

Message.defaultProps = {
    variant: 'success'
}

export default Message
