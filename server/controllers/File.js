const path = require("path");
const fs = require("fs");
const {sequelize} = require("../models");
const tmpPath = path.join(__dirname, "../data/tmp");
const storagePath = path.join(__dirname, "../data/storage");
const File = sequelize.models.File
const User = sequelize.models.User
const Post = sequelize.models.Post

const checkUserFolder =  (userId) => {
    const userFolderPath = path.join(storagePath, `./${userId}`);

    if (!fs.existsSync(userFolderPath)) {
        fs.mkdirSync(userFolderPath)
    }
    return userFolderPath
    //
    // if (!fs.exists(userFolderPath)) {
    //     await fs.mkdir(userFolderPath)
    // }
    // return userFolderPath
}

const uploadFile = async (req, res, next) => {
    try {
        const {file, userId} = req;
        if (!file) {
            res.status(500).json({
                message: "Необходимо выбрать файл",
            });
            return;
        }
        //originalname - это изначальное название файла, которое было при загрузке, а filename - название под которым файл сохранился во временной директории
        const {filename, originalname} = file;
        const newFileName = `${Date.now()}_${originalname}`
            .toLowerCase()
            .replace(" ", "_");
        //sourcePath - это полный путь внутри файловой системы в папку, где находится временный файл
        const sourcePath = path.join(tmpPath, "./" + filename);
        checkUserFolder(userId)
        //destPath - это полный путь внутри файловой системы в папку + название файла, куда мы хотим положить файл на постоянню основу. Папку пользователя создаем, используя его userId
        const destPath = path.join(storagePath, `./${userId}/${newFileName}`);
        //переименовываем путь с временного на постоянный
        fs.renameSync(sourcePath, destPath);

        //сохраняем в БД информацию о файле
        //path - ставим путь внутри сайта, т.е. после хоста (здесь после localhost:3001/)
        const createdFile = new File({userId, name: newFileName, path: `/storage/${userId}/${newFileName}`})

        await createdFile.save()

        res.json({
            item: createdFile
        });
    } catch (err) {
        next(err)
    }
};

// const listDir = (req, res) => {
//     const destPath = path.join(storagePath, `./${req.userId}/`)
//     fs.readdir(destPath, (err, ArrayFiles) => {
//         res.json({
//             item: {
//                 // id: 1,
//                 items: ArrayFiles
//             },
//         })
//     })
// }

const list = async (req, res, next) => {
    try {
        const {skip = 0, limit = 10} = req.query
        // const {userId} = req
        // const criteria = { userId }
        // todo как функции findAll передать два аргумента и sort -1

        // const files = await File.findAll({offset: +skip, limit: +limit})
        const files = await File.findAll()
        const count = await File.count()
        if (!files) {
            return res.status(400).json({message: 'Не удалось получить ваши файлы, попробуйте еще раз'})
        }
        res.json({items: files, count})
        console.log('files in list', files)

    } catch (err) {
        console.log('catch error', err)
        // next(err)
    }
}


const getById = async (req, res, next) => {
    try {
        const id = req.params.id
        console.log('files getById id', id)
        //todo в файле модели отсутствует Pk - id возможно поэтому грузятся все, хотя в базе он есть так как тоже сидер содержит
        res.json({item: await Post.findByPk(id)})
    } catch (err) {
        console.log('catch error', err)
        // next(err)
    }
}

// const remove = async (req, res, next) => {
//     try {
//         //строка req.params.id превращается в монгусовский айдишник с помощью mongoose.Types.ObjectId
//         const usersCount = await Users.countDocuments({avatarId: mongoose.Types.ObjectId(req.params.id)})
//         if (usersCount > 0) {
//             const error = new Error(`Файл не может быть удален. Количество пользователей файла ${usersCount}`)
//             error.statusCode = 403
//             next(error)
//             return
//         }
//         const postsCount = await Posts.countDocuments({previewId: mongoose.Types.ObjectId(req.params.id)})
//         if (postsCount > 0) {
//             const error = new Error(`Файл не может быть удален. Количество постов с этим файлом ${postsCount}`)
//             error.statusCode = 403
//             next(error)
//             return
//         }
//         //если пользователь авторизован, то req всегда содержит userId благодаря auth middlewere req.userId = decoded.data.id;
//         const deletingFile = await Files.findOneAndDelete({_id: req.params.id, userId: req.userId})
//         fs.unlinkSync(path.join(__dirname, `../data${deletingFile.path}`))
//         res.json({item: deletingFile})
//
//     } catch (err) {
//         next(err)
//     }
// }



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

module.exports = {
    tmpPath,
    storagePath,
    list,
    getById,
    uploadFile,
    checkUserFolder,
    update,
    // remove
};
