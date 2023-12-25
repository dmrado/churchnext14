const bcrypt = require("bcrypt");
const saltRounds = 10;
//это модеель для авторизации только админа без использования базы данных id, email и пароль приходят из .env и сравниваются с id, email из params. Пароль хешируется здесь же и все отдается во вне и используется в auth-контроллере
const Admin = {
    findOne: (params) => {
        const { email, id } = params;
        if (!email && !id) {
            return null;
        }
        if (email && email !== process.env.USER_EMAIL) {
            return null;
        }
        if (id && id !== 1) {
            return null;
        }
        return {
            _id: 1,
            email: process.env.USER_EMAIL,
            password: bcrypt.hashSync(process.env.USER_PASSWORD, saltRounds),
        };
    },
};

module.exports = Admin;
