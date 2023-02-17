import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import Quill from 'quill';
import { ContentFormComponent } from '../content-form/content-form.component';
import { AnalyzeContentService } from 'src/app/analyze-content.service';

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
  ],
  providers: [AnalyzeContentService]
})
export class ContentPageComponent {
  private sample = [
    { state: 'IL', status: 'Compliant', violations: [] },
    { state: 'PA', status: 'Compliant', violations: [] },
    { state: 'NV', status: 'Compliant', violations: [] },
    { state: 'CA', status: 'Compliant', violations: [] },
    { state: 'MI', status: 'Compliant', violations: [] }
  ];


  contentTitle = "Sensii Vape Product Launch"; //replace as input
  contentType = "Web Content";
  launchDate = "03-01-2023";
  editMode = false;
  content:any;
  paViolation = false;
  @Output() onAnalyze = new EventEmitter<{state: string; status: string; violations: { code: string; description: string; }[]}[] >;
  stateResults: { state: string, status: string, violations: { code: string, description: string }[] }[] = [];


  constructor(private analyzeContentService: AnalyzeContentService) {
  }

  
  ngAfterViewInit(){
    try{
      var quill = new Quill('#editor-container', {
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['image', 'code-block']
          ]
        },
        placeholder: 'Componse your content here...',
        theme: 'snow'  // or 'bubble'
      });
  
      quill.on('text-change',this.handleInput.bind(this));
      this.stateResults = this.sample;
    } catch(error){
      console.log('Error: ' + error);
    }

  }

  handleEditMode(){
    this.editMode = !this.editMode;
  }

  handleMetadataSave(event: { title: string, content_type: string, launch_date: Date }){
    this.contentTitle = event.title;
    this.contentType = event.content_type;
    this.launchDate = event.launch_date.toString();
    this.handleEditMode();
  }

  async handleInput(delta: any, oldDelta: any, source: any) {
    if (source !== 'user') {
      return;
    }
      const content = document.querySelector('#editor-container .ql-editor')?.textContent ?? '';
      const analysisResult = await this.analyzeContentService.analyzeContent(content);
      this.onAnalyze.emit(analysisResult);      

    }


    
    // Do something with the analysis result
    //console.log(analysisResult);
  

}
