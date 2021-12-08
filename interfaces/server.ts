
interface IServer {

    App: any,
    Port: number,
    SearchProductsPath: string,

    Middlewares(): void

    Routes(): void

    Start(): void

};

export default IServer;