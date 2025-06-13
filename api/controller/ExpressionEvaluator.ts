import { Request,Response } from "express";
import { testExpressions } from "../tests/expression";


interface operation_stacker_object{
    operation:"additon" | "substraction" | "multiplication" | "division";
    expression: string ;
}

interface invalid_output{
    reason:string;
    validity:boolean;
    error_stack:{ [key: string]: Error_stacker };
}

interface Error_stacker{
    error_type:string;
    reason:string;
}

const checkExpressionValidity:(expr: string) => invalid_output = (expr:string) =>{
    expr = expr.replace(/\s/g, '');
    expr = expr.replace(/cos/g, 'c').replace(/sin/g, 's').replace(/tan/g, 't').replace(/arc/g, 'a').replace(/ln/g, 'l').replace(/pi/g,'p');
    const invalidCharRegex = /[^0-9lsctape*\/^().+\-]/;
    let error_stacker: { [key: string]: Error_stacker } = {};
    // checking for invalid characters 
    if(invalidCharRegex.test(expr)){
        error_stacker["incorrectCharacter"] = {reason:"expression contains invalid characters. Only letters, digits, +, -, *, /, ^, (, ), .are allowed", error_type:"INCORRECT_CHARACTER"};
    }
    let opened:number = 0;
    let closed:number = 0;
    for(let i: number = 0; i< expr.length;i++){
        //checking for invalid multiplication or divison
        if(i < expr.length -1 && (expr[i] == "*" && !/[0-9lscatep(]/.test(expr[i+1]) || expr[i] == "^" && !/[0-9lscatep(]/.test(expr[i+1]) || (expr[i] == "/" && !/[0-9lsctaep(]/.test(expr[i+1]))) && !error_stacker["repeatedMultiplicationDivison"]){
            error_stacker["repeatedMultiplicationDivison"] = {reason:"invalid synthax cannot process multiplication and division syntax should look like {valid_expression} {*,/} {valid_expression}" , error_type:"REPEATED_MULT/DIV"};
        }
        if(i > 0  && ((expr[i] == "*" && !/[0-9lscatep)]/.test(expr[i-1]) || expr[i] == "^" && !/[0-9lscatep)]/.test(expr[i-1]) || (expr[i] == "/" && !/[0-9lasctep)]/.test(expr[i-1]))) && !error_stacker["repeatedMultiplicationDivison"])) {
            error_stacker["repeatedMultiplicationDivison"] = {reason:"invalid synthax cannot process multiplication and division syntax should look like {valid_expression} {*,/} {valid_expression}", error_type:"REPEATED_MULT/DIV"};
        }
        if((( i == 0 || i == expr.length-1)&& ((expr[i] == "*" ||  expr[i] == "/"))) && !error_stacker["incorrectStartEnd"]){
            error_stacker["incorrectStartEnd"] = {reason:"cannot start or end with multiplication or a division sign",error_type:"INCORRECT_STARTING_CHAR"};
        }
        //decimal checking
        if((i > 0  && (expr[i] == "." && isNaN(Number(expr[i-1])) )) && !error_stacker["decimalInvalidity"]){
            error_stacker["decimalInvalidity"]  =  {reason:"invalid synthax cannot process this decimal number", error_type:"DECIMAL_NUMBER"};
        }
        //checking the validity of cos, sin, tan and ln 
        if(i < expr.length -1 && ((expr[i] == "a" && (expr[i+1] != "c" && expr[i+1] != "s" && expr[i+1] != "t"))) && !error_stacker["custom_function_validity"]){
            error_stacker["custom_function_validity"] = {reason:"arc or a should is only availble after a trigonometric function" , error_type:"INVALID_CUSTOM_FUNCTION"};
        }
        if(i < expr.length -1 && ((expr[i] == "c" && expr[i+1] != "(") || (expr[i] == "s" && expr[i+1] != "(") || (expr[i] == "t" && expr[i+1] != "(") || (expr[i] == "l" && expr[i+1] != "(")) && !error_stacker["custom_function_validity"]){
            error_stacker["custom_function_validity"] = {reason:"every custom function should clearly start with a () for example sin(express)" , error_type:"INVALID_CUSTOM_FUNCTION"};
        }
        //parenthesis opening and closing checking
        if(i >0 && (expr[i] == ")" && !/[0-9e.]/.test(expr[i-1])) && !error_stacker["invalidParenthesis"]){
            error_stacker["invalidParenthesis"] = {reason:"invalid synthax cannot process and invalid character before an )" , error_type:"INVALID_PARENTHESIS"};
        }
        // additon substarction
        if(i < expr.length -1 && ((expr[i] == "+" && !/[0-9cstale(+-]/.test(expr[i+1])) || (expr[i] == "-" && !/[0-9cstale(+-]/.test(expr[i+1])) ) && !error_stacker["invalidAdditionSubstraction"]){
            error_stacker["invalidAdditionSubstraction"] = {reason:"invalid synthax cannot process and invalid character before an +/-" , error_type:"INVALID_ADDITION_SUBSTRACTION"};
        }
        //
        if(opened < closed){
            error_stacker["invalidParenthesis"] =  {reason:"parenthesis are invalid", error_type:"INVALID_PARENTHESIS"};
        }
        //parenthesis checking 
        if(expr[i] == "("){

            opened += 1;
        }
        else if(expr[i] == ")"){
            closed += 1;
        }
    }
    if(expr[expr.length -1] == 's' || expr[expr.length -1] == 't' || expr[expr.length -1] == 'c' || expr[expr.length -1] == 'l' || expr[expr.length -1] == 'a' ){
        error_stacker["custom_function_validity"] = {reason:"every custom function should clearly start with a () for example sin(express)" , error_type:"INVALID_CUSTOM_FUNCTION"};
    }
    //
    if(!/[0-9).]/.test(expr[expr.length -1])){
        error_stacker["incorrectEnding"] = {reason:"incorrect ending you ended with an incorrect symbol" , error_type:"INVALID_ENDING"};
    }

    // checking for invalid parenthesis
    if(opened != closed){
        error_stacker["invalidParenthesis"] =  {reason:"parenthesis are invalid", error_type:"INVALID_PARENTHESIS"};
    }
    return {reason:"",validity:Object.keys(error_stacker).length == 0, error_stack:error_stacker};
} 

const ExperssionEvaluatorController: (req:Request,res:Response)=> void = async (req:Request,res:Response)=>{
    let g:string = 'a';
    try{
        const { expression, type }: { expression: string[]; type: string } = req.body;
        let checkValidity :invalid_output = checkExpressionValidity(expression[0]);

        testExpressions.map(item=>{
            console.log(item,checkExpressionValidity(item).validity)
        })
        let expression_error_stacker:{ [key: string]: Error_stacker } = {};
        if(type == "parametric_equations"){
    
        }else if(type == "function"){
    
        }else if(type == "cylinder"){
    
        }else if(type == "elipsoids"){
            
        }else{
            res.status(210).json("errors");
        }    
        
        res.json(checkValidity);
    }catch(error){
        console.log("error happened");
        res.status(400).json({"error":true});
    }    
}    

 

export {ExperssionEvaluatorController };

