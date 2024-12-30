class Response{
    constructor(success,msg,body){
        this.success = success;
        this.msg = msg;
        this.body = body;
    }
}

class Error{
    constructor(msg,body,errorType){
        this.success = false;
        this.msg = msg;
        this.body = body;
        this.errorType = errorType;
    }
}
class EStacker{
    constructor(msg,isError){
        this.msg = msg;
        this.isError = isError;
    }
}

module.exports = {Response,Error,EStacker}