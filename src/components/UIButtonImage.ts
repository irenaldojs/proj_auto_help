import { ICustomWidgetPresenter, Widget } from "../Objective-UI";

export class UIButtonImage extends Widget {

    public imageElement: HTMLImageElement;

    public onClick: Function;
    private imageSrc: string;
    private imageWidth: string;
    private imageheight: string;
    private cssClass: string;

    constructor({ name, imageSrc, imageWidth, imageheight, cssClass }:
        {
            name: string;
            imageSrc?: string;
            imageWidth?: string,
            imageheight?: string,
            cssClass?: string
        }) {
        super(name);

        this.imageSrc = imageSrc;
        this.imageWidth = imageWidth;
        this.imageheight = imageheight;
        this.cssClass = cssClass;
    }

    protected htmlTemplate(): string {
        return `<img alt="img" id="fsButtonImage" src="/icons/sb_menu.png" height="20" width="20" ></img>`

    }

    protected onWidgetDidLoad(): void {
        var self = this;
        this.imageElement = this.elementById('fsButtonImage');
        this.imageElement.src = this.imageSrc;
        this.imageElement.style.width = this.imageWidth;
        this.imageElement.style.height = this.imageheight;
        this.imageElement.style.cursor = "pointer";
        this.imageElement.className = this.cssClass;

        if (self.onClick != null) {
            this.imageElement.onclick = function (ev) {        
                self.onClick(ev);
            };
        }
    }

    public value(): string {
        throw new Error("Button does not support value");
    }

    public setVisible(visible: boolean): void {
        this.imageElement.hidden = (visible == false);
    }

    public setEnabled(enabled: boolean): void {
        throw new Error("Button does not support value");
    }

    public addCSSClass(className: string): void {
        this.imageElement.classList.add(className);
    }

    public removeCSSClass(className: string): void {
        this.imageElement.classList.remove(className);
    }

    public applyCSS(propertyName: string, propertyValue: string): void {
        this.imageElement.style.setProperty(propertyName, propertyValue);
    }

    public setPosition(position: string,
        marginLeft: string,
        marginTop: string,
        marginRight?: string,
        marginBottom?: string,
        transform?: string): void {
        this.imageElement.style.position = position;
        this.imageElement.style.left = marginLeft;
        this.imageElement.style.top = marginTop;
        this.imageElement.style.right = `${marginRight}`;
        this.imageElement.style.bottom = `${marginBottom}`;
        this.imageElement.style.transform = `${transform}`;
    }

    public setCustomPresenter(renderer: ICustomWidgetPresenter<UIButtonImage>): void {
        renderer.render(this);
    }
}