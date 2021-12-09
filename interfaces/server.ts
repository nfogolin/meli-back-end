
interface IServer {

    App: any,
    Port: number,
    SearchProductsPath: string,

    Middlewares(): void //Interceptores

    Routes(): void //Manejador de la rutas solicitadas.

    Start(): void

};

export default IServer;