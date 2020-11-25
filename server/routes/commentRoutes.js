import express from 'express'
import * as controller from '../controllers/commentController.js'

const router = express.Router();

router.route('/')
    .get(controller.getAllComments)
    .post(controller.createComment)

router.route('/:id')
    .get(controller.getComment)
    .patch(controller.updateComment)
    .delete(controller.deleteComment)

export default router