import express from "express";
import mongoose from "mongoose";
import router from "./routes/router.js";
import fileUpload from "express-fileupload";

const app = express();
const PORT = 2001;
const DB_URL = `mongodb+srv://dadashi:ilovereact@cluster0.olg3kpv.mongodb.net/?retryWrites=true&w=majority`;

app.use(express.json()); // Ехress по умолчанию не может преобразовать в json формат
app.use(express.static("static"))
app.use(fileUpload({}));// регистрируем модуль
app.use("/api", router);


async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }); // mogoose.connect - для подключение базы данных, {...} - для конфигурации
    app.listen(PORT, () => console.log("server started" + PORT));
  } catch (error) {
    console.log(`server error: ${error}`);
  }
}

startApp();


