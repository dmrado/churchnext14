const nodemailer = require('nodemailer')
const mail_data = require('../config/mail_password.json')

const sendMail = async (html) => {

    let transporter = nodemailer.createTransport(mail_data)

    let result = await transporter.sendMail({
        from: `"My team" <${mail_data.auth.user}>`,
        to: mail_data.to,
        subject: "Сообщение с сайта Бейт-Иешуа",
        text: "Посетитель оставил сообщение: ",
        html: html
    });

    console.log(result);
    return {success: true, mailerMessage: `sendMail отчитался об успешной отправке`}
}
module.exports = {sendMail}

//SMTP-отправка
// Имя сервера: russian.education
// Имя пользователя: test@russian.education
// Test123Test
// Порт: 587
// Шифрование: STARTTLS
