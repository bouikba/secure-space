import mongoose from "mongoose"

const servicesSchema = new mongoose.Schema({
    img: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    rating: {
        type: Array,
        require: true
    },
})

export default mongoose.models.services || mongoose.model('services', servicesSchema)