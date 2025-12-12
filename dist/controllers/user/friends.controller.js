"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFromFriend = exports.addToFriend = exports.removeRequestToBeFriend = exports.sendRequestToBeFrined = void 0;
const user_model_1 = __importDefault(require("../../models/user.model"));
const sendRequestToBeFrined = async (req, res) => {
    try {
        const userId = res.locals.user.id;
        const { friendId } = req.body;
        const sendRequesForFriends = await user_model_1.default.findByIdAndUpdate(friendId, { $addToSet: { friendRequestsReceived: userId } }, { new: true }).populate('friendRequestsReceived');
        const setSendRequest = await user_model_1.default.findByIdAndUpdate(userId, { $addToSet: { friendRequestsSent: friendId } }, { new: true }).populate('friendRequestsSent');
        res.status(200).json({ sendRequesForFriends, setSendRequest });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.sendRequestToBeFrined = sendRequestToBeFrined;
const removeRequestToBeFriend = async (req, res) => {
};
exports.removeRequestToBeFriend = removeRequestToBeFriend;
const addToFriend = async (req, res) => {
    try {
        const userId = res.locals.user.id;
        const { friendId } = req.body;
        const updatedUser = await user_model_1.default.findByIdAndUpdate(userId, {
            $addToSet: { friendsList: friendId },
            $pull: { friendRequestsReceived: friendId }
        }, { new: true }).populate('friendsList', 'nickName email');
        const updatedFriend = await user_model_1.default.findByIdAndUpdate(friendId, {
            $addToSet: { friendsList: userId },
            $pull: { friendRequestsSent: userId }
        }, { new: true }).populate('friendsList', 'nickName email');
        res.status(200).json({ user: updatedUser, friend: updatedFriend });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.addToFriend = addToFriend;
const removeFromFriend = async (req, res) => {
};
exports.removeFromFriend = removeFromFriend;
