import { query } from 'jsonpath';
import configs from '../helpers/configs';
import { ErrorsEnum } from '../helpers/errorsEnum';

import axios from 'axios';

/*
  Clase encargada de consumir datos de forma externa. También tiene una función que es invoca al
  momento de recibir/responder peticiones para ser loguedos en una base de datos como un registro
  de control. Puede ser sobre cualquier motor de BDD, por ejemplo MongoDB.

  Las Url están harcodeadas, deben ser llevadas a un config externo.
*/

class SERVICES {

    LogServiceActivity = async (sActivityId:string
                          , nType:number
                          , sUrl:any = null
                          , sAction:any = null
                          , sSoapMessage:any = null
                          , ExceptionMessage:any = null
                          , userId:any = null
    ) => {
    try {
      /*
        Loguear actividad en MongoDB.
      */
      const result = {
        output: {
          errorCode : 0,
          errorDescription : ''
        }
      }
    return {
      result: {
        
      },
      err: (result.output.errorCode != null?
        {
          errorCode : result.output.errorCode,
          errorDescript : result.output.errorDescription
        }
        : null) 
    };
    } catch (err) {
      throw err;
      }
    };

    /* MELI */
    GetProductsMeli = async(txtSearch:string) => {
      try {
        const resp = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${txtSearch}`);
        return resp?.data;
      } catch (err) {
        throw err;
      }
    }

    GetProductDataMeli = async(txtSearch:string) => {
      try {
        const resp = await axios.get(`https://api.mercadolibre.com/items/${txtSearch}`);
        return resp?.data;
      } catch (err) {
        throw err;
      }
    }

    GetProductDescriptMeli = async(txtSearch:string) => {
      try {
        const resp = await axios.get(`https://api.mercadolibre.com/items/${txtSearch}/description`);
        return resp?.data;
      } catch (err) {
        throw err;
      }
    }
}

export default SERVICES;