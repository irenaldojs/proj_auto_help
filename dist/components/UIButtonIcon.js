"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.UIButtonIcon = void 0;
class UIButtonIcon extends Widget {
    constructor({ name, fsIcon = 'fa-solid fa-house' }) {
        super(name);
        this.fsIcon = fsIcon;
    }
    htmlTemplate() {
        return `<i id="fsIcon"></i>`;
    }
    onWidgetDidLoad() {
        var self = this;
        this.iconElement = this.elementById('fsIcon');
        this.iconElement.className = this.fsIcon;
        this.iconElement.style.cursor = "pointer";
        if (self.onClick != null) {
            this.iconElement.onclick = function (ev) {
                self.onClick(ev);
            };
        }
    }
    value() {
        throw new Error("Button does not support value");
    }
    setVisible(visible) {
        this.iconElement.hidden = (visible == false);
    }
    setEnabled(enabled) {
        throw new Error("Button does not support value");
    }
    addCSSClass(className) {
        this.iconElement.classList.add(className);
    }
    removeCSSClass(className) {
        this.iconElement.classList.remove(className);
    }
    applyCSS(propertyName, propertyValue) {
        this.iconElement.style.setProperty(propertyName, propertyValue);
    }
    setPosition(position, marginLeft, marginTop, marginRight, marginBottom, transform) {
        this.iconElement.style.position = position;
        this.iconElement.style.left = marginLeft;
        this.iconElement.style.top = marginTop;
        this.iconElement.style.right = `${marginRight}`;
        this.iconElement.style.bottom = `${marginBottom}`;
        this.iconElement.style.transform = `${transform}`;
    }
    setCustomPresenter(renderer) {
        renderer.render(this);
    }
}
//exports.UIButtonIcon = UIButtonIcon;
