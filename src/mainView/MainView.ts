import { Widget, UIView, ViewLayout, Row, Col, UILabel, WebAPI } from "../Objective-UI"

import { PublicityView } from './PublicityView';
import { FooterView } from './FooterView';
import { ContentView } from './ContentView';

import { UIButtonImage } from '../components/UIButtonImage';
import { UINavBarCustom } from '../components/UINavBarCustom';


export class MainView extends UIView {
    private static $: MainView;

    // Header
    logoImg = new UIButtonImage({ name: 'logoImg', imageSrc: './img/logo.png', imageheight: '100%', imageWidth: 'auto' })
    logoText = new UILabel({ name: 'logoText', text: 'AutoHelp' })

    navBar = new UINavBarCustom({ name: 'navBar', cssClass: 'text-light pt-5' })

    contentElement: HTMLDivElement

    constructor() {
        super();
        MainView.$ = this;

    }

    buildLayout(): ViewLayout {
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
        ])
    }

    composeView(): void {
        this.addWidgets('bannerContainer', this.logoImg, this.logoText)
        this.addWidgets('navContainer', this.navBar)

    }

    onViewDidLoad(): void {
        const $ = MainView.$.shellPage
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
        this.navBar.addTab('INÍCIO', '#content')
        this.navBar.addTab('ONDE COMPRAR?', '#publicity')
        this.navBar.addTab('SOBRE NÓS', '#footer')
    }
    marginTop(): void {



    }
    addListCSSClass(widget: Widget, listClass: string[]) {
        listClass.forEach(e => {
            widget.addCSSClass(e)
        })
    }
}
