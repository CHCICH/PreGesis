import { Request,Response } from "express";

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
        if(i < expr.length -1 && (expr[i] == "*" && !/[0-9lscatep(]/.test(expr[i+1]) || (expr[i] == "/" && !/[0-9lsctaep(]/.test(expr[i+1]))) && !error_stacker["repeatedMultiplicationDivison"]){
            error_stacker["repeatedMultiplicationDivison"] = {reason:"invalid synthax cannot process multiplication and division syntax should look like {valid_expression} {*,/} {valid_expression}" , error_type:"REPEATED_MULT/DIV"};
        }
        if(i > 0  && ((expr[i] == "*" && !/[0-9lscatep)]/.test(expr[i-1]) || (expr[i] == "/" && !/[0-9lasctep)]/.test(expr[i-1]))) && !error_stacker["repeatedMultiplicationDivison"])) {
            error_stacker["repeatedMultiplicationDivison"] = error_stacker["incorrectCharacter"] =  {reason:"invalid synthax cannot process multiplication and division syntax should look like {valid_expression} {*,/} {valid_expression}", error_type:"REPEATED_MULT/DIV"};
        }
        if((( i == 0 || i == expr.length-1)&& ((expr[i] == "*" ||  expr[i] == "/"))) && !error_stacker["incorrectStartEnd"]){
            error_stacker["incorrectStartEnd"] = {reason:"cannot start or end with multiplication or a division sign",error_type:"INCORRECT_STARTING_CHAR"};
        }
        //decimal checking
        if((i > 0  && (expr[i] == "." && isNaN(Number(expr[i-1])) )) && !error_stacker["decimalInvalidity"]){
            error_stacker["decimalInvalidity"] = error_stacker["incorrectCharacter"] =  {reason:"invalid synthax cannot process this decimal number", error_type:"DECIMAL_NUMBER"};
        }

        //checking the validity of cos, sin, tan and ln 
        if(i < expr.length -1 && ((expr[i] == "(" && (expr[i+1] != "c" && expr[i+1] != "s" && expr[i+1] != "t" && !/[0-9lscatep()]/.test(expr[i+1])))) && !error_stacker["custom_function_validity"]){
            error_stacker["custom_function_validity"] = {reason:"arc or a should is only availble after a trigonometric function" , error_type:"INVALID_CUSTOM_FUNCTION"};
        }

        if(i < expr.length -1 && ((expr[i] == "a" && (expr[i+1] != "c" && expr[i+1] != "s" && expr[i+1] != "t"))) && !error_stacker["custom_function_validity"]){
            error_stacker["custom_function_validity"] = {reason:"arc or a should is only availble after a trigonometric function" , error_type:"INVALID_CUSTOM_FUNCTION"};
        }
        if(i < expr.length -1 && ((expr[i] == "c" && expr[i+1] != "(") || (expr[i] == "s" && expr[i+1] != "(") || (expr[i] == "t" && expr[i+1] != "(") || (expr[i] == "l" && expr[i+1] != "(")) && !error_stacker["custom_function_validity"]){
            error_stacker["custom_function_validity"] = {reason:"every custom function should clearly start with a () for example sin(express)" , error_type:"INVALID_CUSTOM_FUNCTION"};
        }

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
    if(expr[expr.length -1] == 's' || expr[expr.length -1] == 't' || expr[expr.length -1] == 'c' || expr[expr.length -1] == 'l' || expr[expr.length -1] == 'a'){
            error_stacker["custom_function_validity"] = {reason:"every custom function should clearly start with a () for example sin(express)" , error_type:"INVALID_CUSTOM_FUNCTION"};
    }
    // checking for invalid parenthesis
    if(opened != closed){
        error_stacker["invalidParenthesis"] =  {reason:"parenthesis are invalid", error_type:"INVALID_PARENTHESIS"};
    }
    return {reason:"",validity:Object.keys(error_stacker).length == 0, error_stack:error_stacker};
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
    let g:string = 'a';
    try{
        const { expression, type }: { expression: string[]; type: string } = req.body;
        let checkValidity :invalid_output = checkExpressionValidity(expression[0]);

        const testExpressions:Array<string> = [
          "2+2",
          "3.14*2",
          "sin(0)",
          "cos(pi/2)",
          "tan(45)",
          "ln(1)",
          "arc sin(0.5)",
          "arc cos(1)",
          "arc tan(1)",
          "2^3 + 5",
          "3 + 4*2 / (1 - 5)^2",
          "((2+3)*5) - 4/2",
          "sin(cos(tan(1)))",
          "3 + 4 - 5 * 6 / 7",
          "3.5 + 2.1",
          "2^(3+4)",
          "(2+3)*(4+5)",
          "sin(arc cos(0.5))",
          "ln(2.71828)",
          "cos(sin(tan(arc ln(1))))",

          // Invalid characters (should be blocked)
          "2 + 3a",
          "sin[0]",
          "cos{pi}",
          "tan$45",
          "ln#1",
          "arc%sin(0)",
          "2 + @3",
          "hello()",
          "eval('2+2')",
          "constructor()",

          // Missing parentheses
          "sin0",
          "cos pi",
          "tan45",
          "ln1",
          "arc sin0.5",
          "arc cos1",
          "arc tan1",

          // Wrong decimal placement
          "3..14 + 2",
          ".3 + 2",
          "2 + 3.",
          "4. + 5",
          "3.1.4 + 2",
          "sin(3..14)",
          "cos(.5.6)",
          "tan(7.)",

          // Repeated operators or invalid operator positions
          "++3",
          "3--2",
          "*4 + 5",
          "6 / / 2",
          "7 ** 2",
          "8 +* 2",
          "9 /- 3",
          "+ 3 + 4",
          "2 + 3 *",
          "5 -",

          // Invalid function usage (missing parentheses)
          "sin",
          "cos",
          "tan",
          "ln",
          "arc",
          "arc sin",
          "arc cos",
          "arc tan",

          // Unbalanced parentheses
          "(2 + 3",
          "4 + 5)",
          "((3 + 2)",
          "5 + (6 * 7))",
          "(sin(0)",
          "cos(3))",
          "(arc sin(0.5))(",
          "ln(2",

          // Valid complex expressions
          "sin(30) + cos(60) - tan(45)",
          "arc sin(0.5) * ln(2)",
          "2^3 + 4*(5 + 6) - 7/8",
          "((sin(1) + cos(1)) * tan(1)) ^ 2",
          "ln(e) + arc cos(1) - arc tan(0)",

          // Edge cases
          "0",
          "1234567890",
          "0.0",
          "3.1415926535",
          "(0)",
          "((0))",
          "sin((0))",
          "ln((1))",
          "arc tan((1))",
          "cos(arc sin(0))",

          // Invalid multiplication/division syntax
          "3*+2",
          "4/*5",
          "*6 + 7",
          "8 /",
          "/9 + 10",
          "11 + * 12",
          "13 / * 14",
          "15 ** 16",
          "17 + (18 *)",
          "19 + (/ 20)",

          // Misc invalids
          "sin(90)) + 5",
          "(cos(60) + 3",
          "tan((45)",
          "ln(1))",
          "arc sin(0.5))",
          "2 + (3 * 4",
          "5 + )6(",
          "7 + 8(",
          "9 + 10)",
          "sin (0)",  // space between function and parentheses (should fail your checker if you replaced with 's(' etc)
        ];
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

