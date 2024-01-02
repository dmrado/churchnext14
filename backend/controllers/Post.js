const {sequelize} = require('../models')
const Admin = require("../adminModel/Admin");
const Post = sequelize.models.Post

//todo создать объект ошибки

const list = async (req, res) => {
    try {
        const {skip = 0, limit = 10} = req.query
        console.log("skip", skip, "limit", skip)
        //если нужно сортировать по updatedAt то так, иначе id
        const posts = await Post.findAll({offset: +skip, limit: +limit, order: [['updatedAt', 'DESC']]})
        const count = await Post.count()
        // console.log('posts in controller', posts)
        // console.log("All posts:", JSON.stringify(posts, null, 2));

        if (!posts) {
            return res.status(400).json({message: 'Не удалось получить статьи, попробуйте еще раз'})
        }
        return res.json({items: posts, count})
    } catch (err) {
        console.log('catch error', err)
    }
}

const getById = async (req, res) => {
    try {
        const postId = req.params.id
        // findByPk - получение по Pk- Primary key
        const post = await Post.findByPk(postId)
        if (!post) {
            return res.status(400).json({message: 'Статья не найдена'})
        }
        return res.json({item: post})
    } catch (err) {
        console.log(err)
    }
}

const create = async (req, res) => {
    try {
        // const {title = "ТАЙТЛ", text = "ТЕКСТ"} = req.body
        const {title, text, htmlBody, userId, imgLink} = req.body

        // console.log('text in controller Post', text)
        const newPost = await Post.create({title, text, htmlBody, userId, imgLink})
        // console.log('newPost in controller', newPost)
        if (!newPost) {
            return res.status(400).json({message: 'Не удалось записать пост, попробуйте еще раз'})
        }
        return res.json({item: newPost})
        //вопрос попадает ли сюда весь новый пост что бы пробросить и отрендерить его вверзу постов
    } catch (err) {
        console.log(err)
    }
}

const update = async (req, res) => {
    try {
        const postBody = {...req.body}

        const post = await Post.update(postBody, {
            where: {id: req.params.id}
        })
        res.json({item: post})
    } catch (err) {
        console.log(err)
    }
}

const remove = async (req, res) => {
    try {
        await Post.destroy({
            where: {id: req.params.id}
        })
        const unDeletedPost = await Post.findByPk(req.query.id)
        if (unDeletedPost) {
            return res.status(400).send({message: 'Не удалось удалить пост, попробуйте еще раз'})
        } else {
            return res.status(200).json({success: true})
        }
    } catch (err) {
        console.log(err)
    }
}

module.exports = {list, create, update, getById, remove}
