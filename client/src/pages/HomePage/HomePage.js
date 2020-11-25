import React, {useState, useEffect} from 'react'
import './HomePage.css'
import Form from '../../components/Form/Form'
import Message from '../../components/Message/Message'
import Comments from '../../components/Comments/Comments'
import * as API from './../../API/api'
import Loading from './../../components/Loading/Loading'

const HomePage = () => {
    const [filter, setFilter] = useState('');
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true) 
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');

    const [formConfig, setFormConfig] = useState({
        email: {
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            required: true,
            value: ''
        },
        message: {
            name: 'message',
            type: 'textarea',
            placeholder: 'Message',
            required: true,
            value: '',
            rows: '3',
            cols: '50'
        }
    })

    const showError = error => {
        setError(error)
        setTimeout(() => {
            setError(null);
        }, 2500);
    }

    const showMessage = msg => {
        setMessage(msg);
        setTimeout(() => {
            setMessage('');
        }, 2000);
    }

    
    useEffect(() => {
        setLoading(true)
        const fetchComments = async () => {
            const search = filter.length > 2 ? { search: filter } : undefined
            const { error, comments} = await API.getAll('comments', search)
            if(error) {
                showError(error)
                return;
            }
            setComments(comments);
        }
        fetchComments();
        setLoading(false)
    }, [filter])

    const onChangeHandler = ({ target }) => {
        const name = target.name;
        const value = target.value; 
        setFormConfig(prevState => ({
            ...prevState,
            [name]: {
                ...prevState[name],
                value
            }
        }))
    }

    const deleteHandler = (id) => {
        console.log(id)
        setLoading(true)
        const { error} = API.deleteOne('comments', id);
        setLoading(false)
        if(error){
            showError(error);
            return;
        }
        
        //Deleted comments localy...
        let updatedComments = [...comments]
        updatedComments = updatedComments.filter(comment => comment._id !== id);
        setComments(prevState => (
            updatedComments
        ))

        showMessage("Comment deleted successfully");

    }

    const filterChangedHandler = ({target: {value}}) => {
        setFilter(value);
    }

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        const newComment = {
            email: formConfig.email.value,
            message: formConfig.message.value
        }

        const { error, comment} = await API.createOne('comments', newComment)
        setLoading(false)

        if(error) {
            showError(error)
            return;
        }

        formConfig.email.value = ''
        formConfig.message.value = ''

        setComments(prevState => (
            [
                ...prevState,
                comment
            ]
        ))

        

        
        showMessage('Comment added successfully');
    }


    return (
        <div className = 'home-page'>
            <h1 className = 'my-2'>Comments App</h1>
            {message && !error && <Message >{message}</Message>}
            {error && !message && <Message variant = 'danger'>{error}</Message>}
            <Form 
                formConfig = {formConfig}
                handleSubmit = {handleSubmit}
                onChangeHandler = {onChangeHandler}
                /> 
            {loading && <Loading />}
            <Comments 
                comments = {comments}
                filterChangedHandler = {filterChangedHandler}
                deleteHandler = {deleteHandler}
            /> 
        </div>
    )
}

export default HomePage
