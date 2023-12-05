const {sendMail} = require("../utils/nodemailer");

const send = async (req, res, next) => {
    try {
        const {name, district, christianity, phone} = req.body

        const html = `
        <h3>Имя: ${name}</h3>
        <p>Район проживания: ${district}</p>
        <p>Отношение к христианству: ${christianity}</p>
        <h4>Телефон: ${phone}</h4>`

        const result = await sendMail(html)
        res.json(result)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {send}
