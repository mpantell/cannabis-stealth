import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fabric-toolbar',
  templateUrl: './fabric-toolbar.component.html',
  styleUrls: ['./fabric-toolbar.component.scss']
})
export class FabricToolbarComponent {
  @Output() fontSelected = new EventEmitter<string>();
  @Output() sizeSelected = new EventEmitter<string>();
  @Output() decorate = new EventEmitter<string>();
  @Output() colorSelected = new EventEmitter<string>();

  emitFormat(event: any) {
    switch (event.target.id) {
      case 'font':
        this.fontSelected.emit(event.target.value);
        break;
      case 'size':
        this.sizeSelected.emit(event.target.value);
        break;
      case 'color':
        this.colorSelected.emit(event.target.value);
        break;
      case 'italic':
        this.decorate.emit(event.target.id);
        break;
      case 'bold':
        this.decorate.emit(event.target.id);
        break;
    }
  }

}