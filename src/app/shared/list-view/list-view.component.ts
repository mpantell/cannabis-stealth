import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
  imports: [CommonModule]
})
export class ListViewComponent {
  @Input() headers: string[] = [];
  @Input() data: any[][] = [];

  constructor(){
    if(this.headers.length>0){

    }
  }
}
