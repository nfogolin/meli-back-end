const log = require('log-to-file');
import { ErrorsEnum } from '../helpers/errorsEnum'

const RegisterLogException = (sLog:string, activityId:string):string => {
    log("activityId: " + activityId + " => " + sLog);
    return ErrorsEnum.GetErrorDescript(ErrorsEnum.Errors.COULD_NOT_OPERATION);
}

const ResponseError = (req:any, res:any, err:any) =>{

    RegisterLogActivity(req, res, 3, req.baseUrl, undefined, err.toString());

    res.status(401).json({
        Error : [
            {
                msg: RegisterLogException(err, (req.headers["activityId"] || "").toString()),
                location: 'service',
                activityId : req.headers["activityId"]
            }
        ]
    });
}

const RegisterLogActivity = (req:any
                            , res:any
                            , nType: number
                            , sUrl:string
                            , sSoapMessage?: any
                            , ExceptionMessage?: any
                            ):Request => {

    try {
        /* Registrar actividad en MongoDB */
    }catch(e){
        RegisterLogException(e, req.headers["activityId"])
    }

    return req;
}

export { ResponseError, RegisterLogActivity, RegisterLogException };