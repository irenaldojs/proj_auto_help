"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.UICardCustom = void 0;
class UICardCustom extends Widget {
    constructor({ name, title, data }) {
        super(name);
        this.title = title;
        this.data = data;
    }
    htmlTemplate() {
        return `<div id="fsCard" class="col-12 col-sm-3 p-2 fit">
                    <div id="fsBody" class="bg-light p-2 rounded">
                        <h5 id="fsTitle" class="text-center"><div>
                    </div>
                </div>
                `;
    }
    onWidgetDidLoad() {
        var self = this;
        this.divElement = this.elementById('fsCard');
        this.titleElement = this.elementById('fsTitle');
        this.bodyElement = this.elementById('fsBody');
        this.mountTitle();
        this.mountCard();
    }
    mountTitle() {
        let title = '';
        this.title.forEach(e => title += e.toUpperCase() + " ");
        this.titleElement.textContent = title;
    }
    mountCard() {
        this.data.forEach((element, index) => {
            const leftText = element.split(':')[0];
            const rightText = element.split(':')[1];
            const left = `<div class="font-italic">${leftText}:</div>`;
            const right = `<div class="ml-1 text-right fem-15 font-weight-bold">${rightText.toUpperCase()}</div>`;
            const rowElement = `<div class="d-flex flex-row justify-content-between">${left}${right}</div>`;
            this.bodyElement.insertAdjacentHTML('beforeend', rowElement);
        });
    }
    value() {
        return this.widgetName;
    }
    setVisible(visible) {
        this.divElement.hidden = (visible == false);
    }
    setEnabled(enabled) {
        throw new Error("Button does not support value");
    }
    addCSSClass(className) {
        this.divElement.classList.add(className);
    }
    removeCSSClass(className) {
        this.divElement.classList.remove(className);
    }
    applyCSS(propertyName, propertyValue) {
        this.divElement.style.setProperty(propertyName, propertyValue);
    }
    setPosition(position, marginLeft, marginTop, marginRight, marginBottom, transform) {
        this.divElement.style.position = position;
        this.divElement.style.left = marginLeft;
        this.divElement.style.top = marginTop;
        this.divElement.style.right = `${marginRight}`;
        this.divElement.style.bottom = `${marginBottom}`;
        this.divElement.style.transform = `${transform}`;
    }
    setCustomPresenter(renderer) {
        renderer.render(this);
    }
}
//exports.UICardCustom = UICardCustom;
