interface response_Error{
    status:number;
    reason:string;
    data:{ [key: string]: Error_stacker } ;
}

interface Error_stacker{
    error_type:string;
    reason:string;
}

interface invalid_output{
    validity:boolean;
    error_stack:{ [key: string]: Error_stacker };
}


class Response_type{
    validity:boolean;
    status:number;
    data:{ [key: string]: Object };
    constructor(status:number, data:{ [key: string]: Error_stacker }, validity:boolean){
        this.status = status;
        this.data = data;
        this.validity = validity;
    }
}

class Response_Error extends Response_type{
    error_data:Array<invalid_output>
    constructor(status:number, data:Array<invalid_output>){
        super(status, {}, false);
        this.error_data = data;
    }
}

export {Response_Error,Response_type,response_Error}