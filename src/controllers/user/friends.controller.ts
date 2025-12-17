import { Request, Response } from "express";
import User from '../../models/user.model'

export const sendRequestToBeFrined = async (req: Request, res: Response) => {
    try {
        const userId = res.locals.user.id;
        const { friendId } = req.body;
    
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
    try {
      const currentUserId = res.locals.user.id;
      const { reqFriendId }  = req.body;
      console.log('reqId' ,reqFriendId)
      const currentUser = await User.findById(currentUserId);
      const reqUser = await User.findById(reqFriendId);
  
      if (!currentUser || !reqUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      
      if (currentUser.friendsList.some(id => id.equals(reqUser._id))) {
        return res.status(400).json({ message: 'Users are already friends' });
      }
  
      // Если запрос существует — удаляем из массивов
      if (currentUser.friendRequestsSent.some(id => id.equals(reqUser._id))) {
        currentUser.friendRequestsSent = currentUser.friendRequestsSent.filter(
          id => !id.equals(reqUser._id)
        );
  
        reqUser.friendRequestsReceived = reqUser.friendRequestsReceived.filter(
          id => !id.equals(currentUser._id)
        );
  
        await currentUser.save();
        await reqUser.save();
  
        return res.status(200).json({ message: 'Friend request removed' });
      }
  
      res.status(400).json({ message: 'Friend request does not exist' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
// необходимо доработать логику таким образом что если пользователь отправил запрос то можно добавлять в друзья
export const addToFriend = async (req: Request, res: Response) => {
    try {
        const userId = res.locals.user.id;
        const { friendId }  = req.body;
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
export const deleteFromFriend = async (req: Request, res: Response) => {
    try {
        const currentUserId = res.locals.user.id;
        const { friendId } = req.body;

         await User.findByIdAndUpdate(
            currentUserId,
            { $pull: { friendsList: friendId}, $addToSet: { friendRequestsReceived: friendId}}
        )

         await User.findByIdAndUpdate(
            friendId,
            { $pull: { friendsList: currentUserId }, $addToSet: { friendRequestsSent: currentUserId}}
        )

        res.status(200).json({ message: 'Friend removed successfully' });
       
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}
