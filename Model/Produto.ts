export class produto {

    private _cliente: number
    private _produtos: number
    private _buscar: number
    private _atualizar: number

    constructor(cliente: number, produtos: number, buscar: number, atualizar: number) {
        this._cliente = cliente
        this._produtos = produtos
        this._buscar = buscar
        this._atualizar = atualizar
    }
     public get cliente() {
        return this._cliente
    }

    public set produtos(number: number) {
        this._produtos = number
    }

    public get buscar() {
        return this._buscar
    }

    public set atualizar(atualizar: number) {
        this._atualizar = atualizar
    }

     {

        console.log("\n\n*****************************************************")
        console.log("Cadastrar produto:")
        console.log("*****************************************************")
        console.log("Listar os produtos : " + this._cliente)
        console.log("Buscar produto desejado: " + this._produtos);
        console.log("Deletar os produtos: " + this._atualizar)

    }

}
