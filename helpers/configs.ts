import { config } from 'dotenv';

config({
    path: '../.env'
});

export = {
    SEARCH_PRODUCTS_PATH : process.env.SEARCH_PRODUCTS_PATH || "",
    PORT : process.env.PORT || "",
    APP_CONFIGS : process.env.APP_CONFIGS || ""
}