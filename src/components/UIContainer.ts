import { ICustomWidgetPresenter, Widget } from "../Objective-UI";

export class UIContainer extends Widget {

    divContainer: HTMLElement

    cssClass: string
    bgColor: string
    txColor: string
    height: string
    width: string
    margin: string
    padding: string
    child: Widget[]

    constructor({
        name,
        cssClass = 'container',
        bgColor = "white",
        txColor = "black",
        height = "max-content",
        width = "max-content",
        margin = '0px',
        padding = '0px',
    }:
        {
            name: string;
            cssClass?: string;
            bgColor?: string;
            txColor?: string;
            height?: string;
            width?: string;
            margin?: string;
            padding?: string;
        }) {
        super(name);

        this.cssClass = cssClass
        this.bgColor = bgColor;
        this.txColor = txColor;
        this.height = height;
        this.width = width;
        this.margin = margin;
        this.padding = padding;
    }

    protected htmlTemplate(): string {
        return `<div id="fnContainer" class="container"></div>`
    }

    protected onWidgetDidLoad(): void {
        this.divContainer = this.elementById('fnContainer')

        this.divContainer.style.backgroundColor = this.bgColor
        this.divContainer.style.color = this.txColor
        this.divContainer.style.width = this.width
        this.divContainer.style.margin = this.margin
        this.divContainer.style.padding = this.padding

        this.divContainer.classList.add(this.cssClass)
    }

    public setChildren(children: Array<Widget>) {
        children.forEach(element => {
            this.divContainer.appendChild(element.getDOMElement())
        })
    }

    public setCustomPresenter(presenter: ICustomWidgetPresenter<Widget>): void {
        throw new Error("Method not implemented.");
    }
    public value(): string {
        throw new Error("Method not implemented.");
    }
    public setEnabled(enabled: boolean): void {
        throw new Error("Method not implemented.");
    }
    public addCSSClass(className: string): void {
        this.divContainer.classList.add(className)
    }
    public removeCSSClass(className: string): void {
        this.divContainer.classList.remove(className)
    }
    public applyCSS(propertyName: string, propertyValue: string): void {
        this.divContainer.style.setProperty(propertyName, propertyValue)
    }
    public setPosition(position: string, marginLeft: string, marginTop: string, marginRight: string, marginBottom: string, transform?: string): void {
        this.divContainer.style.position = position;
        this.divContainer.style.left = marginLeft;
        this.divContainer.style.top = marginTop;
        this.divContainer.style.right = `${marginRight}`;
        this.divContainer.style.bottom = `${marginBottom}`;
        this.divContainer.style.transform = `${transform}`;
    }
    public setVisible(visible: boolean): void {
        this.divContainer.hidden = !visible
    }

}
