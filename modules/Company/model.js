import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Company = new Schema({
    name: {
        type: String
    },
}, { timestamps: true})


export default mongoose.model('company', Company)