import express from 'express';
import router from './routes';


const PORT = 8080

const app = express()

app.use(router)

app.listen(PORT, () => {
    console.log(`Server created at port: ${PORT}`)
})