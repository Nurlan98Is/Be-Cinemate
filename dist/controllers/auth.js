"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRegister = exports.authLogout = exports.authLogin = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const { NODE_ENV } = process.env;
const authLogin = async (req, res) => {
    try {
        const userInfo = req.body;
        console.log('userInfo in authLogin:', userInfo);
        const userInDB = await user_model_1.default.findOne({ email: userInfo.email, password: userInfo.password });
        if (userInDB) {
            const token = userInDB.generateToken();
            console.log(token);
            res.status(200).cookie('accessToken', token, {
                httpOnly: true,
                secure: NODE_ENV === 'production',
                maxAge: 24 * 60 * 60 * 1000,
                sameSite: 'none',
            }).json(userInDB);
        }
        else {
            res.status(401).send('Invalid email or password');
        }
    }
    catch (error) {
        console.log('Error in authLogin:', error);
        res.status(500).send('Server error');
    }
};
exports.authLogin = authLogin;
const authLogout = (req, res) => {
    res.clearCookie('accessToken', {
        httpOnly: true
    }).json({ message: 'ok' });
};
exports.authLogout = authLogout;
const authRegister = async (req, res) => {
    const userInfoRegister = req.body;
    console.log('body received:', userInfoRegister);
    try {
        const newUser = await user_model_1.default.create(userInfoRegister);
        res.status(201).json(newUser);
    }
    catch (error) {
        console.log('Error in authRegister:', error);
        res.status(500).send(error);
    }
};
exports.authRegister = authRegister;
