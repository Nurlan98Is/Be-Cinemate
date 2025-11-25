import express from 'express';
import router from './routes';
import path from 'path';
import cors from 'cors'
import mongoose from 'mongoose';
const PORT = 8080

const app = express()

app.use(cors())

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });

  
app.use(router)
const run = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI as string);
      console.log('MongoDB connected successfully');
      const collections = await mongoose.connection.db?.listCollections().toArray();
        console.log('📂 Available collections:', collections?.map(c => c.name));
      app.listen(PORT, () => {
        console.log(`Server created at port: ${PORT}`)
    })
    } catch (error) {
        console.log('MongoDB connection error:', error);
    }
}
run()