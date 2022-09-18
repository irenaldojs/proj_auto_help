"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.PublicityView = void 0;
class PublicityView extends UIView {
    constructor() {
        super(...arguments);
        this.img1 = new UIImage({ name: 'img1', src: './img/publicity/ngk.png' });
        this.img2 = new UIImage({ name: 'img2', src: './img/publicity/ntk.png' });
        this.carousel = new UICarousel({ name: 'carousel' });
    }
    buildLayout() {
        return new ViewLayout('publicity', [
            new Row('pubContainer', {
                rowClass: 'p-1'
            })
        ]);
    }
    composeView() {
        this.addWidgets('pubContainer', this.carousel);
    }
    onViewDidLoad() {
        this.carousel.setListSlides([
            { name: 'Ngk', src: './img/publicity/ngk.png' },
            { name: 'NTk', src: './img/publicity/ntk.png' },
        ]);
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
