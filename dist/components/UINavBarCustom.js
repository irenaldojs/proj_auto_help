"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.UINavBarCustom = void 0;
class UINavBarCustom extends Widget {
    constructor({ name, cssClass }) {
        super(name);
        this.cssClass = cssClass;
    }
    htmlTemplate() {
        return `<ul id="uiElement" class="nav">
                </ul>
                `;
    }
    onWidgetDidLoad() {
        var self = this;
        this.uiElement = this.elementById('uiElement');
    }
    addTab(name, href) {
        const liElement = `
            <li class="nav-item">
                <a class="nav-link text-decoration-none ${this.cssClass}" href="${href}">${name}</a>
            </li>`;
        this.uiElement.insertAdjacentHTML("beforeend", liElement);
    }
    value() {
        throw new Error("Button does not support value");
    }
    setVisible(visible) {
        this.uiElement.hidden = (visible == false);
    }
    setEnabled(enabled) {
        throw new Error("Button does not support value");
    }
    addCSSClass(className) {
        this.uiElement.classList.add(className);
    }
    removeCSSClass(className) {
        this.uiElement.classList.remove(className);
    }
    applyCSS(propertyName, propertyValue) {
        this.uiElement.style.setProperty(propertyName, propertyValue);
    }
    setPosition(position, marginLeft, marginTop, marginRight, marginBottom, transform) {
        this.uiElement.style.position = position;
        this.uiElement.style.left = marginLeft;
        this.uiElement.style.top = marginTop;
        this.uiElement.style.right = `${marginRight}`;
        this.uiElement.style.bottom = `${marginBottom}`;
        this.uiElement.style.transform = `${transform}`;
    }
    setCustomPresenter(renderer) {
        renderer.render(this);
    }
}
//exports.UINavBarCustom = UINavBarCustom;
