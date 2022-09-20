"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.UIContainer = void 0;
class UIContainer extends Widget {
    constructor({ name, cssClass = 'container', bgColor = "white", txColor = "black", height = "max-content", width = "max-content", margin = '0px', padding = '0px', }) {
        super(name);
        this.cssClass = cssClass;
        this.bgColor = bgColor;
        this.txColor = txColor;
        this.height = height;
        this.width = width;
        this.margin = margin;
        this.padding = padding;
    }
    htmlTemplate() {
        return `<div id="fnContainer" class="container"></div>`;
    }
    onWidgetDidLoad() {
        this.divContainer = this.elementById('fnContainer');
        this.divContainer.style.backgroundColor = this.bgColor;
        this.divContainer.style.color = this.txColor;
        this.divContainer.style.width = this.width;
        this.divContainer.style.margin = this.margin;
        this.divContainer.style.padding = this.padding;
        this.divContainer.classList.add(this.cssClass);
    }
    setChildren(children) {
        children.forEach(element => {
            this.divContainer.appendChild(element.getDOMElement());
        });
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
        this.divContainer.classList.add(className);
    }
    removeCSSClass(className) {
        this.divContainer.classList.remove(className);
    }
    applyCSS(propertyName, propertyValue) {
        this.divContainer.style.setProperty(propertyName, propertyValue);
    }
    setPosition(position, marginLeft, marginTop, marginRight, marginBottom, transform) {
        this.divContainer.style.position = position;
        this.divContainer.style.left = marginLeft;
        this.divContainer.style.top = marginTop;
        this.divContainer.style.right = `${marginRight}`;
        this.divContainer.style.bottom = `${marginBottom}`;
        this.divContainer.style.transform = `${transform}`;
    }
    setVisible(visible) {
        this.divContainer.hidden = !visible;
    }
}
//exports.UIContainer = UIContainer;
