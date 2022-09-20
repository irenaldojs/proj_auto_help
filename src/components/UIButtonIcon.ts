import { ICustomWidgetPresenter, Widget } from "../Objective-UI";

export class UIButtonIcon extends Widget {

    iconElement: HTMLImageElement

    cssClass: string;
    fsIcon: string;

    public onClick: Function;

    constructor({ name, fsIcon = 'fa-solid fa-house' }:
        {
            name: string;
            fsIcon: string;
            cssClass?: string;
        }) {
        super(name);

        this.fsIcon = fsIcon;
    }

    protected htmlTemplate(): string {
        return `<i id="fsIcon"></i>`

    }

    protected onWidgetDidLoad(): void {
        var self = this;
        this.iconElement = this.elementById('fsIcon');
        this.iconElement.className = this.fsIcon
        this.iconElement.style.cursor = "pointer"


        if (self.onClick != null) {
            this.iconElement.onclick = function (ev) {
                self.onClick(ev);
            };
        }
    }

    public value(): string {
        throw new Error("Button does not support value");
    }

    public setVisible(visible: boolean): void {
        this.iconElement.hidden = (visible == false);
    }

    public setEnabled(enabled: boolean): void {
        throw new Error("Button does not support value");
    }

    public addCSSClass(className: string): void {
        this.iconElement.classList.add(className);
    }

    public removeCSSClass(className: string): void {
        this.iconElement.classList.remove(className);
    }

    public applyCSS(propertyName: string, propertyValue: string): void {
        this.iconElement.style.setProperty(propertyName, propertyValue);
    }

    public setPosition(position: string,
        marginLeft: string,
        marginTop: string,
        marginRight?: string,
        marginBottom?: string,
        transform?: string): void {
        this.iconElement.style.position = position;
        this.iconElement.style.left = marginLeft;
        this.iconElement.style.top = marginTop;
        this.iconElement.style.right = `${marginRight}`;
        this.iconElement.style.bottom = `${marginBottom}`;
        this.iconElement.style.transform = `${transform}`;
    }

    public setCustomPresenter(renderer: ICustomWidgetPresenter<UIButtonIcon>): void {
        renderer.render(this);
    }
}
