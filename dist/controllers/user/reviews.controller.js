"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReview = exports.deleteReview = exports.createReview = void 0;
const review_modal_1 = __importDefault(require("../../models/review.modal"));
const review_modal_2 = __importDefault(require("../../models/review.modal"));
const createReview = async (req, res) => {
    try {
        const newReview = res.locals.reviewData;
        console.log(newReview);
        const createdReview = review_modal_1.default.create(newReview);
        res.status(200).send({ message: 'создано', createdReview });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.createReview = createReview;
const deleteReview = async (req, res) => {
    try {
        const { reviewId } = req.body;
        const userId = res.locals.user.id;
        const review = await review_modal_1.default.findOne({ _id: reviewId });
        console.log('review', review);
        if (userId == review?.authorId) {
            const deletedReview = await review_modal_1.default.findOneAndDelete({ _id: reviewId });
            res.status(200).json({
                status: 'ok',
                message: 'Удаление прошло успешно'
            });
        }
        if (userId != review?.authorId) {
            res.status(404).send('Невозможно удалить чужой обзор');
        }
        res.status(200).send('ok');
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.deleteReview = deleteReview;
const getReview = async (req, res) => {
    try {
        const seriesId = req.params.id;
        const reviews = await review_modal_2.default.find({ productId: seriesId }).populate('authorId', 'firstName lastName userName');
        res.status(200).json(reviews);
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
exports.getReview = getReview;
