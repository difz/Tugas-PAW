import mongoose from "mongoose"

const noteSchema =  new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String, 
        required: true,
    },
    tags: {
        type: [String],
        default: [],
    },
    isPinned: {
        type: Boolean,
        default: false, 
    },
    userID: {
        type: String,
        required: true,
    },
    timeCreate: {
        type: Date, 
        default: Date.now(),
    }
})

const Note = mongoose.model("Note", noteSchema)

export default Note