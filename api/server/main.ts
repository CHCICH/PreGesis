import express, { Express,Request,Response,Router } from 'express';
import cors from 'cors';
import { ExpressionEvaluator } from '../routes/ExpressionEval';

const app: Express = express();
const PORT = process.env.PORT || 8000;



app.use(cors());
app.use(express.json());

app.use('/expression_eval',ExpressionEvaluator);

app.get("/test",async (req:Request,res:Response)=>{
    res.send("Main Route System");
})

app.listen(PORT, async ()=>{
    console.log(`listening to port ${PORT}`);
})