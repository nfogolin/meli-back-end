import { Response, Request } from 'express';
import SERVICES from '../services/external-services';

import { ResponseError } from '../helpers/log';

/*
Controlador específico que aloja las funciones y brinda una respuesta al router.
*/

const SearchProducts = (req:any, res:Response) => {

    let txtSearch:string = (req.query.q || "").toString();

    try {

      let services = new SERVICES();

      services.GetProductsMeli(txtSearch).then(result =>{
        const js = {
            "author":{
              "name":"String",
              "lastname":"String"
            },
            "categories":
              result?.filters[0]?.values[0]?.path_from_root.map((category:any) => {
                return category.name;
              })
            ,
            "items":
              result?.results?.slice(0, 4).map((product:any) => {
                return {
                  "id" : product?.id,
                  "title": product?.title,
                  "price": {
                    "currency": "$",
                    "amount": product?.prices?.prices[0]?.amount,
                    "decimals": 0
                  },
                  "picture": product?.thumbnail,
                  "condition": product?.condition,
                  "free_shipping": product?.shipping?.free_shipping
                };
              })
          };

        res.json(js);

      }).catch((err)=>{
          ResponseError(req, res, err);
      });
    }catch(e){
        ResponseError(req, res, e);
    }
}

const SearchProductData = (req:any, res:Response) => {

  let txtSearch:string = (req.params.id || "").toString();

  try {

    let services = new SERVICES();

    services.GetProductDataMeli(txtSearch).then(async (result) =>{

      let additionaDescript = "";
      
      await services.GetProductDescriptMeli(txtSearch).then((resp)=>{
        additionaDescript = resp?.plain_text;
      });

      const js = {
          "author":{
            "name":"String",
            "lastname":"String"
          },
          "item":{
            "id" : result?.id,
            "title": result?.title,
            "price": {
              "currency": "$",
              "amount": result?.price,
              "decimals": 0
            },
            "picture": result?.pictures[0]?.url,
            "condition": result?.condition,
            "free_shipping": result?.shipping?.free_shipping,
            "sold_quantity": result?.sold_quantity,
            "description": additionaDescript
          }
        };

      res.json(js);

    }).catch((err)=>{
        ResponseError(req, res, err);
    });
  }catch(e){
      ResponseError(req, res, e);
  }
}

export {
    SearchProducts,
    SearchProductData
}