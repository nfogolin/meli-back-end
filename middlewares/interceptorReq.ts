import { Request, Response } from 'express';
import { RegisterLogActivity } from '../helpers/log';

/*
Interceptor que genera un activityId de manera de poder seguir una traza Request-Response y poder
saber que ingresó y que se respondió en una determinada petición.
*/

import { v4 as uuidv4 } from 'uuid';
 
const interceptorReq = (req:Request, res:Response, next:any) => {

    req.headers["activityId"] = uuidv4();

    RegisterLogActivity(req, res, 1, (req.originalUrl || "").toString(), JSON.stringify(req.body), null);

    next();
}

export default interceptorReq;