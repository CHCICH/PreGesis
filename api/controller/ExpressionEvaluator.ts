import { Request,Response } from "express";

interface operation_stacker_object{
    operation:"additon" | "substraction" | "multiplication" | "division";
    expression: string ;
}

interface invalid_output{
    reason:string;
    validity:boolean;
}

const checkExpressionValidity:(expr: string) => invalid_output = (expr:string) =>{
    expr = expr.replace(/\s/g, '');
    expr = expr.replace(/cos/g, 'c').replace(/sin/g, 's').replace(/tan/g, 't').replace(/arc/g, 'a').replace(/ln/g, 'l');
    const invalidCharRegex = /[^a-zA-Z0-9*\/^()+\-\s]/;
    if(invalidCharRegex.test(expr)){
        return {reason:"expression contains invalid characters. Only letters, digits, +, -, *, /, ^, (, ) are allowed", validity:false};
    }
    let opened = 0;
    for(let i: number = 0; i< expr.length;i++){
        if(i < expr.length -1 && (expr[i] == "*" && isNaN(Number(expr[i+1])) || (expr[i] == "/" && isNaN(Number(expr[i+1]))))){
            return {reason:"invalid synthax cannot process multiplication and division syntax should look like {valid_expression} {*,/} {valid_expression}" , validity:false};
        }
        if(i > 0  && (expr[i] == "*" && isNaN(Number(expr[i-1])) || (expr[i] == "/" && isNaN(Number(expr[i-1]))))){
            return {reason:"invalid synthax cannot process multiplication and division syntax should look like {valid_expression} {*,/} {valid_expression}", validity:false};
        }
        if((( i == 0 || i == expr.length)&& (expr[i] == "*" ||  expr[i] == "/" || expr[i] == "+" || expr[i] == "-"))){
            return {reason:"cannot start or end with multiplication or a division sign",validity:false};
        }
        if(expr[i] == "("){
            opened += 1;
        }
        else if(expr[i] == ")"){
            opened -= 1;
        }
    }
    if(opened != 0){
        return {reason:"parenthesis are invalid", validity:false};
    }

    //

    //

    return {reason:"",validity:true};
} 

const recursiveExpresssionEvaluator: (expr: string)=> number  = (expr:string) =>{
    if(!isNaN(Number(expr.trim()))){ // this checks if the string below is a number or not
        return Number(expr);
    }
    // check here if the string is a valid expression
    //1 - check for invalid parenthesis
     
    let adder_stacker:Array<operation_stacker_object> = [];
    let current_stack:string = "";
    let open_stack = 0;
    for(let i:number = 0 ; i < expr.length; i++){
        
    };
    return 1;
}

const ExperssionEvaluatorController: (req:Request,res:Response)=> void = async (req:Request,res:Response)=>{
    const { expression, type }: { expression: string[]; type: string } = req.body;
    
    res.json({"hello":true});
}

export {ExperssionEvaluatorController };
