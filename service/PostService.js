import Post from '../models/Post.js'
import fileServer from '../media/fileServer.js';

// этот класс мы можем переиспользовать в других контроллерах

class PostService {
    async create(post, picture) {
        const fileName = fileServer.saveFile(picture)
        const createdPost = await Post.create({ ...post, picture: fileName }); // createdPost - созданный пост, параметром post - указываем в метод create()
        return createdPost; // по итогу созданный пост мы возвращаем 
    }
    async getAll() {
        const posts = await Post.find();
        return posts
    } // Функция для каждого запроса, получаем все посты
    async getOne(id) {
        if (!id) {
            throw new Error('ID is required');
        }
        const post = await Post.findById(id);
        return post
    } // функция для каждого запроса
    async update(post) {
        if (!post._id) {
            throw new Error('ID is required');
        }
        const updatePost = await Post.findByIdAndUpdate(post._id, post, {
            new: true,
        });
        return updatePost;
    } // функция для обновления
    async delete() {
        if (!id) {
            throw new Error('ID is required');
        }
        const post = await Post.findByIdAndDelete(id);
        return post
    } // функция для удаления
}


export default new PostService();