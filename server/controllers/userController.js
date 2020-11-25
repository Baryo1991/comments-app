import User from '../models/User.js'
import  {
    getAll,
    getOne,
    createOne,
    updateOne,
    deleteOne
} from './factoryController.js'

export const getAllUsers = getAll(User)
export const getUser = getOne(User)
export const createUser = createOne(User)
export const updateUser = updateOne(User)
export const deleteUser = deleteOne(User)

