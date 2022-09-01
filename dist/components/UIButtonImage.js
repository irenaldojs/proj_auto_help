"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.UIButtonImage = void 0;
class UIButtonImage extends Widget {
    constructor({ name, imageSrc, imageWidth, imageheight, cssClass }) {
        super(name);
        this.imageSrc = imageSrc;
        this.imageWidth = imageWidth;
        this.imageheight = imageheight;
        this.cssClass = cssClass;
    }
    htmlTemplate() {
        return `<img alt="img" id="fsButtonImage" src="/icons/sb_menu.png" height="20" width="20" ></img>`;
    }
    onWidgetDidLoad() {
        var self = this;
        this.imageElement = this.elementById('fsButtonImage');
        this.imageElement.src = this.imageSrc;
        this.imageElement.style.width = this.imageWidth;
        this.imageElement.style.height = this.imageheight;
        this.imageElement.style.cursor = "pointer";
        this.imageElement.className = this.cssClass;
        if (self.onClick != null) {
            this.imageElement.onclick = function (ev) {
                self.onClick(ev);
            };
        }
    }
    value() {
        throw new Error("Button does not support value");
    }
    setVisible(visible) {
        this.imageElement.hidden = (visible == false);
    }
    setEnabled(enabled) {
        throw new Error("Button does not support value");
    }
    addCSSClass(className) {
        this.imageElement.classList.add(className);
    }
    removeCSSClass(className) {
        this.imageElement.classList.remove(className);
    }
    applyCSS(propertyName, propertyValue) {
        this.imageElement.style.setProperty(propertyName, propertyValue);
    }
    setPosition(position, marginLeft, marginTop, marginRight, marginBottom, transform) {
        this.imageElement.style.position = position;
        this.imageElement.style.left = marginLeft;
        this.imageElement.style.top = marginTop;
        this.imageElement.style.right = `${marginRight}`;
        this.imageElement.style.bottom = `${marginBottom}`;
        this.imageElement.style.transform = `${transform}`;
    }
    setCustomPresenter(renderer) {
        renderer.render(this);
    }
}
//exports.UIButtonImage = UIButtonImage;
