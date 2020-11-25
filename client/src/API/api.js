import axios from 'axios'
import { serverUrl } from '../config.json'

const api = axios.create({
    baseURL: serverUrl
})

export const getAll = async (endPoint, params) => {
    try {
        console.log(params)
        const { data } = await api.get(`/${endPoint}`, {
            params
        })
        if(data.status !== 'success') {
            throw new Error({ message: data.message})
        }
        return {
            [endPoint]: data.documents
        }
        
    } catch (err) {
        return {
            error: err.response && err.response.data.message ? 
            err.response.data.message: err.message
        }
    }
}

export const getOne = async (endPoint,id) => {
    try {
        const { data } = await api.get(`${serverUrl}/${endPoint}/${id}`)
        if(data.status !== 'success') {
            throw new Error({ message: data.message})
        }

        return {
            comment: data.document
        }
    } catch (err) {
        return {
            error: err.response && err.response.data.message ? 
            err.response.data.message: err.message
        }
    }
}

export const createOne = async (endPoint, newDoc) => {
    try {
        const { data } = await api.post(`${serverUrl}/${endPoint}`, newDoc)
        if(data.status !== 'success') {
            throw new Error({ message: data.message})
        }

        return {
            comment: data.document
        }
        
    } catch (err) {
        return {
            error: err.response && err.response.data.message ? 
            err.response.data.message: err.message
        }
    }
}


export const deleteOne = async (endPoint, id) => {
    try{

        const { data } = await api.delete(`${serverUrl}/${endPoint}/${id}`)
        if(data.success !== 'success') {
            throw new Error({ message: data.message})
        }

        return null;

    } catch(err) {
        return {
            error: err.response && err.response.data.message ? 
            err.response.data.message: err.message
        }
    }
}
