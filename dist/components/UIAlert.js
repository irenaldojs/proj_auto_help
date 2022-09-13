"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.UIAlert = void 0;
class UIAlert extends Widget {
    constructor({ shell, name, msg }) {
        super(name);
        this.shell = shell;
        this.msg = msg;
        var body = shell.getPageBody();
        var modalDivContainer = shell.elementById('modalContainer');
        if (modalDivContainer == null) {
            modalDivContainer = shell.createElement('div');
            modalDivContainer.id = 'modalContainer';
            body.appendChild(modalDivContainer);
        }
        this.modalContext = new WidgetContext(shell, [modalDivContainer.id], null);
    }
    /*
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button id="closeButton" type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div id="modalBody" class="modal-body">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Ok</button>
            </div>
        </div>
    </div>
    */
    htmlTemplate() {
        return `
 <div id="fsModalView" class="modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document"> 
        <div class="modal-content">
            <div class="modal-header">
                <button id="closeButton" type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>                
            </div>
            <div  class="text-center px-1 py-3">
                <h4 id="modalBody"></h4>
            </div>
            <div class="py-3 d-flex align-items-center justify-content-center">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" style="width:150px" >Ok</button>
            </div>
        </div>
    </div>  
  </div>`;
    }
    onWidgetDidLoad() {
        var self = this;
        self.bodyContainer = self.elementById('modalBody');
        self.modalContainer = self.elementById('fsModalView');
        self.closeButton = self.elementById('closeButton');
        self.closeButton.onclick = () => this.close(this);
        self.bodyContainer.textContent = this.msg;
        self.showFunction = new VirtualFunction({
            fnName: 'modalShow',
            fnArgNames: [],
            keepAfterCalled: true
        });
        self.showFunction.setContent(`
            var md = new bootstrap.Modal(document.getElementById('${self.modalContainer.id}'), { backdrop: false })
            md.show();
            $('#${self.modalContainer.id}').on('hidden.bs.modal', function (e) {
                document.getElementById('${self.modalContainer.id}').remove();
                document.getElementById('${self.showFunction.functionId}').remove();
            })`);
        self.showFunction.call();
    }
    show() {
        this.modalContext.addWidget('modalContainer', this);
        this.modalContext.build(this, false);
        UIAlert.$ = this;
    }
    close(dialog) {
        var node = document.getElementById(dialog.getDOMElement().id);
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }
    setCustomPresenter(renderer) {
        renderer.render(this);
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
        throw new Error("Method not implemented.");
    }
    setVisible(visible) {
        throw new Error("Method not implemented.");
    }
}
//exports.UIAlert = UIAlert;
