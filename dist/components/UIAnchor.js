"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.UIAnchor = void 0;
class UIAnchor extends Widget {
    constructor({ name, text, href, cssClass }) {
        super(name);
        this.text = text;
        this.href = href;
        this.cssClass = cssClass;
    }
    htmlTemplate() {
        return `<a id="fsAnchor" href="https://www.google.com"></a>`;
    }
    onWidgetDidLoad() {
        var self = this;
        this.anchorElement = this.elementById('fsAnchor');
        this.anchorElement.text = this.text;
        this.anchorElement.href = this.href;
        this.anchorElement.className = this.cssClass;
        if (self.onClick != null) {
            this.anchorElement.onclick = function (ev) {
                self.onClick(ev);
            };
        }
    }
    value() {
        throw new Error("Button does not support value");
    }
    setVisible(visible) {
        this.anchorElement.hidden = (visible == false);
    }
    setEnabled(enabled) {
        throw new Error("Button does not support value");
    }
    addCSSClass(className) {
        this.anchorElement.classList.add(className);
    }
    removeCSSClass(className) {
        this.anchorElement.classList.remove(className);
    }
    applyCSS(propertyName, propertyValue) {
        this.anchorElement.style.setProperty(propertyName, propertyValue);
    }
    setPosition(position, marginLeft, marginTop, marginRight, marginBottom, transform) {
        this.anchorElement.style.position = position;
        this.anchorElement.style.left = marginLeft;
        this.anchorElement.style.top = marginTop;
        this.anchorElement.style.right = `${marginRight}`;
        this.anchorElement.style.bottom = `${marginBottom}`;
        this.anchorElement.style.transform = `${transform}`;
    }
    setCustomPresenter(renderer) {
        renderer.render(this);
    }
}
//exports.UIAnchor = UIAnchor;
