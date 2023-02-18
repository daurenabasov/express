import Post from "../models/Post.js";
import PostService from "../service/PostService.js";

class PostController {
  /**
   * @param {object, object} - req: запрос, res - ответ
   */

  // все операции с базы данных асинхронны

  async create(req, res) {
    // вместо того чтобы создавать пост внутри контроллера, мы просто дергаем метод у сервиса PostService

    try {
      const post = await PostService.create(req.body, req.files.picture); // в create передаем пост который мы получаем в теле запроса 
      res.json(post); //  в функции JSON помещяем переменную post
    } catch (error) {
      res.status(500).json(error); // парсим ошибку в формате JSON
    }
  }
  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      return res.json(posts);
    } catch (error) {
      res.status(500).json(error); // парсим ошибку в формате JSON
    }
  } // Функция для каждого запроса, получаем все посты
  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);
      return res.json(post);
    } catch (error) {
      res.status(500).json(error); // парсим ошибку в формате JSON
    }
  } // функция для каждого запроса
  async update(req, res) {
    try {
      const updatePost = await PostService.update(req.body);
      return res.json(updatePost);
    } catch (error) {
      res.status(500).json(error.message); // парсим ошибку в формате JSON
    }
  } // функция для обновления
  async delete(req, res) {
    try {
      const post = await PostService.create(req.params.id);
      return res.json(post);
    } catch (error) {
      res.status(500).json(error); // парсим ошибку в формате JSON
    }
  } // функция для удаления
}

export default new PostController();
