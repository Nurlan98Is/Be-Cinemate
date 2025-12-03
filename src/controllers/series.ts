import { Request, Response } from "express";
import Series from '../models/series.model';
import { Types } from "mongoose";
import Season from '../models/season.model';
import Episode from '../models/episode.modal';

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

    try {
        const result = await Series.aggregate([
            {
                $match: { _id: new Types.ObjectId(id) }
            },
            // Подтягиваем сезоны
            {
                $lookup: {
                    from: "seasons",
                    localField: "_id",
                    foreignField: "seriesId",
                    as: "seasons"
                }
            },
            // Подтягиваем эпизоды
            {
                $lookup: {
                    from: "episodes",
                    localField: "_id",
                    foreignField: "seriesId",
                    as: "allEpisodes"
                }
            },
            // Вложим эпизоды внутрь сезонов
            {
                $addFields: {
                    seasons: {
                        $map: {
                            input: "$seasons",
                            as: "season",
                            in: {
                                $mergeObjects: [
                                    "$$season",
                                    {
                                        episodes: {
                                            $filter: {
                                                input: "$allEpisodes",
                                                as: "ep",
                                                cond: { $eq: ["$$ep.seasonId", "$$season._id"] }
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    }
                }
            },
            // Убираем временный массив allEpisodes
            {
                $project: {
                    allEpisodes: 0
                }
            }
        ]);

        if (!result.length) {
            return res.status(404).json({ message: "Сериал не найден" });
        }

        res.status(200).json(result[0]);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Ошибка сервера" });
    }
    
    // const serial = await Series.findById(id);

    // const seasons = await Season.find({ seriesId: id})
    
    // const episodes = await Episode.find({ episodeId: '6929c4e74e2471a22af876ea'});
    // if (!serial) {
    //     return res.status(404).json({ message: "Сериал не найден" });
    // }
    
    // res.status(200).json({serial, seasons, episodes});
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