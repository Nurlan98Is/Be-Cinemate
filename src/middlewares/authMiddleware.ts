import { Response, Request, NextFunction } from "express";
import jwt from 'jsonwebtoken'


export default (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.accessToken

    const jwtSecret = process.env.JWT_SECRET as string

    if (!token) {
        throw new Error('Not Authorized')
    }

    try {
        const payload = jwt.verify(token, jwtSecret) as { id: string}

        res.locals.user = payload
        next()
    } catch(error) {
        next(error)
    }
}