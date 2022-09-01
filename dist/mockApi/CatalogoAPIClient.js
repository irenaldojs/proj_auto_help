"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.CatalogoAPIClient = void 0;
class CatalogoAPIClient {
    static ListarAplicacoes(marca, fab, modelo, dataResultsFn) {
        WebAPI.GET(`catalogo/v1/listar/${marca}/${fab}/${modelo}`)
            .dataResultTo(dataResultsFn)
            .onSuccess(function (res) { })
            .onError(function (err) {
            console.log(err);
        })
            .call();
    }
    static GetMarcas(dataResultsFn) {
        WebAPI.GET('catalogo/v1/marcas')
            .dataResultTo(dataResultsFn)
            .onSuccess(function (res) { })
            .onError(function (err) {
            console.log(err);
        })
            .call();
    }
    static GetFabricantes(dataResultsFn) {
        WebAPI.GET('catalogo/v1/fabricantes')
            .dataResultTo(dataResultsFn)
            .onSuccess(function (res) { })
            .onError(function (err) {
            console.log(err);
        })
            .call();
    }
    static GetModelos(fabricante, dataResultsFn) {
        WebAPI.GET(`catalogo/v1/modelos/${fabricante}`)
            .dataResultTo(dataResultsFn)
            .onSuccess(function (res) { })
            .onError(function (err) {
            console.log(err);
        })
            .call();
    }
}
//exports.CatalogoAPIClient = CatalogoAPIClient;
