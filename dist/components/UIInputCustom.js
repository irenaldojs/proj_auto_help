"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.UIInputCustom = void 0;
class UIInputCustom extends Widget {
    constructor({ name, placeholder, type = 'text', cssClass = 'col-12' }) {
        super(name);
        this.placeholder = placeholder;
        this.type = type;
        this.cssClass = cssClass;
    }
    htmlTemplate() {
        return `<div id="fsElement"class="input-group mb-3">
                    <input id="fsInput" type="text" class="form-control" placeholder="default" aria-label="default" aria-describedby="basic-addon1">
                </div>`;
    }
    onWidgetDidLoad() {
        var self = this;
        this.divElement = this.elementById('fsElement');
        this.divElement.className = this.cssClass;
        this.inputElement = this.elementById('fsInput');
        this.inputElement.placeholder = this.placeholder;
        this.inputElement.ariaLabel = this.placeholder;
        this.inputElement.type = this.type;
    }
    value() {
        throw new Error("Button does not support value");
    }
    setVisible(visible) {
        this.divElement.hidden = (visible == false);
    }
    setEnabled(enabled) {
        this.inputElement.disabled = !enabled;
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
//exports.UIInputCustom = UIInputCustom;
