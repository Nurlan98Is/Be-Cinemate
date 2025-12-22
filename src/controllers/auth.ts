import { Response, Request } from "express";
import { user } from "../db/users";
import { infoPassWordsUsers } from "../db/users";
import User from "../models/user.model";
import bcrypt from 'bcryptjs';
const { NODE_ENV } = process.env

export const authLogin = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      
      console.log('Login attempt:', { email, password });
      const userInDB = await User.findOne({ email }).select('+password').populate('favoriteSeries').populate('friendsList').populate('friendRequestsSent').populate('friendRequestsReceived');
  
      if (!userInDB) {
        return res.status(401).send('User Not Found');
      }
  
      
      const isMatch = await bcrypt.compare(password, userInDB.password);
      if (!isMatch) {
        return res.status(401).send('Invalid email or password');
      }
  

      const token = userInDB.generateToken();
  
      const { password: _, ...userData } = userInDB.toObject();
  
      res.status(200)
        .cookie('accessToken', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          maxAge: 24 * 60 * 60 * 1000,
          sameSite: 'none',
        })
        .json(userData);
  
    } catch (error) {
      console.error('Error in authLogin:', error);
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
    try {
        const newUser = await User.create(userInfoRegister)
        res.status(201).json({ status: 'ok', message: 'Пользователь успешно создан'});
    } catch (error) {
        console.log('Error in authRegister:', error);
        res.status(500).send(error);
    }   
    
    
}

export const resetPassword = async (req: Request, res: Response) => {
  const idForReset = 199808
  try {
    const { email, idReset } = req.body
    const user = await User.find({ email })
    if (user && idReset === idForReset) {
      res.status(200).json({ url:'/passwordRest', user })
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error)
  }
}