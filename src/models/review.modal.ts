import { Schema, model } from "mongoose";


const ReviewSchema = new Schema({
    productId: {type: Schema.Types.ObjectId, ref: 'Series', required: true},
    authorId: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    reviewRating: {type: Number, required: true},
    reviewText: {type: String, required: false},
}, {timestamps: true})

export default model('review', ReviewSchema)