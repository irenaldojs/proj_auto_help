import { UIAnchor } from './../components/UIAnchor';
import { UIAlert } from './../components/UIAlert';
import { Col, UITextBox, UIButton, UIImage, UILabel, Widget, UIDialog, ModalAction } from './../Objective-UI';
import { MainView } from './../mainView/MainView';
import { Row, UIView, ViewLayout } from "../Objective-UI";

export class LoginView extends UIView {
    private static $: LoginView;

    imgLogo = new UIImage({ name: 'imgLogo', src: './img/logo.png', alt: 'Logo' })
    logoText = new UILabel({ name: 'logoText', text: 'AutoHelp' })

    formEmail = new UITextBox({ name: 'formEmail', maxlength: 20, title: 'Email' })
    formSenha = new UITextBox({ name: 'formSenha', maxlength: 20, title: 'Senha', type: 'password' })
    btnLogar = new UIButton({ name: 'btnLogar', text: 'Entrar', btnClass: 'btn-dark' })

    hrefAnonimo = new UIAnchor({ name: 'hrefAnonymous', text: 'entrar como anônimo', href: 'javascript:void(0)' })

    constructor() {
        super();
        LoginView.$ = this;


        this.btnLogar.onClick = function () {
            var $ = LoginView.$
            var nome = $.formEmail.getText()
            var senha = $.formSenha.getText()

            if (nome == null || nome == '') {
                $.modalShow('Informe o email do usuario')
                return;
            }
            if (senha == null || senha == '') {
                $.modalShow('Informe a senha')
                return;
            }
            if (nome == 'usuario' && senha == 'usuario') {
                $.shellPage.navigateToView(new MainView())
            } else {
                $.modalShow('Usuario/senha incorretos.')
                return
            }
        }

        LoginView.$.hrefAnonimo.onClick = () => {
            var $ = LoginView.$
            $.shellPage.navigateToView(new MainView())
        }
    }

    buildLayout(): ViewLayout {
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
        ])
    }

    composeView(): void {
        this.addWidgets('titleRow', this.imgLogo, this.logoText)
        this.addWidgets('formRow', this.formEmail, this.formSenha, this.btnLogar, this.hrefAnonimo)
    }

    onViewDidLoad(): void {
        this.style()
    }

    style(): void {
        this.formEmail.txInput.style.fontSize = '1.5rem';
        this.formSenha.txInput.style.fontSize = '1.5rem';

        this.btnLogar.buttonElement.style.height = 'max-content'
        this.btnLogar.addCSSClass('btn-lg')
        this.imgLogo.image.style.width = '10rem';
        this.imgLogo.image.style.height = 'auto';

        this.addListCSSClass(this.hrefAnonimo, ['align-self-end', 'text-light'])
        this.addListCSSClass(this.logoText, ['fem-2'])

    }

    addListCSSClass(widget: Widget, listClass: string[]) {
        listClass.forEach(e => {
            widget.addCSSClass(e)
        })
    }

    modalShow(msg: string): void {

        const $ = LoginView.$;//self-instance shortcut
        const template = $.inflateTemplateView('<label id="lbHello"> Hello World! by Objective-UI </label>');
        const lbHello = template.elementById('lbHello') as HTMLLabelElement;
        lbHello.textContent = msg

        var modal = new UIAlert({
            shell: $.shellPage,
            name: 'form-modal',
            msg: msg
        });

        modal.show();
    }
}
