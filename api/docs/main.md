we need to create an interface for communication with the expression evaluator 

mainly this structure
``` json

{
    "expression": ["tan(2yx) + 2x/(2x^2+1) + tan(2)+  9x + 2^x + 1 + y"],
    "type": "function",
    "variables": {
        "dominant_variable":"z",
        "independent_variable" :["x","y"]
    }
    "dimension":{
        "x":[10,10],
        "y":[5,5],
        "z":[] // this indicates that z is dependent and thus no need to take its range 
    }
}

```
therfore we need to create this strucutre of a request and also design the response which is a detailed version of what is happening the equation and the dataset that could be displayed on the plotly section
