import mongoose from 'mongoose'
import validator from 'validator'
import gravatar from 'gravatar';

const commentSchema = new mongoose.Schema({
    email: {
        type: String, 
        validate: [validator.isEmail, 'Invalid email'],
        required: [true, 'Email is required'],
        unique: false
    }, 
    message: {
        type: String,
        required: [true, 'Message is required'],
        minlength: [6, 'Message length must be above 6 characters']
    },
    gravatar: String 
}, {
    timestamps: true
})

commentSchema.pre('save', function(next) {
    if(this.isNew) {
        this.gravatar = gravatar.url(this.email, {s: '400', r: 'x', d: 'retro'}, false)
    }
    next() 
})

const Comment = mongoose.model('Comment', commentSchema);

export default Comment