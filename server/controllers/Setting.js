const path = require("path");
const fs = require("fs");
const {sequelize} = require("../models");
const tmpPath = path.join(__dirname, "../data/tmp");
const storagePath = path.join(__dirname, "../data/storage");
const Setting = sequelize.models.Setting


const destPath = path.join(storagePath, './main-banner.jpg')

const uploadFile = async (req, res, next) => {
    try {
        const {file} = req;
        if (!file) {
            res.status(500).json({
                message: "Необходимо выбрать файл",
            });
            return;
        }
        //originalname - это изначальное название файла, которое было при загрузке, а filename - название под которым файл сохранился во временной директории
        const {filename, originalname} = file;

        //sourcePath - это полный путь внутри файловой системы в папку, где находится временный файл
        const sourcePath = path.join(tmpPath, "./" + filename);
        //если файл есть мы его удаляем и далее перезапишем
        if (fs.existsSync(destPath)) {
            fs.unlinkSync(destPath)
        }

        //переименовываем путь с временного на постоянный
        fs.renameSync(sourcePath, destPath);

        //сохраняем в БД информацию о файле
        //path - ставим путь внутри сайта, т.е. после хоста (здесь после localhost:3001/)

        res.json({
            success: true
        });
    } catch (err) {
        next(err)
    }
}

const getByName = async (req, res, next) => {
    try {
        const setting = await Setting.findOne({
            where: {setting_name: req.params.name}
        })
        if (!setting) {
            return res.status(400).json({message: 'Не удалось получить данные, попробуйте еще раз'})
        }
        res.json({item: setting })
        console.log('setting in the list-function', setting)

    } catch (err) {
        console.log('catch error', err)
        // next(err)
    }
}

//обновляем настройку в модели на true||false
const update = async (req, res) => {
    try {
        const setting = await Setting.findOne({
            where: {setting_name: req.params.name}
        })
        if (!setting) {
            return res.status(400).json({message: 'Не удалось получить данные, попробуйте еще раз'})
        }
        setting.setting_value = req.body.setting_value
        await setting.save()
        res.json({item: setting })
    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    tmpPath,
    storagePath,
    uploadFile,
    getByName,
    update
};
