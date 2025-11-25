import { Request, Response } from "express";
import { hboSeries, fxPopularSeries, netflixSeries, allArraySeries } from "../db/serials";
import { createReadStream } from "fs";
import path from "path";

export const getAllSerials = (req: Request, res: Response) => {
    allArraySeries.length = 0;
    allArraySeries.push(...hboSeries, ...fxPopularSeries, ...netflixSeries);
    res.json(allArraySeries);
}

export const getSerialById = (req: Request, res: Response) => {
    const id = +req.params.id;
    console.log('serials id:', req.params);
    
    allArraySeries.length = 0;
    allArraySeries.push(...hboSeries, ...fxPopularSeries, ...netflixSeries);

    const serial = allArraySeries.find((series: any) => series.id === id);
    
    if (!serial) {
        return res.status(404).json({ message: "Сериал не найден" });
    }
    
    res.status(200).json(serial);
}

