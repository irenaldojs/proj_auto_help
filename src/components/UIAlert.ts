import { ICustomWidgetPresenter, INotifiable, PageShell, UITemplateView, VirtualFunction, Widget, WidgetContext } from "../Objective-UI";

export class UIAlert extends Widget implements INotifiable {
    public static $: UIAlert;

    private showFunction: VirtualFunction;

    public modalContainer: HTMLDivElement;
    public bodyContainer: HTMLDivElement;
    public closeButton: HTMLButtonElement;


    private shell: PageShell;

    private modalContext: WidgetContext;
    private msg: string;

    constructor({ shell, name, msg }:
        {
            shell: PageShell,
            name: string;
            msg: string;

        }) {
        super(name);

        this.shell = shell;
        this.msg = msg;

        var body: Element = shell.getPageBody();
        var modalDivContainer: Element = shell.elementById('modalContainer');
        if (modalDivContainer == null) {
            modalDivContainer = shell.createElement('div');
            modalDivContainer.id = 'modalContainer';
            body.appendChild(modalDivContainer);
        }

        this.modalContext = new WidgetContext(
            shell,
            [modalDivContainer.id],
            null);

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
    protected htmlTemplate(): string {
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

    protected onWidgetDidLoad(): void {
        var self = this;
        self.bodyContainer = self.elementById('modalBody');
        self.modalContainer = self.elementById('fsModalView');
        self.closeButton = self.elementById('closeButton');
        self.closeButton.onclick = () => this.close(this);
        self.bodyContainer.textContent = this.msg

        self.showFunction = new VirtualFunction({
            fnName: 'modalShow',
            fnArgNames: [],
            keepAfterCalled: true
        })

        self.showFunction.setContent(`
            var md = new bootstrap.Modal(document.getElementById('${self.modalContainer.id}'), { backdrop: false })
            md.show();
            $('#${self.modalContainer.id}').on('hidden.bs.modal', function (e) {
                document.getElementById('${self.modalContainer.id}').remove();
                document.getElementById('${self.showFunction.functionId}').remove();
            })`);


        self.showFunction.call();
    }

    public show(): void {
        this.modalContext.addWidget('modalContainer', this);
        this.modalContext.build(this, false);
        UIAlert.$ = this;
    }
    public close(dialog: UIAlert): void {
        var node = document.getElementById(dialog.getDOMElement().id);
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }

    public setCustomPresenter(renderer: ICustomWidgetPresenter<Widget>): void {
        renderer.render(this);
    }
    public value(): string {
        throw new Error("Method not implemented.");
    }
    public setEnabled(enabled: boolean): void {
        throw new Error("Method not implemented.");
    }
    public addCSSClass(className: string): void {
        throw new Error("Method not implemented.");
    }
    public removeCSSClass(className: string): void {
        throw new Error("Method not implemented.");
    }
    public applyCSS(propertyName: string, propertyValue: string): void {
        throw new Error("Method not implemented.");
    }
    public setPosition(position: string, marginLeft: string, marginTop: string, marginRight: string, marginBottom: string, transform?: string): void {
        throw new Error("Method not implemented.");
    }
    public setVisible(visible: boolean): void {
        throw new Error("Method not implemented.");
    }

}
