import { Schema, model } from "mongoose";

const schema = new Schema({
    path: {
        type: String,
        resuired: [true, 'Path is required']
    },
    fileName: {
        type: String,
        required: ['true',"Filename is required"]
    },
    fileType: {
        type: String,
        required: [true,'File type is required']
    }
})

export default model('uploads', schema)