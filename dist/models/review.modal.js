"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ReviewSchema = new mongoose_1.Schema({
    productId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Series', required: true },
    authorId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    reviewRating: { type: Number, required: true },
    reviewText: { type: String, required: false },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('review', ReviewSchema);
