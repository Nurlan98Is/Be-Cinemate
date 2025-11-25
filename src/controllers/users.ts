import { Request, Response } from "express";
import User from '../models/user.model'

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find({});
        console.log('sended users', users);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send('Server error');
    }
}

export const getUserBysomeInfo = async (req: Request, res: Response) => {
    
    const email= req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    console.log('received info', email, firstName, lastName);
    try {
        const findUserByEmail = await User.findOne({email: email});

        const findUserByNameAndLastName = await User.findOne({firstName: firstName, lastName: lastName});
        if(findUserByEmail || findUserByNameAndLastName) {
            res.status(200).json(findUserByEmail || findUserByNameAndLastName);
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.log(error);
        res.status(404).send('Request not valid');
    }
}

export const getUserById = async (req: Request, res: Response) => {
    const userId = req.body.id;

    try {
        const findUserById = await User.findOne({_id: userId});
        if (findUserById) {
            res.status(200).json(findUserById);

        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.log(error);
        res.status(404).send('Request not valid');
    }
}

export const getUserByNickName = async (req: Request, res: Response) => {
    const nickName = req.body.nickName;

    try {
        const findNickName = await User.findOne({nickName: nickName});
        if (findNickName) {
            res.status(200).json(findNickName);
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.log(error);
        res.status(404).send('Request not valid');
    }
}