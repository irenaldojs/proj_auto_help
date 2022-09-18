"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.MainView = void 0;
class MainView extends UIView {
    constructor() {
        super();
        // Header
        this.logoImg = new UIButtonImage({ name: 'logoImg', imageSrc: './img/logo.png', imageheight: '100%', imageWidth: 'auto' });
        this.logoText = new UILabel({ name: 'logoText', text: 'AutoHelp' });
        this.navBar = new UINavBarCustom({ name: 'navBar', cssClass: 'text-light pt-5' });
        MainView.$ = this;
    }
    buildLayout() {
        return new ViewLayout('app', [
            new Row('mainHeader', {
                rowHeidth: 'max-content',
                rowClass: 'col-12 d-flex justify-content-start flex-row flex-wrap text-light bg-dark bg-gradient p-2 mx-0 fixed-top',
                columns: [
                    new Col('bannerContainer', {
                        colClass: 'd-inline-flex flex-row p-0'
                    }),
                    new Col('navContainer', {
                        colClass: 'd-inline-flex flex-row p-0'
                    }),
                ]
            }),
            new Row('content', {
                rowHeidth: '600px',
                rowClass: 'rounded bg-secondary bg-gradient pd-top '
            }),
            new Row('publicity', {
                rowClass: 'd-flex flex-wrap justify-content-center bg-dark',
            }),
            new Row('footer', {
                rowHeidth: 'max-content',
                rowClass: 'w-100 bg-dark',
            }),
        ]);
    }
    composeView() {
        this.addWidgets('bannerContainer', this.logoImg, this.logoText);
        this.addWidgets('navContainer', this.navBar);
    }
    onViewDidLoad() {
        const $ = MainView.$.shellPage;
        this.mountTabs();
        this.styleWidgets();
        this.shellPage.navigateToView(new FooterView());
        this.shellPage.navigateToView(new ContentView());
        this.shellPage.navigateToView(new PublicityView());
    }
    styleWidgets() {
        this.addListCSSClass(this.logoImg, []);
        this.addListCSSClass(this.logoText, ['fem-3', 'p-3', 'me-5']);
    }
    mountTabs() {
        this.navBar.addTab('INÍCIO', '#content');
        this.navBar.addTab('ONDE COMPRAR?', '#publicity');
        this.navBar.addTab('SOBRE NÓS', '#footer');
    }
    marginTop() {
    }
    addListCSSClass(widget, listClass) {
        listClass.forEach(e => {
            widget.addCSSClass(e);
        });
    }
}
//exports.MainView = MainView;
