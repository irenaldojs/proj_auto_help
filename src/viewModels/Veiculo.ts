export class Veiculo
{
    public fabricante: string = '';
    public modelo: string = '';
    public ano: string = '';

    constructor({fabricante, modelo, ano}:
        {
            fabricante: string,
            modelo: string,
            ano: string
        })
    {
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.ano = ano;
    }
}