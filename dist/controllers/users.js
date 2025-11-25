"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByNickName = exports.getUserById = exports.getUserBysomeInfo = exports.getAllUsers = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const getAllUsers = async (req, res) => {
    try {
        const users = await user_model_1.default.find({});
        console.log('sended users', users);
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).send('Server error');
    }
};
exports.getAllUsers = getAllUsers;
const getUserBysomeInfo = async (req, res) => {
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    console.log('received info', email, firstName, lastName);
    try {
        const findUserByEmail = await user_model_1.default.findOne({ email: email });
        const findUserByNameAndLastName = await user_model_1.default.findOne({ firstName: firstName, lastName: lastName });
        if (findUserByEmail || findUserByNameAndLastName) {
            res.status(200).json(findUserByEmail || findUserByNameAndLastName);
        }
        else {
            res.status(404).send('User not found');
        }
    }
    catch (error) {
        console.log(error);
        res.status(404).send('Request not valid');
    }
};
exports.getUserBysomeInfo = getUserBysomeInfo;
const getUserById = async (req, res) => {
    const userId = req.body.id;
    try {
        const findUserById = await user_model_1.default.findOne({ _id: userId });
        if (findUserById) {
            res.status(200).json(findUserById);
        }
        else {
            res.status(404).send('User not found');
        }
    }
    catch (error) {
        console.log(error);
        res.status(404).send('Request not valid');
    }
};
exports.getUserById = getUserById;
const getUserByNickName = async (req, res) => {
    const nickName = req.body.nickName;
    try {
        const findNickName = await user_model_1.default.findOne({ nickName: nickName });
        if (findNickName) {
            res.status(200).json(findNickName);
        }
        else {
            res.status(404).send('User not found');
        }
    }
    catch (error) {
        console.log(error);
        res.status(404).send('Request not valid');
    }
};
exports.getUserByNickName = getUserByNickName;
