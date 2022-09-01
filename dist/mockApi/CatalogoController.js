"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.CatalogoController = void 0;
class CatalogoController extends WebAPISimulator {
    constructor() {
        super();
        this.initData();
        this.mapRoute('GET', 'catalogo/v1/marcas', this.listarMarcas);
        this.mapRoute('GET', 'catalogo/v1/fabricantes', this.listarFabricantes);
        this.mapRoute('GET', 'catalogo/v1/modelos', this.listarModelos);
        this.mapRoute('GET', 'catalogo/v1/listar', this.buscaCatalogo);
    }
    initData() {
        if (CatalogoController.DATA_MOCK == null) {
            CatalogoController.DATA_MOCK = [new CatalogoItem({
                    sku: 'B001', marca: 'NGK', nomeItem: 'BOMBA DAGUA', aplicacao: [
                        new Veiculo({ fabricante: 'FIAT', modelo: 'UNO', ano: '2004' }),
                        new Veiculo({ fabricante: 'FIAT', modelo: 'PALIO', ano: '2006' }),
                        new Veiculo({ fabricante: 'CHEVROLET', modelo: 'CELTA', ano: '06-07' }),
                        new Veiculo({ fabricante: 'VW', modelo: 'BORA', ano: '09-10' }),
                    ]
                }),
                new CatalogoItem({
                    sku: 'JNT-CBX50008', marca: 'BOSCH', nomeItem: 'JUNTA DE CABEÇOTE', aplicacao: [
                        new Veiculo({ fabricante: 'HIUNDAY', modelo: 'HB20', ano: '2013' }),
                        new Veiculo({ fabricante: 'FIAT', modelo: 'DOBLO', ano: '2010' }),
                        new Veiculo({ fabricante: 'HONDA', modelo: 'FIT', ano: '2008' }),
                        new Veiculo({ fabricante: 'VW', modelo: 'GOL', ano: '2007' }),
                    ]
                }),
                new CatalogoItem({
                    sku: 'FLTR', marca: 'METAL LEVE', nomeItem: 'FILTRO DE AR', aplicacao: [
                        new Veiculo({ fabricante: 'VW', modelo: 'GOL', ano: '2005' }),
                        new Veiculo({ fabricante: 'FIAT', modelo: 'STRADA', ano: '2010' }),
                        new Veiculo({ fabricante: 'TOYOTA', modelo: 'COROLLA', ano: '2004' }),
                        new Veiculo({ fabricante: 'CHEVROLET', modelo: 'ASTRA', ano: '2007' }),
                    ]
                })
            ];
        }
    }
    listarModelos(parametros) {
        console.log('listarModelos');
        var fabricante = parametros[1];
        var dados = CatalogoController.DATA_MOCK;
        var retorno = [''];
        for (var c = 0; c < dados.length; c++) {
            var item = dados[c];
            for (var v = 0; v < item.aplicacao.length; v++) {
                var veiculo = item.aplicacao[v];
                if (veiculo.fabricante == fabricante)
                    if (retorno.filter(r => r == veiculo.modelo).length == 0)
                        retorno.push(veiculo.modelo);
            }
        }
        return retorno;
    }
    listarFabricantes() {
        var dados = CatalogoController.DATA_MOCK;
        var retorno = [];
        for (var c = 0; c < dados.length; c++) {
            var item = dados[c];
            for (var v = 0; v < item.aplicacao.length; v++) {
                var veiculo = item.aplicacao[v];
                if (retorno.filter(r => r == veiculo.fabricante).length == 0)
                    retorno.push(veiculo.fabricante);
            }
        }
        return retorno;
    }
    listarMarcas() {
        var dados = CatalogoController.DATA_MOCK;
        var retorno = [];
        for (var c = 0; c < dados.length; c++) {
            var item = dados[c];
            retorno.push(item.marca);
        }
        return retorno;
    }
    buscaCatalogo(filtros) {
        var marca = filtros[1];
        var fabricante = filtros[2];
        var modelo = filtros[3];
        var dados = CatalogoController.DATA_MOCK;
        var retorno = [];
        for (var i = 0; i < dados.length; i++) {
            var item = dados[i];
            if (item.marca == marca) {
                for (var a = 0; a < item.aplicacao.length; a++) {
                    var veiculo = item.aplicacao[a];
                    if (veiculo.fabricante == fabricante ||
                        veiculo.modelo == modelo) {
                        retorno.push({
                            sku: item.sku,
                            marca: item.marca,
                            item: item.nomeItem,
                            fabricante: veiculo.fabricante,
                            veiculo: veiculo.modelo,
                            ano: veiculo.ano
                        });
                    }
                }
            }
        }
        return retorno;
    }
}
//exports.CatalogoController = CatalogoController;
CatalogoController.DATA_MOCK = null;
