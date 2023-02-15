import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import Quill from 'quill';
import { ContentFormComponent } from '../content-form/content-form.component';

@Component({
  standalone: true,
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    QuillModule,
    ContentFormComponent
  ]
})
export class ContentPageComponent {
  contentTitle = "Sensii Vape Product Launch"; //replace as input

  ngAfterViewInit(){
    var quill = new Quill('#editor-container', {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          ['image', 'code-block']
        ]
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'  // or 'bubble'
    });
  }


}
