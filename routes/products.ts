import { Router } from 'express';
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import { SearchProductData, SearchProducts } from '../controllers/productsController';

import interceptorReq from '../middlewares/interceptorReq'
import { ErrorsEnum } from '../helpers/errorsEnum';

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