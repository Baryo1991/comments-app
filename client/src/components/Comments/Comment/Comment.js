import React, {useState} from 'react'
import Modal from '../../Modal/Modal'
import './Comment.css'

const Comment = ({id, gravatar, email, message, deleteHandler}) => {
    const [showModal, setShowModal] = useState(false)

    const toggleModalHandler = () => {
        setShowModal(!showModal)
    }
    return (
        <div className = 'comment my-2 py-1 px-2'>
            <button onClick = {() => deleteHandler(id)} className = 'btn-delete'>
                <i className = 'fas fa-times'></i>
            </button>
            <Modal show = {showModal} toggleModalHandler = {toggleModalHandler}>{email}</Modal>

            <div onClick = {toggleModalHandler} className = 'gravatar-container'>
                <img src = {gravatar} alt = {email} /> 
            </div>
            <span className = 'comment-details'>
                <strong>{email}</strong>
                <p className = 'comment-message'>{message}</p>
            </span>
        </div>
    )
}

export default Comment
