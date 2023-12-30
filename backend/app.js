require('dotenv').config()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3005
const cors = require('cors')
const multer = require('multer')

//todo проверить почему ниже работает если названия контроллеров в файловой системе с заглавной буквы а в путях здесь - с прописной
const postController = require('./controllers/Post')
const fileController = require('./controllers/File')
const authController = require('./controllers/auth')
const {userInfo, isPrivate} = require("./controllers/auth")
const mailController = require('./controllers/Mail')
const mailContactsController = require('./controllers/MailContacts')
const settingController = require('./controllers/Setting')

const upload = multer({dest: fileController.tmpPath})

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('public'));
app.use('/storage', express.static('data/storage'))
app.use(express.json({extended: true}))
app.use(cookieParser())
app.use(userInfo)
// //когда пользователь авторизован, то req.userId в middleware/auth образуется какое-то число или hash, а если токен не отправлялся значит req.userId пустой
// app.use(AuthMiddleware.userInfo)

//auth если юзер авторизован, то далее во всех адресах доступен req.userId это возвражает нам функция app.use(authController.userInfo) -> authController 67 строка
app.use(authController.userInfo)

app.get('/', (req, res) => {
    res.send('Server Index Page')
})

//admin auth
app.post('/login', authController.login)
app.get('/logout', authController.logout)
//my в этом проекте функци ниже отсутствуют
// app.post("/user/login", userController.login)
// app.post("/user/register", userController.register)

//блог пастора - размещение постов без коментариев
//здесь req.query незримо содержит часть строки запроса после вопросительного знака
app.get('/posts', postController.list)
app.get('/posts/:id', postController.getById)
app.post('/posts', isPrivate, postController.create)
app.put('/posts/:id', isPrivate, postController.update)
//req.params - это динамическая часть пути :id
app.delete('/posts/:id',  postController.remove)

//files Api
app.post('/files/upload', isPrivate, upload.single('file'), fileController.uploadFile)
app.get('/files', isPrivate, fileController.list)

//mail Api
app.post('/mail', mailController.send)
app.post('/mailContacts', mailContactsController.send)

//баннер новостей церкви и событий
app.post('/files/upload-main-banner', isPrivate, upload.single('file'), settingController.uploadFile)
app.get('/settings/:name', settingController.getByName)
app.put('/settings/:name', isPrivate, settingController.update)


app.listen(PORT, () => {
    console.log(`>> >>> app started on port ${PORT}`)
})

