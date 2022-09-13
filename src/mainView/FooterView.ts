import { UIAnchor } from '../components/UIAnchor'
import { Col, Row, UITemplateView, UIView, ViewLayout, Widget } from "../Objective-UI"

export class FooterView extends UIView {
    text = ['Cod3r', 'Udemy', 'DevFast Group', 'Marcos Vinícius Dev']

    logoFacebook = new UIAnchor({ name: 'logoFacebook', href: 'https://www.facebook.com/irenaldo.silva.52', cssClass: 'text-decoration-none' })
    logoGitHub = new UIAnchor({ name: 'logoGitHub', href: 'https://github.com/irenaldojs', cssClass: 'text-decoration-none' })
    logoLinkedin = new UIAnchor({ name: 'logoLinkedin', href: 'https://www.linkedin.com/in/irenaldo-j%C3%BAnior-da-silva/', cssClass: 'text-decoration-none' })
    logoEmail = new UIAnchor({ name: 'logoEmail', href: "mailto:irenaldojs@gmail.com", cssClass: 'text-decoration-none' })

    private static $: FooterView;

    constructor() {
        super()
        FooterView.$ = this;
    }

    buildLayout(): ViewLayout {
        return new ViewLayout('footer', [
            new Row('rowFooter', {
                rowClass: 'd-flex flex-wrap justify-content-center pb-5 py-1 bg-success bg-gradient mx-0 w-100',
                columns: [
                    new Col('socialNetworks', {
                        colHeight: 'max-content',
                        colClass: 'col-12 col-sm-4 d-flex flex-column align-items-start'
                    }),
                    new Col('specialThanks', {
                        colHeight: 'max-content',
                        colClass: 'col-12 col-sm-4 d-flex flex-column align-items-start'
                    }),
                ]
            })
        ])
    }
    composeView(): void {
        this.addWidgets('socialNetworks', this.logoFacebook, this.logoLinkedin, this.logoGitHub, this.logoEmail)
    }
    onViewDidLoad(): void {

        this.specialThanks()
        this.styleWidgets()
    }

    styleWidgets() {
        this.logoFacebook.anchorElement.innerHTML = '<i class="fab fa-facebook"> Facebook</i>'
        this.logoLinkedin.anchorElement.innerHTML = '<i class="fab fa-linkedin"> Linkedin</i>'
        this.logoGitHub.anchorElement.innerHTML = '<i class="fab fa-github"> Github</i>'
        this.logoEmail.anchorElement.innerHTML = '<i class="far fa-envelope"> irenaldojs@gmail.com</i>'
        var styleIcons = ['fem-2', 'text-light']
        this.addListCSSClass(this.logoFacebook, styleIcons)
        this.addListCSSClass(this.logoLinkedin, styleIcons)
        this.addListCSSClass(this.logoGitHub, styleIcons)
        this.addListCSSClass(this.logoEmail, styleIcons)
    }

    specialThanks(): void {
        const template: UITemplateView = this.inflateTemplateView(`<div id="specialThanks-div" class="text-light text-left f-tanks">Agradecimentos:</div>`);
        const divElement: HTMLParagraphElement = template.elementById('specialThanks-div');
        this.text.forEach(e => {
            divElement.innerHTML += `<div class="ml-3">${e}</div>`
        })

        const divToAppend = this.shellPage.elementById('specialThanks');
        this.shellPage.appendChildToElement(divToAppend, divElement);
    }

    addListCSSClass(widget: Widget, listClass: string[]) {
        listClass.forEach(e => {
            widget.addCSSClass(e)
        })
    }
}
