"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.PublicityView = void 0;
class PublicityView extends UIView {
    constructor() {
        super(...arguments);
        this.img1 = new UIImage({ name: 'img1', src: './img/publicity/ngk.png' });
        this.img2 = new UIImage({ name: 'img2', src: './img/publicity/ntk.png' });
    }
    buildLayout() {
        return new ViewLayout('publicity', [
            new Row('pubContainer', {
                rowClass: 'p-1'
            })
        ]);
    }
    composeView() {
        this.addWidgets('pubContainer', this.img1, this.img2);
    }
    onViewDidLoad() {
        this.styleImgs();
    }
    styleImgs() {
        this.addListCSSClass(this.img1, ['col-12', 'col-sm-6', 'pb-1']);
        this.addListCSSClass(this.img2, ['col-12', 'col-sm-6', 'pb-1']);
    }
    addListCSSClass(widget, listClass) {
        listClass.forEach(e => {
            widget.addCSSClass(e);
        });
    }
}
//exports.PublicityView = PublicityView;
