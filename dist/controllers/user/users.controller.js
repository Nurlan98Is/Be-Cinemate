"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyProfile = exports.getUserById = exports.getUsers = void 0;
const user_model_1 = __importDefault(require("../../models/user.model"));
const mongoose_1 = __importDefault(require("mongoose"));
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
    try {
        if (!res.locals.user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const profileUserId = req.params.id;
        const currentUserId = res.locals.user.id;
        const profileUser = await user_model_1.default.findById(profileUserId)
            .select('-friendsList -friendRequestsSent -friendRequestsReceived')
            .populate('favoriteSeries');
        if (!profileUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        const currentUser = await user_model_1.default.findById(currentUserId);
        if (!currentUser) {
            return res.status(404).json({ message: 'Current user not found' });
        }
        const profileUserObjectId = new mongoose_1.default.Types.ObjectId(profileUserId);
        const isFriend = currentUser.friendsList.some(id => id.equals(profileUserObjectId));
        const requestSent = currentUser.friendRequestsSent.some(id => id.equals(profileUserObjectId));
        const requestReceived = currentUser.friendRequestsReceived.some(id => id.equals(profileUserObjectId));
        res.status(200).json({
            user: profileUser,
            relation: {
                isFriend,
                requestSent,
                requestReceived,
            },
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.getUserById = getUserById;
const getMyProfile = async (req, res) => {
    const userId = res.locals.user.id;
    try {
        const myProfile = await user_model_1.default.findById(userId)
            .populate('favoriteSeries')
            .populate({
            path: 'friendsList',
            select: '_id firstName lastName nickName'
        })
            .populate({
            path: 'friendRequestsSent',
            select: '_id firstName lastName nickName'
        })
            .populate({
            path: 'friendRequestsReceived',
            select: '_id firstName lastName nickName'
        })
            .lean();
        res.status(200).json(myProfile);
    }
    catch (error) {
        console.error(error);
    }
};
exports.getMyProfile = getMyProfile;
