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
    
}

export const removeFromFriend = async (req: Request, res: Response) => {
    
}