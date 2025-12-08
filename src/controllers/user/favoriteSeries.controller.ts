import { Request, Response } from "express";
import User from '../../models/user.model'
import Series from "../../models/series.model";

export const addFavoriteSeries = async (req: Request, res: Response) => {
    try {

        const userId = res.locals.user.id;
        const { seriesId } = req.body
    
        const series = Series.findById(seriesId);
   
        if (!series) {
            return res.status(404).send('Ресурс не найден');
        }
    
        const updateUser = await User.findByIdAndUpdate(
            userId,
            { $addToSet: { favoriteSeries: seriesId}},
            { new: true },
        ).populate('favoriteSeries');

       
        res.status(200).json(updateUser?.favoriteSeries);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export const removeFavoriteSeries = async (req: Request, res: Response) => {
    try {
        const userId =res.locals.user.id;
        const { seriesId } = req.body;

        const series = Series.findById(seriesId);
         if (!series) {
            res.status(404).send('Ресурс не найден');
            return;
        }

         const undateUser = await User.findByIdAndUpdate(
            userId,
            { $pull: { favoriteSeries: seriesId}},
            { new: true },
         ).populate('favoriteSeries');

         res.status(200).json(undateUser?.favoriteSeries);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export const getFavoriteSeries = async (req: Request, res: Response) => {
    try {
        const userId = res.locals.user.id;

        const user = await User.findById(userId).populate('favoriteSeries');

        if (!user) {
            return res.status(404).send('User not found');
        }

        res.status(200).json(user.favoriteSeries);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}