import { Router } from 'express';
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import { SearchProductData, SearchProducts } from '../controllers/productsController';

import interceptorReq from '../middlewares/interceptorReq'
import { ErrorsEnum } from '../helpers/errorsEnum';

/*
Encargado de recibir la invocaciones a las diferentes rutas, regitrar la petición con el interceptor
, chequear los parametros requiridos y finalmente en caso de estar todo correcto hacer la llamada a 
la función encargada de procesar, dicha función se encuentra en el controllador.
*/

const ProductsRouter = Router();

ProductsRouter.get('/', [
    interceptorReq,
    check('q', ErrorsEnum.GetErrorDescript(ErrorsEnum.Errors.PARAM_MISSING_OR_TYPE_MISSING)).not().isEmpty(),
    validateFields
],
SearchProducts);

ProductsRouter.get('/:id', [
    interceptorReq,
    check('id', ErrorsEnum.GetErrorDescript(ErrorsEnum.Errors.PARAM_MISSING_OR_TYPE_MISSING)).not().isEmpty(),
    validateFields
],
SearchProductData);

export default ProductsRouter;