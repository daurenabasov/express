import * as uuid from 'uuid';
import * as path from 'path';

class FileServer {
    saveFile(file) {
        try {
            const fileName = uuid.v4() + ".jpg"
            const filePath = path.resolve("static", fileName) //  путь к диску где мы будем сохранять файлы
            file.mv(filePath)
            return fileName;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new FileServer();
