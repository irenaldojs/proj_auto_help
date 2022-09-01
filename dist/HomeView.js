"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.HomeView = void 0;
class HomeView extends UIView {
    constructor() {
        super();
        // Header
        this.logoImg = new UIButtonImage({ name: 'logoImg', imageSrc: './img/logo.png', imageheight: '100%', imageWidth: 'auto' });
        this.logoText = new UILabel({ name: 'logoText', text: 'AutoHelp' });
        this.navBar = new UINavBarCustom({ name: 'navBar', cssClass: 'text-light pt-5' });
        HomeView.$ = this;
        WebAPI.useSimulator(new CatalogoController());
    }
    buildLayout() {
        return new ViewLayout('app', [
            new Row('mainHeader', {
                rowHeidth: 'max-content',
                rowClass: 'col-12 d-flex justify-content-start flex-row flex-wrap text-light  bg-gradient p-2 mx-0',
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
                rowClass: 'm-2 p1 rounded bg-secondary bg-gradient'
            }),
            new Row('publicity', {
                rowClass: 'd-flex flex-wrap justify-content-center',
            }),
            new Row('footer', {
                rowHeidth: 'max-content',
                rowClass: 'w-100',
            }),
        ]);
    }
    composeView() {
        this.addWidgets('bannerContainer', this.logoImg, this.logoText);
        this.addWidgets('navContainer', this.navBar);
    }
    onViewDidLoad() {
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
        this.navBar.addTab('INÍCIO', '/index.html');
        this.navBar.addTab('ONDE COMPRAR?', '#publicity');
        this.navBar.addTab('SOBRE NÓS', '#footer');
    }
    addListCSSClass(widget, listClass) {
        listClass.forEach(e => {
            widget.addCSSClass(e);
        });
    }
}
//exports.HomeView = HomeView;
