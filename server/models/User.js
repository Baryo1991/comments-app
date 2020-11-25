import mongoose from 'mongoose'
import validator from 'validator'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        validate: [validator.isEmail, 'Invalid email'],
        required: [true, 'Email is required'],
        unique: true,
        index: {
            unique: true
        }
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
        minlength: [6, 'Message length must be above 6 characters']
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema);

export default User