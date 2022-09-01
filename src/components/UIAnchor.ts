import { ICustomWidgetPresenter, Widget } from "../Objective-UI";

export class UIAnchor extends Widget {

    public anchorElement: HTMLAnchorElement;

    private text: string;
    private href: string;
    private cssClass: string;

    constructor({ name, text, href, cssClass}:
        {
            name: string;
            text?: string;
            href?: string,
            cssClass?: string
        }) {
        super(name);

        this.text = text;
        this.href = href;
        this.cssClass = cssClass;
    }

    protected htmlTemplate(): string {
        return `<a id="fsAnchor" href="https://www.google.com"></a>`
    }

    protected onWidgetDidLoad(): void {
        var self = this;
        this.anchorElement = this.elementById('fsAnchor');
        this.anchorElement.text = this.text
        this.anchorElement.href = this.href
        this.anchorElement.className = this.cssClass;

    }

    public value(): string {
        throw new Error("Button does not support value");
    }

    public setVisible(visible: boolean): void {
        this.anchorElement.hidden = (visible == false);
    }

    public setEnabled(enabled: boolean): void {
        throw new Error("Button does not support value");
    }

    public addCSSClass(className: string): void {
        this.anchorElement.classList.add(className);
    }

    public removeCSSClass(className: string): void {
        this.anchorElement.classList.remove(className);
    }

    public applyCSS(propertyName: string, propertyValue: string): void {
        this.anchorElement.style.setProperty(propertyName, propertyValue);
    }

    public setPosition(position: string,
        marginLeft: string,
        marginTop: string,
        marginRight?: string,
        marginBottom?: string,
        transform?: string): void {
        this.anchorElement.style.position = position;
        this.anchorElement.style.left = marginLeft;
        this.anchorElement.style.top = marginTop;
        this.anchorElement.style.right = `${marginRight}`;
        this.anchorElement.style.bottom = `${marginBottom}`;
        this.anchorElement.style.transform = `${transform}`;
    }

    public setCustomPresenter(renderer: ICustomWidgetPresenter<UIAnchor>): void {
        renderer.render(this);
    }
}