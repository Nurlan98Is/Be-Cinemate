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
            {
                $lookup: {
                    from: "reviews",
                    localField: "_id",          // поле series._id
                    foreignField: "productId",  // поле reviews.productId
                    as: "cinemateReviews"       // массив с отзывами
                }
            },
            {
                $addFields: {
                    cinemateReviews: {
                        $map: {
                            input: "$cinemateReviews",
                            as: "review",
                            in: {
                                $mergeObjects: [
                                    {
                                        _id: "$$review._id",
                                        productId: "$$review.productId",
                                        authorId: "$$review.authorId",
                                        reviewRating: "$$review.reviewRating",
                                        reviewText: "$$review.reviewText",
                                        createdAt: "$$review.createdAt",
                                        updatedAt: "$$review.updatedAt",
                                        __v: "$$review.__v"
                                    },
                                    {
                                        user: {
                                            _id: "$$review.user._id",
                                            firstName: "$$review.user.fristName",
                                            lastName: "$$review.user.lastName",
                                            avatar: "$$review.user.avatar"
                                        }
                                    }
                                ]
                            }
                        }
                    }
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
                    allEpisodes: 0,
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