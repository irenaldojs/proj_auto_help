"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.UICarousel = void 0;
class UICarousel extends Widget {
    constructor({ name, cssClass = 'col-12' }) {
        super(name);
        this.cssClass = cssClass;
    }
    htmlTemplate() {
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
        `;
    }
    onWidgetDidLoad() {
        this.carouselDiv = this.elementById('carouselDiv');
        this.carouselDiv.classList.add(this.cssClass);
        this.carouselIndicators = this.elementById('carouselIndicators');
        this.carouselInner = this.elementById('carouselInner');
        this.carouselControlPrev = this.elementById('carouselControlPrev');
        this.carouselControlNext = this.elementById('carouselControlNext');
        this.carouselControlPrev.href = `#${this.carouselDiv.id}`;
        this.carouselControlNext.href = `#${this.carouselDiv.id}`;
    }
    mountSlides() {
        const id = this.carouselDiv.id;
        this.listImages.forEach((img, index) => {
            const indicatorElement = index == 0
                ? `<li data-target="#${id}" data-slide-to="${index}" class="active"></li>`
                : `<li data-target="#${id}" data-slide-to="${index}"></li>`;
            const innerElement = index == 0
                ? `<div class="carousel-item active">
                    <img class="d-block w-100" src="${img.src}" alt="${img.name}">
                </div>`
                : `<div class="carousel-item">
                    <img class="d-block w-100" src="${img.src}" alt="${img.name}">
                </div>`;
            this.carouselIndicators.insertAdjacentHTML("beforeend", indicatorElement);
            this.carouselInner.insertAdjacentHTML("beforeend", innerElement);
        });
    }
    setListSlides(listImages) {
        this.listImages = listImages;
        this.mountSlides();
    }
    setCustomPresenter(presenter) {
        throw new Error("Method not implemented.");
    }
    value() {
        throw new Error("Method not implemented.");
    }
    setEnabled(enabled) {
        throw new Error("Method not implemented.");
    }
    addCSSClass(className) {
        throw new Error("Method not implemented.");
    }
    removeCSSClass(className) {
        throw new Error("Method not implemented.");
    }
    applyCSS(propertyName, propertyValue) {
        throw new Error("Method not implemented.");
    }
    setPosition(position, marginLeft, marginTop, marginRight, marginBottom, transform) {
        this.carouselDiv.style.position = position;
        this.carouselDiv.style.left = marginLeft;
        this.carouselDiv.style.top = marginTop;
        this.carouselDiv.style.right = `${marginRight}`;
        this.carouselDiv.style.bottom = `${marginBottom}`;
        this.carouselDiv.style.transform = `${transform}`;
    }
    setVisible(visible) {
        throw new Error("Method not implemented.");
    }
}
//exports.UICarousel = UICarousel;
