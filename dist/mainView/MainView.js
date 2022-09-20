"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.MainView = void 0;
class MainView extends UIView {
    constructor() {
        super();
        // Header
        this.bannerContainer = {
            logoImg: new UIButtonImage({
                name: 'logoImg',
                imageSrc: './img/logo.png',
                imageheight: '100%',
                imageWidth: 'auto'
            }),
            logoText: new UILabel({
                name: 'logoText',
                text: 'AutoHelp'
            })
        };
        this.navBar = new UINavBarCustom({ name: 'navBar', cssClass: 'text-light pt-1' });
        this.userIcon = new UIButtonIcon({ name: 'userIcon', fsIcon: 'fas fa-user-circle fem-3' });
        this.userName = new UILabel({ name: 'userName', text: 'Usuario' });
        this.spacingContainer = new UIContainer({ name: 'spacingContainer', cssClass: 'space-top' });
        MainView.$ = this;
    }
    buildLayout() {
        return new ViewLayout('app', [
            new Row('mainHeader', {
                rowHeidth: 'max-content',
                rowClass: `col-12 d-flex justify-content-start justify-content-sm-start flex-row 
                            flex-wrap text-light bg-dark bg-gradient p-2 mx-0 fixed-top align-items-end`,
                columns: [
                    new Col('bannerContainer', {
                        colHeight: '50px',
                        colClass: 'order-1 flex-grow-1 flex-sm-grow-0 d-inline-flex flex-row p-0 mr-5 justify-content-center justify-content-sm-start',
                    }),
                    new Col('navContainer', {
                        colHeight: 'max-content',
                        colClass: 'order-3 order-sm-2 flex-grow-0 flex-sm-grow-1 d-inline-flex flex-row p-0 justify-content-center justify-content-sm-start'
                    }),
                    new Col('userContainer', {
                        colHeight: 'max-content',
                        colClass: 'order-2 order-sm-3 flex-grow-0 p-1'
                    })
                ]
            }),
            new Row('headerSpacing', { rowClass: 'd-flex', rowHeidth: 'max-content' }),
            new Row('content', {
                rowHeidth: '600px',
                rowClass: 'rounded bg-secondary bg-gradient'
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
        this.addWidgets('bannerContainer', this.bannerContainer.logoImg, this.bannerContainer.logoText);
        this.addWidgets('navContainer', this.navBar);
        this.addWidgets('userContainer', this.userName, this.userIcon);
        this.addWidgets('headerSpacing', this.spacingContainer);
    }
    onViewDidLoad() {
        const $ = MainView.$.shellPage;
        this.mountTabs();
        this.shellPage.navigateToView(new FooterView());
        this.shellPage.navigateToView(new ContentView());
        this.shellPage.navigateToView(new PublicityView());
        this.styleWidgets();
    }
    styleWidgets() {
        this.addListCSSClass(this.bannerContainer.logoImg, []);
        this.addListCSSClass(this.bannerContainer.logoText, ['fem-2', 'p-1', 'me-5']);
        this.addListCSSClass(this.userName, ['fem-15', 'd-none', 'd-sm-inline-block', 'pr-2', 'p-0', 'm-0']);
    }
    mountTabs() {
        this.navBar.addTab('INÍCIO', '#headerSpacing');
        this.navBar.addTab('ONDE COMPRAR?', '#publicity');
        this.navBar.addTab('SOBRE NÓS', '#footer');
    }
    addListCSSClass(widget, listClass) {
        listClass.forEach(e => {
            widget.addCSSClass(e);
        });
    }
}
//exports.MainView = MainView;
