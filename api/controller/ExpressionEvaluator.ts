import { Request,Response } from "express";
import { testExpressions } from "../tests/expression";
import {Response_Error,Response_type,response_Error} from "../errors/Error"


interface operation_stacker_object{
    operation:"additon" | "substraction" | "multiplication" | "division";
    expression: string ;
}

interface invalid_output{
    validity:boolean;
    error_stack:{ [key: string]: Error_stacker };
}

interface Error_stacker{
    error_type:string;
    reason:string;
}

const checkExpressionValidity:(expr: string) => invalid_output = (expr:string) =>{
    console.log(expr)
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
        if(i >0 && (expr[i] == ")" && !/[0-9e.)]/.test(expr[i-1])) && !error_stacker["invalidParenthesis"]){
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
    return {validity:Object.keys(error_stacker).length == 0, error_stack:error_stacker};
} 

const ExpressionFineTuner: (expression:string, variable:string[]) => string = (expression:string, variable:string[]) => {
    variable.map( variable_d =>{
        // lastley we need to check for something that looks like 2t + 1 this could cause errors because the interpreter dosen't know what 2t is so we
        // need to make it 2*(t) the (t) is already done now we need to take care of the (expression) * t
        let location_t_expression_array: Array<number> = [];
        for(let i:number = 1 ; i < expression.length ; i++){
            if(expression[i] == variable_d && /[0-9).]/.test(expression[i-1])){
                location_t_expression_array.push(i);
            }
        }
        for(let i:number = 0 ; i < location_t_expression_array.length; i++){
            expression = expression.slice(0, location_t_expression_array[i]+i) + "*" + expression.slice(location_t_expression_array[i]+i);
        }
        if(variable.find(item => item == "t")){
            expression = expression.replace(/tan/g,"w").replace(/t/g, "(t)").replace(/w/g, "tan");
        }else{
            expression = expression.replace(`${variable_d}`, `(${variable_d})`);
        }
    });
    const change_mapping:Array<{[key:string]:string }> = [
        {"tan":"Math.tan"},
        {"sin":"Math.sin"},
        {"cos":"Math.cos"},
        {"ln":"Math.log"},
        {"e":"Math.E"},
    ];
    change_mapping.map( variable_d =>{

        expression = expression.replace(new RegExp(Object.keys(variable_d)[0],"g"),variable_d[Object.keys(variable_d)[0]]);
    });
    expression = expression.replace(/\^/g,"**");
    return expression;
}


const ExperssionEvaluatorController: (req:Request,res:Response)=> void = async (req:Request,res:Response)=>{
    let g:string = 'a';
    try{
        const { expression, type,variables}: { expression: string[]; type: string; variables:string[] } = req.body;
        let new_expression = expression;
        // error checking
        let error_stacker: Array<invalid_output> = [];
        expression.map(item=>{
            let temp_item:string = "";
            if(type === "parametric_equations"){
                temp_item = item.replace(/tan/g,"w").replace(/t/g, "1").replace(/w/g, "tan");
            }else if(type === "function" ){
                temp_item = item.replace("x","1").replace("y","1").replace("z","1");
            }else if(type == "cylinder"){
                temp_item = item.replace("x","1").replace("y","1").replace("z","1");
            }else if(type == "elipsoids"){
                temp_item = item.replace("x","1").replace("y","1").replace("z","1");
            }else{
            }  
            let isvalid:invalid_output = checkExpressionValidity(temp_item);
            if(!(isvalid.validity)){
                error_stacker.push(isvalid);
            }
        });


        if(error_stacker.length !== 0 ){
            res.status(210).json(new Response_Error(400,error_stacker));
            // end of error checking
        }else{

            new_expression = expression.map(item=>item = ExpressionFineTuner(item,variables));
            if(type == "parametric_equations"){ 
    
            }else if(type == "function"){
        
            }else if(type == "cylinder"){
        
            }else if(type == "elipsoids"){
                
            }else{
                res.status(210).json("errors");
            }   
            res.json(new_expression);
        }
    }catch(error){
        console.log(error);
        res.status(400).json(new Response_Error(404,[{
            validity:false,
            error_stack:{
                "COMPILATION ERROR":
                {
                error_type:"COMPILATION ERROR",
                reason: JSON.stringify(error)
            }
        } 
        }]));
    }    
}    

 




// this is here the function template that generates the whole 3d surface and therefore we need to feed it the equation 
// that the user will give it this only works for the z=f(x,y) we need to create a similar for parametric curves and equation
/*
const generateSurfaceData2 = () => {
  const x2 = [];
  const y2 = [];
  const z2 = [];

  // Define ranges for x and y
  const range = 5; // -5 to 5
  const numPoints = 50;
  const step = (range * 2) / (numPoints - 1);

  // Populate x and y arrays
  for (let i = 0; i < numPoints; i++) {
    x2.push(-range + i * step);
    y2.push(-range + i * step);
  }

  // Calculate z values based on the function: z = sin(sqrt(x^2 + y^2))
  for (let i = 0; i < numPoints; i++) {
    const row = [];
    for (let j = 0; j < numPoints; j++) {
      const valX = x2[j]; // x for current column
      const valY = y2[i]; // y for current row
      const r = -valX*valX-valY*valY+10;
      row.push(r);
    }
    z2.push(row);
  }

  return { x2, y2, z2 };
};



*/
 
export {ExperssionEvaluatorController };

