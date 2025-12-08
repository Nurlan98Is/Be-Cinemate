"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
if (process.env.NODE_ENV !== 'production') {
    dotenv_1.default.config();
}
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const { JWT_SECRET, MONGODB_URI } = process.env;
async function startServer() {
    try {
        if (!MONGODB_URI) {
            throw new Error("MONGODB_URI is missing in .env");
        }
        await mongoose_1.default.connect(MONGODB_URI);
        console.log('MongoDB connected');
        const PORT = process.env.PORT || 8080;
        app_1.default.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }
    catch (err) {
        console.error("Server error:", err);
        process.exit(1);
    }
}
startServer();
