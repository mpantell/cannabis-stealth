import { fabric } from 'fabric';

export class fabricHelper {

    static buildTextBox(textContent: string, x: number, y: number) {

        var text = new fabric.Textbox(textContent, {
            left: x,
            top: y,
            fontFamily: 'Arial',
            fontSize: 20,
            fill: 'black',
            width: 750
        });
        return (text);
    }
}
