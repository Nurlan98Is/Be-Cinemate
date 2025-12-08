import { Response, Request } from "express";
import { user } from "../db/users";
import { infoPassWordsUsers } from "../db/users";
import User from "../models/user.model";

const { NODE_ENV } = process.env
export const authLogin = async (req: Request, res: Response) => {
    try {
        const userInfo = req.body
        console.log('userInfo in authLogin:', userInfo);
        const userInDB = await User.findOne({email: userInfo.email, password: userInfo.password});
    
        if (userInDB) {
            const token = userInDB.generateToken()
            console.log(token)
            res.status(200).cookie('accessToken', token, {
                httpOnly: true,
                secure: NODE_ENV === 'production',
                maxAge: 24 * 60 * 60 * 1000,
                sameSite: 'none',
            }).json(userInDB);
        } else {
            res.status(401).send('Invalid email or password');
        }

    } catch (error) {
        console.log('Error in authLogin:', error);
        res.status(500).send('Server error');
    }
}

export const authLogout = (req: Request, res: Response) => {
    res.clearCookie('accessToken', {
        httpOnly: true
    }).json({ message: 'ok' })
}
export const authRegister = async (req: Request, res: Response) => {
    const userInfoRegister = req.body
    console.log('body received:', userInfoRegister)
    try {
        const newUser = await User.create(userInfoRegister)
        res.status(201).json(newUser);
    } catch (error) {
        console.log('Error in authRegister:', error);
        res.status(500).send(error);
    }   
    
    
}