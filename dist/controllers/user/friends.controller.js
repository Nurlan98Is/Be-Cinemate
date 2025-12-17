"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFromFriend = exports.addToFriend = exports.removeRequestToBeFriend = exports.sendRequestToBeFrined = void 0;
const user_model_1 = __importDefault(require("../../models/user.model"));
const sendRequestToBeFrined = async (req, res) => {
    try {
        const userId = res.locals.user.id;
        const { friendId } = req.body;
        const user = await user_model_1.default.findById(userId);
        const friend = await user_model_1.default.findById(friendId);
        if (!user || !friend) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (user.friendRequestsSent.includes(friendId)) {
            return res.status(400).json({ message: 'Friend request already sent' });
        }
        if (user.friendsList.includes(friendId)) {
            return res.status(400).json({ message: 'Already friends' });
        }
        await user_model_1.default.findByIdAndUpdate(friendId, { $addToSet: { friendRequestsReceived: userId } });
        await user_model_1.default.findByIdAndUpdate(userId, { $addToSet: { friendRequestsSent: friendId } });
        return res.status(200).json({ message: 'Friend request sent' });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.sendRequestToBeFrined = sendRequestToBeFrined;
const removeRequestToBeFriend = async (req, res) => {
    try {
        const currentUserId = res.locals.user.id;
        const { reqFriendId } = req.body;
        console.log('reqId', reqFriendId);
        const currentUser = await user_model_1.default.findById(currentUserId);
        const reqUser = await user_model_1.default.findById(reqFriendId);
        if (!currentUser || !reqUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (currentUser.friendsList.some(id => id.equals(reqUser._id))) {
            return res.status(400).json({ message: 'Users are already friends' });
        }
        // Если запрос существует — удаляем из массивов
        if (currentUser.friendRequestsSent.some(id => id.equals(reqUser._id))) {
            currentUser.friendRequestsSent = currentUser.friendRequestsSent.filter(id => !id.equals(reqUser._id));
            reqUser.friendRequestsReceived = reqUser.friendRequestsReceived.filter(id => !id.equals(currentUser._id));
            await currentUser.save();
            await reqUser.save();
            return res.status(200).json({ message: 'Friend request removed' });
        }
        res.status(400).json({ message: 'Friend request does not exist' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.removeRequestToBeFriend = removeRequestToBeFriend;
// необходимо доработать логику таким образом что если пользователь отправил запрос то можно добавлять в друзья
const addToFriend = async (req, res) => {
    try {
        const userId = res.locals.user.id;
        const { friendId } = req.body;
        console.log('Receive request in AddToFriends route:');
        console.log('userID:', userId);
        console.log('FriendsID:', friendId);
        const updatedUser = await user_model_1.default.findByIdAndUpdate(userId, {
            $addToSet: { friendsList: friendId },
            $pull: { friendRequestsReceived: friendId }
        }, { new: true }).populate('friendsList');
        const updatedFriend = await user_model_1.default.findByIdAndUpdate(friendId, {
            $addToSet: { friendsList: userId },
            $pull: { friendRequestsSent: userId }
        }, { new: true }).populate('friendsList');
        res.status(200).json({ user: updatedUser, friend: updatedFriend });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.addToFriend = addToFriend;
const deleteFromFriend = async (req, res) => {
    try {
        const currentUserId = res.locals.user.id;
        const { friendId } = req.body;
        await user_model_1.default.findByIdAndUpdate(currentUserId, { $pull: { friendsList: friendId }, $addToSet: { friendRequestsReceived: friendId } });
        await user_model_1.default.findByIdAndUpdate(friendId, { $pull: { friendsList: currentUserId }, $addToSet: { friendRequestsSent: currentUserId } });
        res.status(200).json({ message: 'Friend removed successfully' });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.deleteFromFriend = deleteFromFriend;
