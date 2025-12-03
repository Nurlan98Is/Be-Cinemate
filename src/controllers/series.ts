import { Request, Response } from "express";
import Series from '../models/series.model'

export const getAllSeries = async (req: Request, res: Response) => {
    try {
        const allSeries = await Series.find()
        res.status(200).json(allSeries);
    } catch (error) {
        console.error("Server error", error);
        res.status(500).send('Server error');
    }
}

export const getSerialById = async(req: Request, res: Response) => {
    const id = req.params.id;
    
    const serial = await Series.findById(id);
    
    if (!serial) {
        return res.status(404).json({ message: "Сериал не найден" });
    }
    
    res.status(200).json(serial);
}
export const getSeriesByFilters = async (req: Request, res: Response) => {
    const { source, genre } = req.query;
    try {
        const filter: any = {};
        if (source) filter.source = source;
        if (genre) filter.genre = { $in: [genre] };

        const series = await Series.find(filter);
        res.status(200).json(series);
    } catch (error) {
        console.error("Server error", error);
        res.status(500).send('Server error');
    }
}