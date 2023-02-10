import express from 'express';
import mongoose from 'mongoose';
import Post from './models/Post.js';

const app = express();
const PORT = 2001;
// const DB_URL = `mongodb+srv:B67yC06cTJFGvbMO//dadashi:ilovereact@cluster0.p50nfgk.mongodb.net/?retryWrites=true&w=majority`
const DB_URL = `mongodb+srv://dadash_i:@cluster0.d0pqmi7.mongodb.net/?retryWrites=true&w=majority`

app.use(express.json()) // Ехress по умолчанию не может преобразовать в json формат

/**
 * @param {object, object} - req: запрос, res - ответ 
 */

// все операции с базы данных асинхронны
app.post("/", async (req, res) => {

    const { author, title, content, picture } = req.body

    const post = await Post.create({ author, title, content, picture }) // сохраняем наш пост в базу данных, в метод create передаем  обьект соотвествующий схеме  

    res.json(post) //  в функции JSON помещяем переменную post  
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true }) // mogoose.connect - для подключение базы данных, {...} - для конфигурации 
        app.listen(PORT, () => console.log("server started" + PORT))

    } catch (error) {
        console.log(`server error: ${error}`);
    }
}



startApp()

// B67yC06cTJFGvbMO
