import dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}
import mongoose from 'mongoose';
import app from './app';

const {JWT_SECRET, MONGODB_URI} = process.env;
async function startServer() {
  try {
    console.log("MONGO_URI:", process.env.MONGODB_URI);
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing in .env");
    }
    console.log("JWT_SECRET:", JWT_SECRET)
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');

    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error("Server error:", err);
    process.exit(1);
  }
}

startServer();