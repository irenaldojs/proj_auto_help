import { Row, UIView, ViewLayout, UIImage, Widget } from "../Objective-UI";

export class PublicityView extends UIView {



    img1 = new UIImage({ name: 'img1', src: './img/publicity/ngk.png' })
    img2 = new UIImage({ name: 'img2', src: './img/publicity/ntk.png' })

    buildLayout(): ViewLayout {
        return new ViewLayout('publicity', [
            new Row('pubContainer', {
                rowClass: 'p-1'
            })
        ])
    }
    composeView(): void {
        this.addWidgets('pubContainer', this.img1, this.img2)
    }
    onViewDidLoad(): void {
        this.styleImgs()
    }

    styleImgs() {
        this.addListCSSClass(this.img1, ['col-12', 'col-sm-6', 'pb-1'])
        this.addListCSSClass(this.img2, ['col-12', 'col-sm-6', 'pb-1'])
    }

    addListCSSClass(widget: Widget, listClass: string[]) {
        listClass.forEach(e => {
            widget.addCSSClass(e)
        })
    }
}
