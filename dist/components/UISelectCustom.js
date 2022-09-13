"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.UISelectCustom = void 0;
class UISelectCustom extends Widget {
    constructor({ name, title, cssClass }) {
        super(name);
        this.onSelectionChanged = null;
        this.title = title;
        this.cssClass = cssClass;
    }
    htmlTemplate() {
        return `<div id="fsSelectDiv" class="${this.cssClass}">
                    <select id="fsSelect" class="custom-select text-capitalize w-100" aria-label="Default select example">
                    </select>
                </div>
                `;
    }
    onWidgetDidLoad() {
        var self = this;
        this.divElement = this.elementById('fsSelectDiv');
        this.selectElement = this.elementById('fsSelect');
        this.InitialState();
        this.selectElement.onchange = (ev) => {
            if (self.onSelectionChanged != null) {
                console.log('primeira chamada');
                self.onSelectionChanged(ev);
            }
            else {
                console.log('vazio');
            }
        };
    }
    InitialState(items) {
        this.selectElement.innerHTML = `<option id="fsTitle" selected>${this.title}</option>`;
        this.titleElement = this.elementById('fsTitle');
        this.FromList(items);
    }
    AddItem(name) {
        const optionElement = `<option value="${name}">${name}</option>`;
        this.selectElement.insertAdjacentHTML("beforeend", optionElement);
    }
    FromList(items) {
        if (items == null || items == undefined)
            return;
        console.log('lista');
        items.forEach(e => this.AddItem(e));
    }
    value() {
        if (this.selectElement != undefined && this.selectElement != null) {
            return this.selectElement.value;
        }
        else {
            return '';
        }
    }
    setVisible(visible) {
        this.selectElement.hidden = (visible == false);
    }
    setEnabled(enabled) {
        this.selectElement.disabled = !enabled;
    }
    addCSSClass(className) {
        this.selectElement.classList.add(className);
    }
    removeCSSClass(className) {
        this.selectElement.classList.remove(className);
    }
    applyCSS(propertyName, propertyValue) {
        this.selectElement.style.setProperty(propertyName, propertyValue);
    }
    setPosition(position, marginLeft, marginTop, marginRight, marginBottom, transform) {
        this.selectElement.style.position = position;
        this.selectElement.style.left = marginLeft;
        this.selectElement.style.top = marginTop;
        this.selectElement.style.right = `${marginRight}`;
        this.selectElement.style.bottom = `${marginBottom}`;
        this.selectElement.style.transform = `${transform}`;
    }
    setCustomPresenter(renderer) {
        renderer.render(this);
    }
}
//exports.UISelectCustom = UISelectCustom;
