import mongoose from 'mongoose'

const User = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
}, { timestamps: true })


export default mongoose.model('user', User)
