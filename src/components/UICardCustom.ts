import { ICustomWidgetPresenter, Widget } from "../Objective-UI";

export class UICardCustom extends Widget {

    public divElement: HTMLDivElement;
    public titleElement: HTMLOptionElement;
    public bodyElement: HTMLUListElement;

    title: string[]
    data: {}

    constructor({ name, title, data }:
        {
            name: string;
            title: string[];
            data: {};
        }) {
        super(name);
        this.title = title
        this.data = data
    }

    protected htmlTemplate(): string {

        return `<div id="fsCard" class="col-12 col-sm-3 p-2 fit">
                    <div id="fsBody" class="bg-light p-2 rounded">
                        <h5 id="fsTitle" class="text-center"><div>
                    </div>
                </div>
                `
    }

    protected onWidgetDidLoad(): void {
        var self = this;
        this.divElement = this.elementById('fsCard')
        this.titleElement = this.elementById('fsTitle')
        this.bodyElement = this.elementById('fsBody')
        this.mountTitle()
        this.mountCard()
    }

    protected mountTitle(){
        let title = ''
        this.title.forEach(e => title += e.toUpperCase() + " ")
        this.titleElement.textContent = title
    }

    public mountCard() {
        for(let row in this.data){
            const leftText = row
            const rightText: string = this.data[leftText]
            const left = `<div class="font-italic">${leftText}:</div>`
            const right = `<div class="ml-1 text-right fem-15 font-weight-bold">${rightText.toUpperCase()}</div>`
            const rowElement = `<div class="d-flex flex-row justify-content-between">${left}${right}</div>`        
            this.bodyElement.insertAdjacentHTML('beforeend', rowElement)
        }
       
    }
    
    public value(): string {
        return this.widgetName
    }

    public setVisible(visible: boolean): void {
        this.divElement.hidden = (visible == false);
    }

    public setEnabled(enabled: boolean): void {
        throw new Error("Button does not support value");
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

    public setCustomPresenter(renderer: ICustomWidgetPresenter<UICardCustom>): void {
        renderer.render(this);
    }
}