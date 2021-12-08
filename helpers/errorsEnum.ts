import { query } from 'jsonpath';
import configs from '../helpers/configs';

enum Errors {
    COULD_NOT_OPERATION = 6,
    PARAM_MISSING_OR_TYPE_MISSING = 7
}

export class ErrorsEnum {

    static Errors = Errors;

    static GetErrorDescript (ErrorNum:number):string {
        let [error]:any = query(require(configs.APP_CONFIGS), '$..errors[?(@.errorNum==' + ErrorNum + ')]');

        return error.errorDescript;
    }
}