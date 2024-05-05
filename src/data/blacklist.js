import mongoose from "mongoose"

const blackListSchema = new mongoose.Schema({
    email: String,
})

export default mongoose.models.blacklist || mongoose.model('blacklist', blackListSchema)