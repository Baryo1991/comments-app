import React from 'react'
import './Comments.css'
import Input from '../Form/Input/Input'
import Comment from './Comment/Comment'

const Comments = ({filterChangedHandler, comments, deleteHandler}) => {
    return (
        <div className = 'comments px-2'>
            <Input onChange = {filterChangedHandler} placeholder = 'Filter' icon = 'fas fa-search' />
                {
                    comments.map(({_id,gravatar, email, message}) => {
                        return <Comment 
                            key = {_id}
                            id = {_id}
                            gravatar = {gravatar}
                            email = {email}
                            message = {message} 
                            deleteHandler = {deleteHandler}
                        /> 
                    })
                }
        </div>
    )
}

export default Comments
