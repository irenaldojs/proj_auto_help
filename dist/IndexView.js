"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.IndexView = void 0;
class IndexView extends UIView {
    constructor() {
        super();
        IndexView.$ = this;
    }
    buildLayout() {
        return new ViewLayout('app', [
            new Row('rowContainer', {
                columns: [
                    new Col('appContainer', {})
                ]
            })
        ]);
    }
    composeView() {
    }
    onViewDidLoad() {
        //this.shellPage.navigateToView(new LoginView())
    }
}
//exports.IndexView = IndexView;
