export class produto {

    private _cliente: string
    private _produtos: string
    private _buscar: string
    private _atualizar: string

    constructor(cliente: string, produtos: string, buscar: string, atualizar: string) {
        this._cliente = cliente
        this._produtos = produtos
        this._buscar = buscar
        this._atualizar = atualizar
    }
     public get cliente() {
        return this._cliente
    }

    public set produtos(string: string) {
        this._produtos = string
    }

    public get buscar() {
        return this._buscar
    }

    public set atualizar(atualizar: string) {
        this._atualizar = atualizar
    }

     }

        console.log("\n\n*****************************************************")
        console.log("Nome do Clinte:")
        console.log("*****************************************************")
        console.log("Listar os produtos : " + this._cliente)
        console.log("Buscar produto: " + this._produtos);
        console.log("Atualizar produtos: " + this._atualizar)

    }

}