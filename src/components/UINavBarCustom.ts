import { ICustomWidgetPresenter, Widget } from "../Objective-UI";


export class UINavBarCustom extends Widget {

    public uiElement: HTMLUListElement;
    public selectElement: HTMLSelectElement;
    public titleElement: HTMLOptionElement;

    private cssClass: string;

    constructor({ name, cssClass }:
        {
            name: string;
            cssClass?: string
        }) {
        super(name);

        this.cssClass = cssClass;
    }

    protected htmlTemplate(): string {

        return `<ul id="uiElement" class="nav">
                </ul>
                `
    }

    protected onWidgetDidLoad(): void {
        var self = this;
        this.uiElement = this.elementById('uiElement')
    }

    public addTab(name: string, href: string) {
        const liElement = `
            <li class="nav-item">
                <a class="nav-link text-decoration-none ${this.cssClass}" href="${href}">${name}</a>
            </li>`
        this.uiElement.insertAdjacentHTML("beforeend", liElement)
    }

    public value(): string {
        throw new Error("Button does not support value");
    }

    public setVisible(visible: boolean): void {
        this.uiElement.hidden = (visible == false);
    }

    public setEnabled(enabled: boolean): void {
        throw new Error("Button does not support value");
    }

    public addCSSClass(className: string): void {
        this.uiElement.classList.add(className);
    }

    public removeCSSClass(className: string): void {
        this.uiElement.classList.remove(className);
    }

    public applyCSS(propertyName: string, propertyValue: string): void {
        this.uiElement.style.setProperty(propertyName, propertyValue);
    }

    public setPosition(position: string,
        marginLeft: string,
        marginTop: string,
        marginRight?: string,
        marginBottom?: string,
        transform?: string): void {
        this.uiElement.style.position = position;
        this.uiElement.style.left = marginLeft;
        this.uiElement.style.top = marginTop;
        this.uiElement.style.right = `${marginRight}`;
        this.uiElement.style.bottom = `${marginBottom}`;
        this.uiElement.style.transform = `${transform}`;
    }

    public setCustomPresenter(renderer: ICustomWidgetPresenter<UINavBarCustom>): void {
        renderer.render(this);
    }
}
