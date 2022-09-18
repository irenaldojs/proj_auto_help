import { UICarousel } from './../components/UICarousel';
import { Row, UIView, ViewLayout, UIImage, Widget } from "../Objective-UI";

export class PublicityView extends UIView {

    img1 = new UIImage({ name: 'img1', src: './img/publicity/ngk.png' })
    img2 = new UIImage({ name: 'img2', src: './img/publicity/ntk.png' })
    carousel = new UICarousel({ name: 'carousel' })

    buildLayout(): ViewLayout {
        return new ViewLayout('publicity', [
            new Row('pubContainer', {
                rowClass: 'p-1'
            })
        ])
    }
    composeView(): void {
        this.addWidgets('pubContainer', this.carousel)
    }
    onViewDidLoad(): void {
        this.carousel.setListSlides([
            { name: 'Ngk', src: './img/publicity/ngk.png' },
            { name: 'NTk', src: './img/publicity/ntk.png' },
        ])
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
