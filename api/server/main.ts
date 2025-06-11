import express, { Application,Router } from 'express';
import cors from 'cors';
const app: Application = express();
const PORT = process.env.PORT || 8000;



app.use(cors());


app.listen(PORT, async ()=>{
    console.log(`listening to port ${PORT}`);
})