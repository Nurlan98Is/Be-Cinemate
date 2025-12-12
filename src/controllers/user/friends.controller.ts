import { Request, Response } from "express";
import User from '../../models/user.model'

export const sendRequestToBeFrined = async (req: Request, res: Response) => {
    try {
        const userId = res.locals.user.id;
        const { friendId } = req.body;

        const sendRequesForFriends = await User.findByIdAndUpdate(
            friendId,
            { $addToSet: { friendRequestsReceived: userId}},
            { new: true },
        ).populate('friendRequestsReceived');

        const setSendRequest = await User.findByIdAndUpdate(
            userId, 
            { $addToSet: { friendRequestsSent: friendId}},
            { new: true },
        ).populate('friendRequestsSent');
        
        res.status(200).json({ sendRequesForFriends, setSendRequest });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export const removeRequestToBeFriend = async (req: Request, res: Response) => {

}

export const addToFriend = async (req: Request, res: Response) => {
    try {
        const userId = res.locals.user.id;
        const { friendId } = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {
                $addToSet: { friendsList: friendId },
                $pull: { friendRequestsReceived: friendId }
            },
            { new: true }
        ).populate('friendsList', 'nickName email');

        const updatedFriend = await User.findByIdAndUpdate(
            friendId,
            {
                $addToSet: { friendsList: userId },
                $pull: { friendRequestsSent: userId }
            },
            { new: true }
        ).populate('friendsList', 'nickName email');

        res.status(200).json({ user: updatedUser, friend: updatedFriend });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}
export const removeFromFriend = async (req: Request, res: Response) => {
    
}