import { Response, Request } from "express";
import { user } from "../db/users";
import { infoPassWordsUsers } from "../db/users";
export const authLogin = (req: Request, res: Response) => {
    const body = req.body

    const userData = user

    const infoUser = infoPassWordsUsers

    console.log('info', infoUser)

    if(body.email !== infoUser.email || body.password !== infoUser.password) {
        return res.status(200).send('Email or password invalid')
    }
    
    res.status(200).send(userData);
}