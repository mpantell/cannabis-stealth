import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fabric } from 'fabric';


@Component({
  selector: 'app-fabric-canvas',
  template: '<canvas #canvasElement></canvas>',
  styleUrls: ['./fabric-canvas.component.scss']
})
export class FabricCanvasComponent implements AfterViewInit {

  @ViewChild('canvasElement') canvasElement?: ElementRef<HTMLCanvasElement>;
  private canvas?: fabric.Canvas;


  ngAfterViewInit(): void {
    if (this.canvasElement) {
      this.canvas = new fabric.Canvas(this.canvasElement.nativeElement);
      var text = new fabric.IText('Hello, World!', {
        left: 100,
        top: 100,
        fontFamily: 'Arial',
        fontSize: 24,
        fill: 'red'
      });
      this.canvas.add(text);
    };
  }
}
