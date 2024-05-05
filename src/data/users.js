import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    picture: {
        type: String,
        require: true
    },
    purchase: {
        type: Array,
        require: true
    },
    saved: {
        type: Array,
        require: true
    },
    join: {
        type: Number,
        require: true
    },
})

export default mongoose.models.users || mongoose.model('users', userSchema)