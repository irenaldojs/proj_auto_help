import { Row, UIView, ViewLayout, Widget } from "../Objective-UI"
import { UISelectCustom } from '../components/UISelectCustom';
import { UIInputCustom } from '../components/UIInputCustom';
import { CatalogoAPIClient } from "../mockApi/CatalogoAPIClient";
import { RetornoAPICatalogo } from "../viewModels/RetornoAPICatalogo";

export class ContentView extends UIView {

    private static $: ContentView;

    private selectCatalog = new UISelectCustom({ name: 'selectCatalog', title: 'Catálogos...', cssClass: 'col-12 col-sm-3 my-1' })
    private selectBrand = new UISelectCustom({ name: 'selectBrand', title: 'Marca...', cssClass: 'col-12 col-sm-3 my-1' })
    private selectCar = new UISelectCustom({ name: 'selectCar', title: 'Carro...', cssClass: 'col-12 col-sm-3 my-1' })
    private inputYear = new UIInputCustom({ name: 'inputYear', placeholder: 'Ano ex: "1999"', type: 'number', cssClass: 'col-12 col-sm-2 my-1' })

constructor() {
    super()
    ContentView.$ = this;

}


buildLayout(): ViewLayout {
    return new ViewLayout('content', [
        new Row('fastQuery', {
            rowHeidth: 'max-content',
            rowClass: 'd-flex flex-wrap justify-content-center py-1 my-2 mx-0 w-100',
        }),
        new Row('cards', {
            rowHeidth: 'max-content',
            rowClass: 'd-flex flex-wrap justify-content-center m-0',
        }),
    ])
}
composeView(): void {
    this.addWidgets('fastQuery', this.selectCatalog, this.selectBrand, this.selectCar, this.inputYear)
}

onViewDidLoad(): void {   
    var $ = ContentView.$;

    var catalog = $.selectCatalog.value()
    var brand = $.selectBrand.value()
    var car = $.selectCar.value()
    CatalogoAPIClient.ListarAplicacoes(catalog, brand, car, function(dados: Array<RetornoAPICatalogo>){
        console.log(dados, catalog);
    });

    CatalogoAPIClient.GetFabricantes(function (fabricantes: Array<string>) {
        console.log('fabricantes');
        $.selectBrand.FromList(fabricantes)
    });

    CatalogoAPIClient.GetMarcas(function (marcas: Array<string>) {
        console.log('marcas');
        $.selectCatalog.FromList(marcas)
    });

    this.styleWidgets()

}

styleWidgets(): void {
    this.inputYear.inputElement.maxLength = 4
    console.log('chamado');
}

addListCSSClass(widget: Widget, listClass: string[]) {
    listClass.forEach(e => {
        widget.addCSSClass(e)
    })
}
}