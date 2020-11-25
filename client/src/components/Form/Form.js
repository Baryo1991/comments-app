import React from 'react'
import './Form.css'
import Button from '../Button/Button'
import Input from './Input/Input'

const Form = ({onChangeHandler, handleSubmit, formConfig}) => {
    return (
        <div className = 'form-container py-1 px-2 bg-light'>
            <form className = 'form' onSubmit = {handleSubmit}>
                {
                    Object.keys(formConfig).map(config => {
                        return <Input key = {config} onChange = {onChangeHandler} {...formConfig[config]} /> 
                    })
                }
                <Button 
                    className = 'btn btn-primary' 
                    type = 'submit'>
                        Submit
                </Button>
            </form>
        </div>
    )
}

export default Form
