import express,{Express, Router} from "express";
import { ExperssionEvaluatorController,Expression} from "../controller/ExpressionEvaluator";

const ExpressionEvaluator: Router =  express.Router();

ExpressionEvaluator.get('/', ExperssionEvaluatorController);

export {ExpressionEvaluator};