import express from 'express';
import router from './routes';
import path from 'path';

const PORT = 8080

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });

  
app.use(router)

app.listen(PORT, () => {
    console.log(`Server created at port: ${PORT}`)
})