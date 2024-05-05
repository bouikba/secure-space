import mongoose from "mongoose"

const commandsSchema = new mongoose.Schema({
    name: String,
    email: String,
    picture: String,
    address: String,
    phone: String,
    date: String,
    type: String,
    status: Number,
})

export default mongoose.models.commands || mongoose.model('commands', commandsSchema)