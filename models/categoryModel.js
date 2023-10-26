import mongoose from "mongoose";


const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        // require: true,

    },

    slug: {
        type: String,
        lowercase: true,
        // require: true
    }
})

export default mongoose.model("category", categorySchema);