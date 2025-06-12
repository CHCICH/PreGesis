import { Request,Response } from "express";

interface Expression {

};

const ExperssionEvaluatorController: (req:Request,res:Response)=> void = (req:Request,res:Response)=>{

    res.json("hello")
}

export {ExperssionEvaluatorController, Expression };
