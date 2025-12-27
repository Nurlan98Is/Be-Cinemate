import { Request, Response } from "express"
import Review from '../../models/review.modal'
import reviewModal from "../../models/review.modal"

export const createReview = async (req: Request, res: Response) => {
    try {

        const newReview = res.locals.reviewData
        console.log(newReview)
        const createdReview = Review.create(newReview)
        res.status(200).send({ message: 'создано', createdReview})
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

export const deleteReview = async (req: Request, res: Response) => {
    try {
        const { reviewId } = req.body;
        const userId = res.locals.user.id;
        const review = await Review.findOne({ _id: reviewId})
        console.log('review', review)
        if (userId == review?.authorId) {
            const deletedReview = await Review.findOneAndDelete({ _id: reviewId})
            res.status(200).json({
                status: 'ok',
                message: 'Удаление прошло успешно'
            })
        }
        if (userId != review?.authorId) {
            res.status(404).send('Невозможно удалить чужой обзор')
        }
        res.status(200).send('ok')
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}

export const getReview = async (req: Request, res: Response) => {
    try {
        const seriesId = req.params.id
        
        const reviews = await reviewModal.find({ productId: seriesId}).populate('authorId', 'firstName lastName userName');
        res.status(200).json(reviews)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}