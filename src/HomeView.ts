import { PublicityView } from './views/PublicityView';
import { Widget, UIView, ViewLayout, Row, Col, UILabel, WebAPI } from "./Objective-UI"

import { FooterView } from './views/FooterView';
import { ContentView } from './views/ContentView';

import { UIButtonImage } from './components/UIButtonImage';
import { UINavBarCustom } from './components/UINavBarCustom';
import { CatalogoController } from "./mockApi/CatalogoController";


export class HomeView extends UIView {
    private static $: HomeView;

    // Header
    logoImg = new UIButtonImage({ name: 'logoImg', imageSrc: './img/logo.png', imageheight: '100%', imageWidth: 'auto' })
    logoText = new UILabel({ name: 'logoText', text: 'AutoHelp' })

    navBar = new UINavBarCustom({ name: 'navBar', cssClass: 'text-light pt-5' })


    constructor() {
        super();
        HomeView.$ = this;

        WebAPI.useSimulator(new CatalogoController());
    }

    buildLayout(): ViewLayout {
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
        ])
    }

    composeView(): void {
        this.addWidgets('bannerContainer', this.logoImg, this.logoText)
        this.addWidgets('navContainer', this.navBar)

    }

    onViewDidLoad(): void {
        this.mountTabs()
        this.styleWidgets()

        this.shellPage.navigateToView(new FooterView())
        this.shellPage.navigateToView(new ContentView())
        this.shellPage.navigateToView(new PublicityView())
    }

    styleWidgets() {
        this.addListCSSClass(this.logoImg, [])
        this.addListCSSClass(this.logoText, ['fem-3', 'p-3', 'me-5'])
    }

    mountTabs() {
        this.navBar.addTab('INÍCIO', '/index.html')
        this.navBar.addTab('ONDE COMPRAR?', '#publicity')
        this.navBar.addTab('SOBRE NÓS', '#footer')
    }

    addListCSSClass(widget: Widget, listClass: string[]) {
        listClass.forEach(e => {
            widget.addCSSClass(e)
        })
    }
}
