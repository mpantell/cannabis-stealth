import { Component, EventEmitter, Output } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'app-svg-upload',
  templateUrl: './svg-upload.component.html',
  styleUrls: ['./svg-upload.component.scss']
})
export class SvgUploadComponent {
  canvas: fabric.Canvas;
  @Output() fileLoad = new EventEmitter<string>();

  constructor() {
    this.canvas = new fabric.Canvas('canvas');
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = (e: any) => {
      const svg = e.target.result;
      fabric.loadSVGFromString(svg, (objects, options) => {
        //const group = new fabric.Group(objects);
        //this.canvas.add(group);
        //this.canvas.renderAll();
        this.fileLoad.emit(svg);
      });
    };
  
    reader.readAsText(file);
  }
  
}
