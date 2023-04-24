import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
  imports: [CommonModule]
})
export class ListViewComponent implements OnInit {
  @Input() headers: string[] = [];
  @Input() data: string[][] = [];
  @Input() deleteAccess: boolean = false;
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();
  @Output() openEvent: EventEmitter<any> = new EventEmitter();

  constructor(){
   /* if(this.headers.length>0){
      if (this.deleteAccess){
        this.headers.push(' ');
      }
    }*/
  }

  ngOnInit(): void {
    if(this.headers.length>0){
      this.headers = this.removeIdHeader(this.headers);
      if (this.deleteAccess){
        this.headers.push(' ');
      }
    }
  }

  emitDelete(event:any, rowRef:string[]){
    this.deleteEvent.emit(rowRef);
  }

  emitOpen(event:any, rowRef:string[]){
    this.openEvent.emit(rowRef);
  }

  removeIdHeader(headers:any[]): string[]{
    return headers.filter(header => {return header !=='id'});
  }
}
