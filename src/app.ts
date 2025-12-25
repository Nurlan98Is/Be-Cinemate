import express from 'express';
import router from './routes';
import path from 'path';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();

app.use(cors({
  origin: ["http://localhost:5173", "https://cinemate-taupe.vercel.app/", ],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

// Главная страница
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Роуты API
app.use(router);

export default app;