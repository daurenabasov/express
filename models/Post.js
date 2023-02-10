import mongoose from "mongoose";


// Схема модели
const Post = new mongoose.Schema({
    author: {
        type: String, // будет храниться в строковом значении 
        required: true // будет обязательным значением
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    picture: {
        type: String,
    },
})

// экспортируем модель ("даем название", показываем уже саму модель)
export default mongoose.model("Post", Post)