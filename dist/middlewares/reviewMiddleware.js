"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareReviewMiddleware = void 0;
const prepareReviewMiddleware = (req, res, next) => {
    try {
        if (!res.locals.user || !res.locals.user.id) {
            return res.status(401).json({ error: 'Не авторизован' });
        }
        const { productId, reviewRating, reviewText } = req.body;
        if (!productId) {
            return res.status(400).json({ error: 'ID продукта обязателен' });
        }
        if (!reviewRating || isNaN(reviewRating) || reviewRating < 1 || reviewRating > 5) {
            return res.status(400).json({ error: 'Рейтинг должен быть числом от 1 до 5' });
        }
        if (!reviewText || reviewText.trim().length === 0) {
            return res.status(400).json({ error: 'Текст отзыва обязателен' });
        }
        const reviewData = {
            authorId: res.locals.user.id,
            productId,
            reviewRating: Number(reviewRating),
            reviewText: reviewText.trim(),
            createdAt: new Date()
        };
        res.locals.reviewData = reviewData;
        next();
    }
    catch (error) {
        console.error('Ошибка в prepareReviewMiddleware:', error);
        return res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
};
exports.prepareReviewMiddleware = prepareReviewMiddleware;
