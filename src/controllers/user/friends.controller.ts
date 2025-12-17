import { Request, Response } from "express";
import User from '../../models/user.model'

export const sendRequestToBeFrined = async (req: Request, res: Response) => {
    try {
        const userId = res.locals.user.id;
        const { friendId } = req.body;
    
        if (userId === friendId) {
          return res.status(400).json({ message: 'You cannot add yourself' });
        }
    
        const user = await User.findById(userId);
        const friend = await User.findById(friendId);
    
        if (!user || !friend) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        if (user.friendRequestsSent.includes(friendId)) {
          return res.status(400).json({ message: 'Friend request already sent' });
        }
    
        if (user.friendsList.includes(friendId)) {
          return res.status(400).json({ message: 'Already friends' });
        }
    
        await User.findByIdAndUpdate(
          friendId,
          { $addToSet: { friendRequestsReceived: userId } }
        );
    
        await User.findByIdAndUpdate(
          userId,
          { $addToSet: { friendRequestsSent: friendId } }
        );
    
        return res.status(200).json({ message: 'Friend request sent' });
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
        console.log('Receive request in AddToFriends route:')
        console.log('userID:', userId)
        console.log('FriendsID:', friendId)
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {
                $addToSet: { friendsList: friendId },
                $pull: { friendRequestsReceived: friendId }
            },
            { new: true }
        ).populate('friendsList');

        const updatedFriend = await User.findByIdAndUpdate(
            friendId,
            {
                $addToSet: { friendsList: userId },
                $pull: { friendRequestsSent: userId }
            },
            { new: true }
        ).populate('friendsList');

        res.status(200).json({ user: updatedUser, friend: updatedFriend });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}
export const removeFromFriend = async (req: Request, res: Response) => {
    
}