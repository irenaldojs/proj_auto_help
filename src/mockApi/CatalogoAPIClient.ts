import { APIResponse, WebAPI } from "../Objective-UI";

export class CatalogoAPIClient 
{
    static ListarAplicacoes(marca: string, fab: string, modelo: string, dataResultsFn: Function) {
        WebAPI.GET(`catalogo/v1/listar/${marca}/${fab}/${modelo}`)
            .dataResultTo(dataResultsFn)
            .onSuccess(function (res: APIResponse) { })
            .onError(function (err: Error) {
                console.log(err)
            })
            .call();
    }
    public static GetMarcas(dataResultsFn: Function)
    {
        WebAPI.GET('catalogo/v1/marcas')
            .dataResultTo(dataResultsFn)
            .onSuccess(function(res: APIResponse){})
            .onError(function(err:Error){
                console.log(err)
            })
            .call();
    }

    public static GetFabricantes(dataResultsFn: Function) {
        WebAPI.GET('catalogo/v1/fabricantes')
            .dataResultTo(dataResultsFn)
            .onSuccess(function (res: APIResponse) { })
            .onError(function (err: Error) {
                console.log(err)
            })
            .call();
    }

    public static GetModelos(fabricante: string, dataResultsFn: Function) {
        WebAPI.GET(`catalogo/v1/modelos/${fabricante}`)
            .dataResultTo(dataResultsFn)
            .onSuccess(function (res: APIResponse) { })
            .onError(function (err: Error) {
                console.log(err)
            })
            .call();
    }
}