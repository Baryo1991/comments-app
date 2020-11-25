import * as factoryController from './factoryController.js'
import Comment from './../models/Comment.js'
export const getAllComments = factoryController.getAll(Comment)
export const getComment = factoryController.getOne(Comment)
export const createComment = factoryController.createOne(Comment)
export const updateComment = factoryController.updateOne(Comment)
export const deleteComment = factoryController.deleteOne(Comment)