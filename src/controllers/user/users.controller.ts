import { Request, Response } from "express";
import User from '../../models/user.model'
import mongoose from "mongoose";
import Series from "../../models/series.model";
// Получить всех пользователей или с фильтром через query-параметры
export const getUsers = async (req: Request, res: Response) => {
    const { nickName, email, firstName, lastName } = req.query;

    try {
        let query: any = {};

        if (nickName) query.nickName = nickName;
        if (email) query.email = email;
        if (firstName && lastName) {
            query.firstName = firstName;
            query.lastName = lastName;
        }

        const users = Object.keys(query).length ? await User.find(query) : await User.find({});
        if (!users || users.length === 0) {
            return res.status(404).send('User not found');
        }

        console.log('sended users', users);
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}

// Получить пользователя по ID
export const getUserById = async (req: Request, res: Response) => {
    try {
      if (!res.locals.user) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
  
      const profileUserId = req.params.id;
      const currentUserId = res.locals.user.id;
  
      const profileUser = await User.findById(profileUserId)
      .select('-friendsList -friendRequestsSent -friendRequestsReceived')
        .populate('favoriteSeries')
       
  
      if (!profileUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const currentUser = await User.findById(currentUserId);
      if (!currentUser) {
        return res.status(404).json({ message: 'Current user not found' });
      }
  
      const profileUserObjectId = new mongoose.Types.ObjectId(profileUserId);
  
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
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };

export const getMyProfile = async (req: Request, res: Response) => {
    const userId = res.locals.user.id;

    try {
        const myProfile = await User.findById(userId)
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
    } catch (error) {
        console.error(error);       
    }
}
