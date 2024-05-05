import mongoose from "mongoose"

const productsSchema = new mongoose.Schema({
    collection: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    price: {
        type: Number,
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

export default mongoose.models.products || mongoose.model('products', productsSchema)