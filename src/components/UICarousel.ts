import { ICustomWidgetPresenter, Widget } from "../Objective-UI";


export class UICarousel extends Widget {

    public carouselDiv: HTMLDivElement
    public carouselIndicators: HTMLOListElement
    public carouselInner: HTMLDivElement
    public carouselControlPrev: HTMLAnchorElement
    public carouselControlNext: HTMLAnchorElement

    private cssClass: string;
    private listImages: Array<{ name: string, src: string }>;

    constructor({ name, cssClass = 'col-12' }:
        {
            name: string;
            cssClass?: string;
        }) {
        super(name);
        this.cssClass = cssClass;
    }

    protected htmlTemplate(): string {
        return `      
        <div id="carouselDiv" class="carousel slide" data-ride="carousel">
            <ol id="carouselIndicators" class="carousel-indicators">
            </ol>
            <div id="carouselInner" class="carousel-inner">
            </div>
            <a id="carouselControlPrev" class="carousel-control-prev" href role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a id="carouselControlNext" class="carousel-control-next" href role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        `
    }
    protected onWidgetDidLoad(): void {
        this.carouselDiv = this.elementById('carouselDiv')
        this.carouselDiv.classList.add(this.cssClass)
        this.carouselIndicators = this.elementById('carouselIndicators')
        this.carouselInner = this.elementById('carouselInner')
        this.carouselControlPrev = this.elementById('carouselControlPrev')
        this.carouselControlNext = this.elementById('carouselControlNext')
        this.carouselControlPrev.href = `#${this.carouselDiv.id}`
        this.carouselControlNext.href = `#${this.carouselDiv.id}`

    }

    public mountSlides() {
        const id = this.carouselDiv.id
        this.listImages.forEach((img, index) => {
            const indicatorElement = index == 0
                ? `<li data-target="#${id}" data-slide-to="${index}" class="active"></li>`
                : `<li data-target="#${id}" data-slide-to="${index}"></li>`
            const innerElement = index == 0
                ? `<div class="carousel-item active">
                    <img class="d-block w-100" src="${img.src}" alt="${img.name}">
                </div>`
                : `<div class="carousel-item">
                    <img class="d-block w-100" src="${img.src}" alt="${img.name}">
                </div>`
            this.carouselIndicators.insertAdjacentHTML("beforeend", indicatorElement)
            this.carouselInner.insertAdjacentHTML("beforeend", innerElement)
        })
    }

    public setListSlides(listImages: Array<{ name: string, src: string }>) {
        this.listImages = listImages
        this.mountSlides();
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
        throw new Error("Method not implemented.");
    }
    public removeCSSClass(className: string): void {
        throw new Error("Method not implemented.");
    }
    public applyCSS(propertyName: string, propertyValue: string): void {
        throw new Error("Method not implemented.");
    }
    public setPosition(position: string, marginLeft: string, marginTop: string, marginRight: string, marginBottom: string, transform?: string): void {
        this.carouselDiv.style.position = position;
        this.carouselDiv.style.left = marginLeft;
        this.carouselDiv.style.top = marginTop;
        this.carouselDiv.style.right = `${marginRight}`;
        this.carouselDiv.style.bottom = `${marginBottom}`;
        this.carouselDiv.style.transform = `${transform}`;
    }
    public setVisible(visible: boolean): void {
        throw new Error("Method not implemented.");
    }

}
