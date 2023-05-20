const mongoose = require('mongoose')
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true,'title is required']
    },
    description: {
        type: String,
        required:[true,'description is require']
    },
    image: {
        type: String,
        required:[true,'image is require']
    }
}, { timestamps: true })

const blogModel = mongoose.model("Blog", blogSchema)

export default blogModel;