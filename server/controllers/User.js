const {sequelize} = require('../models')
const User = sequelize.models.User

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const { JWT_SECRET } = require('../server/.env');
const EXPIRES = 7 * 24 * 3600000;

const login = async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({

        //начинаем отсюда, хендлер на фронте и раут в апп прописаны вспоминаем как лошгиниться
        where: {
            email: email
        }
    })
    if (!user) {
        return res.status(400).json({message: 'Посторонним вход воспрещен.'})
    }
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        return res.status(400).json({message: 'Неверное имя пользователя или пароль'})
    }
    const token = jwt.sign(
        {userId: user.id},
        process.env.JWT_SECRET,
        {expiresIn: '3h'}
    )
    res.json({token, userId: user.id})

}
module.exports = {login}


//++++++++++++++++++++++++++ВНИМАНИЕ СЮДА++++++++++++++++++++++++

//блок ниже из mongo-вского проекта
// const _sendError = (message = 'Invalid email/password!!!', status = 400) => {
//     const err = new Error(message);
//     //добавляем еще одно свойство statusCode объекту err
//     err.statusCode = status;
//     //летит в app.js в строку const { statusCode = 500, message } = err; если statusCode не передан, то будт 500-ая ошибка
//     throw err;
// };
//
// const login = async (req, res, next) => {
//     try {
//         const { email, password } = req.body;
//         if (!email || !password) {
//             return _sendError();
//         }
//
//         const admin = await Admin.findOne({ email });
//
//         if (!admin) {
//             return _sendError();
//         }
//
//         if (!bcrypt.compareSync(password, admin.password)) {
//             return _sendError();
//         }
//
//         const cookieExp = Date.now() + EXPIRES;
//
//         const token = jwt.sign(
//             {
//                 exp: Math.floor(cookieExp / 1000),
//                 data: { id: admin._id, role: admin.role },
//             },
//             JWT_SECRET
//         );
//
//         res.json({
//             success: true,
//             expires: Math.floor(cookieExp / 1000),
//             token,
//         });
//     } catch (err) {
//         next(err);
//     }
// };
//
// const logout = (reg, res) => {
//     // @todo: add log
//     res.send({ success: true });
// };
//
// module.exports = {
//     login,
//     logout,
// };
//
