import { Component } from '@angular/core';
import { fabric } from 'fabric';
import { SvgUploadComponent } from '../svg-upload/svg-upload.component';

@Component({
  selector: 'app-fabric-widget-menu',
  template: `
    <div class="container">
      <h1>Select your widgets</h1>
      <app-svg-upload (fileLoad)="renderFile($event)"></app-svg-upload>
      
      
      <canvas #canvas id="canvas" width="500px" height="300px"></canvas>
    </div>
    `,
  styleUrls: ['./fabric-widget-menu.component.scss']
})

export class FabricWidgetMenuComponent {
  canvas: fabric.Canvas;

  constructor() {
    this.canvas = new fabric.Canvas('canvas');
  }


  renderFile(event: any) {
    try {

      fabric.loadSVGFromString(event, (objects, options) => {
        var svg = fabric.util.groupSVGElements(objects, options);
        svg.scale(1);
        this.canvas.add(svg).renderAll();

      });
    } catch (error) {
      console.log(error);
    }
  }


}
