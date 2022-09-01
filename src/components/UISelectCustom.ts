import { ICustomWidgetPresenter, Widget } from "../Objective-UI";

export class UISelectCustom extends Widget {

    public divElement: HTMLDivElement;
    public selectElement: HTMLSelectElement;
    public titleElement: HTMLOptionElement;

    public title: string;
    private cssClass: string;
    public onSelectionChanged: Function = null;
    private list: []

    constructor({ name, title, cssClass }:
        {
            name: string;
            title: string;
            cssClass?: string
        }) {
        super(name);

        this.title = title;
        this.cssClass = cssClass;
    }

    protected htmlTemplate(): string {

        return `<div id="fsSelectDiv" class="${this.cssClass}">
                    <select id="fsSelect" class="custom-select text-capitalize w-100" aria-label="Default select example">
                    </select>
                </div>
                `
    }

    protected onWidgetDidLoad(): void {
        var self = this;
        this.divElement = this.elementById('fsSelectDiv')
        this.selectElement = this.elementById('fsSelect')
        this.InitialState()

        this.selectElement.onchange = (ev) => {
            if (self.onSelectionChanged != null) {
                console.log('primeira chamada');
                self.onSelectionChanged(ev);
            } else {
                console.log('vazio');
            }
        }

    }

    public InitialState() {
        this.selectElement.innerHTML = `<option id="fsTitle" selected>${this.title}</option>`
        this.titleElement = this.elementById('fsTitle')
    }

    private AddItem(name: string) {
        const optionElement = `<option value="${name}">${name}</option>`
        this.selectElement.insertAdjacentHTML("beforeend", optionElement)
    }
    public FromList(models: Array<any>,
        valueProperty?: string,
        displayProperty?: string) {

        if (models == null || models == undefined) return;

        try {
            console.log(models);
            models.forEach(e => this.AddItem(e))
        }
        catch (error) {
            this.processError(error);
        }

    }
    public value(): string {
        if(this.selectElement != undefined && this.selectElement != null){
            return this.selectElement.value
        }else{
            return ''
        }
    }

    public setVisible(visible: boolean): void {
        this.selectElement.hidden = (visible == false);
    }

    public setEnabled(enabled: boolean): void {
        this.selectElement.disabled = !enabled
    }

    public addCSSClass(className: string): void {
        this.selectElement.classList.add(className);
    }

    public removeCSSClass(className: string): void {
        this.selectElement.classList.remove(className);
    }

    public applyCSS(propertyName: string, propertyValue: string): void {
        this.selectElement.style.setProperty(propertyName, propertyValue);
    }

    public setPosition(position: string,
        marginLeft: string,
        marginTop: string,
        marginRight?: string,
        marginBottom?: string,
        transform?: string): void {
        this.selectElement.style.position = position;
        this.selectElement.style.left = marginLeft;
        this.selectElement.style.top = marginTop;
        this.selectElement.style.right = `${marginRight}`;
        this.selectElement.style.bottom = `${marginBottom}`;
        this.selectElement.style.transform = `${transform}`;
    }

    public setCustomPresenter(renderer: ICustomWidgetPresenter<UISelectCustom>): void {
        renderer.render(this);
    }
}