import { Veiculo } from "./Veiculo";

export class CatalogoItem
{
    public sku: string = '';
    public nomeItem: string = '';
    public aplicacao: Array<Veiculo> = null;
    public marca: string = '';

    constructor({sku, marca, nomeItem, aplicacao}: 
        {
            sku: string,
            marca: string;
            nomeItem: string,
            aplicacao: Array<Veiculo>
        })    
    {
        this.sku = sku;
        this.marca = marca;
        this.nomeItem = nomeItem;
        this.aplicacao = aplicacao;
    }
}