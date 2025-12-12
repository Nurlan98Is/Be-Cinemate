"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthDate: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: false,
    },
    nickName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    phoneNumber: {
        type: String,
        required: true
    },
    friendRequestsSent: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "User",
            default: [],
        }],
    friendRequestsReceived: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "User",
            default: [],
        }],
    friendsList: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "User",
            default: [],
        }],
    favoriteSeries: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Series",
            default: [],
        }],
    favoriteMovies: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Movie",
            default: [],
        }],
}, {
    timestamps: true
});
userSchema.pre('save', async function () {
    if (!this.isModified('password'))
        return;
    const salt = await bcryptjs_1.default.genSalt(10);
    this.password = await bcryptjs_1.default.hash(this.password, salt);
});
userSchema.methods.comparePassword = async function (candidatePassword) {
    return bcryptjs_1.default.compare(candidatePassword, this.password);
};
userSchema.methods.generateToken = function () {
    return jsonwebtoken_1.default.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: '24h'
    });
};
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
