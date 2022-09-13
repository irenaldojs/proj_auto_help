import { LoginView } from "./loginView/LoginView";
import { Col, Row, UIView, ViewLayout } from "./Objective-UI";


export class IndexView extends UIView {
    private static $: IndexView;

    constructor() {
        super();
        IndexView.$ = this;
    }

    buildLayout(): ViewLayout {
        return new ViewLayout('app', [
            new Row('rowContainer', {
                columns: [
                    new Col('appContainer', {})
                ]
            })
        ])
    }
    composeView(): void {

    }
    onViewDidLoad(): void {
        //this.shellPage.navigateToView(new LoginView())
    }
}
