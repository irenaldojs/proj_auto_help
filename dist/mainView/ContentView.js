"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.ContentView = void 0;
class ContentView extends UIView {
    constructor() {
        super();
        this.selectCatalog = new UISelectCustom({ name: 'selectCatalog', title: 'Catálogos...', cssClass: 'col-12 col-sm-3 my-1' });
        this.selectBrand = new UISelectCustom({ name: 'selectBrand', title: 'Marca...', cssClass: 'col-12 col-sm-3 my-1' });
        this.selectCar = new UISelectCustom({ name: 'selectCar', title: 'Carro...', cssClass: 'col-12 col-sm-3 my-1' });
        this.inputYear = new UIInputCustom({ name: 'inputYear', placeholder: 'Ano ex: "1999"', type: 'number', cssClass: 'col-12 col-sm-2 my-1' });
        ContentView.$ = this;
    }
    buildLayout() {
        return new ViewLayout('content', [
            new Row('fastQuery', {
                rowHeidth: 'max-content',
                rowClass: 'd-flex flex-wrap justify-content-center py-1 my-2 mx-0 w-100',
            }),
            new Row('cards', {
                rowHeidth: 'max-content',
                rowClass: 'd-flex flex-wrap justify-content-center m-0',
            }),
        ]);
    }
    composeView() {
        this.addWidgets('fastQuery', this.selectCatalog, this.selectBrand, this.selectCar, this.inputYear);
    }
    onViewDidLoad() {
        var $ = ContentView.$;
        this.styleWidgets();
    }
    styleWidgets() {
        this.inputYear.inputElement.maxLength = 4;
    }
    addListCSSClass(widget, listClass) {
        listClass.forEach(e => {
            widget.addCSSClass(e);
        });
    }
}
//exports.ContentView = ContentView;
