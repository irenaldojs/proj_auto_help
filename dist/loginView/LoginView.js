"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.LoginView = void 0;
class LoginView extends UIView {
    constructor() {
        super();
        this.imgLogo = new UIImage({ name: 'imgLogo', src: './img/logo.png', alt: 'Logo' });
        this.logoText = new UILabel({ name: 'logoText', text: 'AutoHelp' });
        this.formEmail = new UITextBox({ name: 'formEmail', maxlength: 20, title: 'Email' });
        this.formSenha = new UITextBox({ name: 'formSenha', maxlength: 20, title: 'Senha', type: 'password' });
        this.btnLogar = new UIButton({ name: 'btnLogar', text: 'Entrar', btnClass: 'btn-dark' });
        this.hrefAnonimo = new UIAnchor({ name: 'hrefAnonymous', text: 'entrar como anônimo', href: 'javascript:void(0)' });
        LoginView.$ = this;
        this.btnLogar.onClick = function () {
            var $ = LoginView.$;
            var nome = $.formEmail.getText();
            var senha = $.formSenha.getText();
            if (nome == null || nome == '') {
                $.modalShow('Informe o email do usuario');
                return;
            }
            if (senha == null || senha == '') {
                $.modalShow('Informe a senha');
                return;
            }
            if (nome == 'usuario' && senha == 'usuario') {
                $.shellPage.navigateToView(new MainView());
            }
            else {
                $.modalShow('Usuario/senha incorretos.');
                return;
            }
        };
        LoginView.$.hrefAnonimo.onClick = () => {
            var $ = LoginView.$;
            $.shellPage.navigateToView(new MainView());
        };
    }
    buildLayout() {
        return new ViewLayout('app', [
            new Row('mainRow', {
                //rowHeidth: 'max-content',
                rowClass: 'row d-flex flex-row justify-content-center align-items-center body-min m-0',
                columns: [
                    new Col('loginCol', {
                        colHeight: '100vh',
                        colClass: 'bg-secondary px-3 px-sm-5 text-light col-12 col-sm-4 d-flex flex-column fem-15 justify-content-center',
                        rows: [
                            new Row('titleRow', {
                                rowClass: 'd-flex flex-column align-items-center'
                            }),
                            new Row('formRow', {
                                rowClass: 'd-flex flex-column pb-5'
                            })
                        ]
                    })
                ]
            })
        ]);
    }
    composeView() {
        this.addWidgets('titleRow', this.imgLogo, this.logoText);
        this.addWidgets('formRow', this.formEmail, this.formSenha, this.btnLogar, this.hrefAnonimo);
    }
    onViewDidLoad() {
        this.style();
    }
    style() {
        this.formEmail.txInput.style.fontSize = '1.5rem';
        this.formSenha.txInput.style.fontSize = '1.5rem';
        this.btnLogar.buttonElement.style.height = 'max-content';
        this.btnLogar.addCSSClass('btn-lg');
        this.imgLogo.image.style.width = '10rem';
        this.imgLogo.image.style.height = 'auto';
        this.addListCSSClass(this.hrefAnonimo, ['align-self-end', 'text-light']);
        this.addListCSSClass(this.logoText, ['fem-2']);
    }
    addListCSSClass(widget, listClass) {
        listClass.forEach(e => {
            widget.addCSSClass(e);
        });
    }
    modalShow(msg) {
        const $ = LoginView.$; //self-instance shortcut
        const template = $.inflateTemplateView('<label id="lbHello"> Hello World! by Objective-UI </label>');
        const lbHello = template.elementById('lbHello');
        lbHello.textContent = msg;
        var modal = new UIAlert({
            shell: $.shellPage,
            name: 'form-modal',
            msg: msg
        });
        modal.show();
    }
}
//exports.LoginView = LoginView;
