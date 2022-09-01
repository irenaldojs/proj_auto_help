import { ICustomWidgetPresenter, Widget } from "../Objective-UI";

export class UIInputCustom extends Widget {

    public divElement: HTMLDivElement;
    public inputElement: HTMLInputElement

    private placeholder: string
    private type: string;
    private cssClass: string;

    constructor({ name, placeholder, type = 'text', cssClass = 'col-12' }:
        {
            name: string;
            placeholder: string;
            type?: string; 
            cssClass?: string;
        }) {
        super(name);

        this.placeholder = placeholder;
        this.type = type;
        this.cssClass = cssClass;
    }

    protected htmlTemplate(): string {
        return `<div id="fsElement"class="input-group mb-3">
                    <input id="fsInput" type="text" class="form-control" placeholder="default" aria-label="default" aria-describedby="basic-addon1">
                </div>`

    }

    protected onWidgetDidLoad(): void {
        var self = this;
        this.divElement = this.elementById('fsElement');
        this.divElement.className = this.cssClass;
        this.inputElement = this.elementById('fsInput')
        this.inputElement.placeholder = this.placeholder
        this.inputElement.ariaLabel = this.placeholder
        this.inputElement.type = this.type
    }

    public value(): string {
        throw new Error("Button does not support value");
    }

    public setVisible(visible: boolean): void {
        this.divElement.hidden = (visible == false);
    }

    public setEnabled(enabled: boolean): void {
        this.inputElement.disabled = !enabled
    }

    public addCSSClass(className: string): void {
        this.divElement.classList.add(className);
    }

    public removeCSSClass(className: string): void {
        this.divElement.classList.remove(className);
    }

    public applyCSS(propertyName: string, propertyValue: string): void {
        this.divElement.style.setProperty(propertyName, propertyValue);
    }

    public setPosition(position: string,
        marginLeft: string,
        marginTop: string,
        marginRight?: string,
        marginBottom?: string,
        transform?: string): void {
        this.divElement.style.position = position;
        this.divElement.style.left = marginLeft;
        this.divElement.style.top = marginTop;
        this.divElement.style.right = `${marginRight}`;
        this.divElement.style.bottom = `${marginBottom}`;
        this.divElement.style.transform = `${transform}`;
    }

    public setCustomPresenter(renderer: ICustomWidgetPresenter<UIInputCustom>): void {
        renderer.render(this);
    }
}