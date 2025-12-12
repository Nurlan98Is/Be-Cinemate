import { Request, Response } from "express";
import User from '../../models/user.model'
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
    const userId = req.params.id;
    console.log('received id', userId);
    try {
        const user = await User.findById(userId).populate('favoriteSeries', 'title image')
        if (!user) return res.status(404).send('User not found');
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}

export const getMyProfile = async (req: Request, res: Response) => {
    const userId = res.locals.user.id;

    try {
        const myProfile = await User.findById(userId).populate('favoriteSeries').populate('friendsList').lean();

        res.status(200).json(myProfile);
    } catch (error) {
        console.error(error);       
    }
}
