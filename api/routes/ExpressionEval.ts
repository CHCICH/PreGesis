import express,{Express, Router} from "express";
import { ExperssionEvaluatorController} from "../controller/ExpressionEvaluator";

const ExpressionEvaluator: Router =  express.Router();

ExpressionEvaluator.get('/', ExperssionEvaluatorController);

export {ExpressionEvaluator};