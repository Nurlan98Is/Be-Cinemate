import { Response, Request } from "express";
import { user } from "../db/users";
import { infoPassWordsUsers } from "../db/users";
import User from "../models/user.model";

export const authLogin = async (req: Request, res: Response) => {
    try {
        const userInfo = req.body
        console.log('userInfo in authLogin:', userInfo);
        const userInDB = await User.findOne({email: userInfo.email, password: userInfo.password});
    
        if (userInDB) {
            res.status(200).json(userInDB);
        } else {
            res.status(401).send('Invalid email or password');
        }

    } catch (error) {
        console.log('Error in authLogin:', error);
        res.status(500).send('Server error');
    }
}

export const authRegister = async (req: Request, res: Response) => {
    const userInfoRegister = req.body

    try {
        const newUser = await User.create(userInfoRegister)
        res.status(201).json(newUser);
    } catch (error) {
        console.log('Error in authRegister:', error);
        res.status(500).send('Server error');
    }   
    
    
}