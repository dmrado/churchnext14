const Admin = require("../adminModel/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const _sendError = (res, message = "Invalid email/password!!!") => {
    return res.json({
        success: false,
        message,
    });
};

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return _sendError(res);
    }

    const admin = await Admin.findOne({ email })

    if (!admin) {
        return _sendError(res);
    }

    if (!bcrypt.compareSync(password, admin.password)) {
        return _sendError(res);
    }

    const cookieExp = Date.now() + 7 * 24 * 3600000;

    const token = jwt.sign(
        {
            exp: Math.floor(cookieExp / 1000),
            data: { id: admin._id },
        },
        process.env.JWT_SECRET
    );

    res.cookie("token", token, {
        expires: new Date(cookieExp),
        httpOnly: true,
    });

    res.json({
        success: true,
        expires: Math.floor(cookieExp / 1000),
        token,
    });
};

const logout = (reg, res) => {
    res.cookie("token", "", {
        expires: new Date(Date.now() - 24 * 3600000),
        httpOnly: true,
    });
    res.send({ success: true });
};

const userInfo = (req, res, next) => {
    let { token } = req.cookies;
    const { authorization } = req.headers;
    if (!token && authorization && authorization.split(" ")[0] === "Bearer") {
        token = authorization.split(" ")[1];
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (!err) {
            req.userId = decoded.data.id;
        }
        next();
    });
};

const isPrivate = (req, res, next) => {
    if (!req.userId) {
        return _sendError(res, "Access is denied");
    }
    next();
};

module.exports = {
    login,
    logout,
    userInfo,
    isPrivate,
};
