const {sendMail} = require("../utils/nodemailer");

const send = async (req, res, next) => {
    try {
        const {name, email, title, body} = req.body

        const html = `
        <h3>Имя: ${name}</h3>
        <p>email: ${email}</p>
        <p>Заголовок: ${title}</p>
        <h4>Сообщение: ${body}</h4>`

        const result = await sendMail(html)
        res.json(result)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {send}
