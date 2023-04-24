import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fabric } from 'fabric';
import { fabricHelper } from './fabric-canvas.helper';
import { SampleProduct } from 'src/models/product.model';


@Component({
  selector: 'app-fabric-canvas',
  template: `
<div class="container">
    <div class="subcontainer1">
        <app-fabric-toolbar (decorate)="decorate($event)" (colorSelected)="recolor($event)" (fontSelected)="refont($event)"
            (sizeSelected)="resize($event)"></app-fabric-toolbar>
        <div class="canvas-element-container">
            <canvas #canvasElement id="canvasElement"></canvas>
        </div>
    </div>
    <div class="widget-menu">
        <app-fabric-widget-menu></app-fabric-widget-menu>
    </div>
</div>
    `
  ,
  styleUrls: ['./fabric-canvas.component.scss']
})
export class FabricCanvasComponent implements AfterViewInit {

  sampleProduct = new SampleProduct();
  x: number = 100;
  y: number = 100


  @ViewChild('canvasElement') canvasElement?: ElementRef<HTMLCanvasElement>;
  private canvas?: fabric.Canvas;



  ngAfterViewInit(): void {
    //const canvasElement: ElementRef<HTMLCanvasElement> = document.getElementById('canvasElement');
    if (this.canvasElement) {
      const height = document.body.scrollHeight;
      const width = document.body.scrollWidth;
      this.canvas = new fabric.Canvas(this.canvasElement.nativeElement);
      this.canvas.setHeight(800);
      this.canvas.setWidth(.8 * document.body.scrollWidth - 42);
      for (const field in this.sampleProduct) {
        const fieldVal = this.sampleProduct[field as keyof SampleProduct];
        const text = fabricHelper.buildTextBox(fieldVal.toString(), this.x, this.y);
        this.y += 34;
        this.canvas.add(text);
      }

    };
  }

  decorate(type: string) {
    const activeObjects: fabric.Object[] | undefined | null = this.canvas?.getActiveObjects();
    activeObjects?.forEach(activeObject => {
      if (activeObject && activeObject instanceof fabric.Textbox) {
        if (type === 'bold') {
          if (activeObject.fontWeight === 'normal') {
            activeObject._set('fontWeight', 'bold');
          } else {
            activeObject._set('fontWeight', 'normal');
          }
        } else if (type === 'italic') {
          if (activeObject.fontStyle === 'normal') {
            activeObject._set('fontStyle', 'italic');
          } else {
            activeObject._set('fontStyle', 'normal');
          }
        }
        this.canvas?.renderAll();
      }
    });
  }

  resize(size: string) {
    const activeObjects: fabric.Object[] | undefined | null = this.canvas?.getActiveObjects();
    activeObjects?.forEach(activeObject => {
      if (activeObject && activeObject instanceof fabric.Textbox) {
        activeObject._set('fontSize', size.valueOf());
      }
      this.canvas?.renderAll();
    });
  }

  recolor(color: string) {
    const activeObjects: fabric.Object[] | undefined | null = this.canvas?.getActiveObjects();
    activeObjects?.forEach(activeObject => {
      if (activeObject && activeObject instanceof fabric.Textbox) {
        activeObject._set('fill', color);
      }
      this.canvas?.renderAll();
    });
  }

  refont(font: string) {
    const activeObjects: fabric.Object[] | undefined | null = this.canvas?.getActiveObjects();
    activeObjects?.forEach(activeObject => {
      if (activeObject && activeObject instanceof fabric.Textbox) {
        activeObject._set('fontFamily', font);
      }
      this.canvas?.renderAll();
    });
  }
}
