"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRegister = exports.authLogout = exports.authLogin = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const { NODE_ENV } = process.env;
const authLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('Login attempt:', { email, password });
        const userInDB = await user_model_1.default.findOne({ email }).select('+password').populate('favoriteSeries').populate('friendsList').populate('friendRequestsSent').populate('friendRequestsReceived');
        if (!userInDB) {
            return res.status(401).send('User Not Found');
        }
        const isMatch = await bcryptjs_1.default.compare(password, userInDB.password);
        if (!isMatch) {
            return res.status(401).send('Invalid email or password');
        }
        const token = userInDB.generateToken();
        const { password: _, ...userData } = userInDB.toObject();
        res.status(200)
            .cookie('accessToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 24 * 60 * 60 * 1000,
            sameSite: 'none',
        })
            .json(userData);
    }
    catch (error) {
        console.error('Error in authLogin:', error);
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
    try {
        const newUser = await user_model_1.default.create(userInfoRegister);
        res.status(201).json({ status: 'ok', message: 'Пользователь успешно создан' });
    }
    catch (error) {
        console.log('Error in authRegister:', error);
        res.status(500).send(error);
    }
};
exports.authRegister = authRegister;
