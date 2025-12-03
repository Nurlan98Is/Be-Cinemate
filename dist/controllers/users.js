"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getUsers = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
// Получить всех пользователей или с фильтром через query-параметры
const getUsers = async (req, res) => {
    const { nickName, email, firstName, lastName } = req.query;
    try {
        let query = {};
        if (nickName)
            query.nickName = nickName;
        if (email)
            query.email = email;
        if (firstName && lastName) {
            query.firstName = firstName;
            query.lastName = lastName;
        }
        const users = Object.keys(query).length ? await user_model_1.default.find(query) : await user_model_1.default.find({});
        if (!users || users.length === 0) {
            return res.status(404).send('User not found');
        }
        console.log('sended users', users);
        res.status(200).json(users);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};
exports.getUsers = getUsers;
// Получить пользователя по ID
const getUserById = async (req, res) => {
    const userId = req.params.id;
    console.log('received id', userId);
    try {
        const user = await user_model_1.default.findById(userId);
        if (!user)
            return res.status(404).send('User not found');
        res.status(200).json(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};
exports.getUserById = getUserById;
