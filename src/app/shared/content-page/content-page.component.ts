import { Component, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import Quill from 'quill';
import { ContentFormComponent } from '../content-form/content-form.component';
import { AnalyzeContentService } from 'src/app/services/analyze-content.service';
import * as firebase from 'firebase/app';
import * as fbdb from 'firebase/database';
import { environment } from 'src/environments/environment.dev';
import { ContentAsset, ContentType } from 'src/models/content-asset.model';
import { CrudContentService } from 'src/app/services/crud-content.service';
import { QuilEditorComponent } from '../quil-editor/quil-editor.component';
import { SharedModule } from '../shared.module';


@Component({
  
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css'],
  /*imports: [
    CommonModule,
    FormsModule,
    QuillModule,
    SharedModule,
    QuilEditorComponent
  ],*/
  providers: [AnalyzeContentService, CrudContentService, DatePipe]
})

export class ContentPageComponent {
  private sample = [
    { state: 'IL', status: 'Compliant', violations: [] },
    { state: 'PA', status: 'Compliant', violations: [] },
    { state: 'NV', status: 'Compliant', violations: [] },
    { state: 'CA', status: 'Compliant', violations: [] },
    { state: 'MI', status: 'Compliant', violations: [] }
  ];

  @Input() contentAssetId?: string;
  @Input() content?: string;
  contentTitle = "Sensii Vape Product Launch"; //replace as input
  contentType: keyof typeof ContentType = 'productDescription';
  launchDate = "03-01-2023";
  editMode = false;
  loaded:boolean = false;
  
  paViolation = false;
  @Output() onAnalyze = new EventEmitter<{state: string; status: string; violations: { code: string; description: string; }[]}[] >;
  @Output() onInput = new EventEmitter<string>;
  @Output() onBack = new EventEmitter<null>;
  @Output() onSave = new EventEmitter<string>;
  stateResults: { state: string, status: string, violations: { code: string, description: string }[] }[] = [];
  contentDetail: {title: string, contentType:string} | undefined;
  @ViewChild('#editor-container') editorContainer: HTMLElement | undefined;


  constructor(private analyzeContentService: AnalyzeContentService, private contentService:CrudContentService) {
  }

  ngOnInit() {
    if (this.contentAssetId) {
      // Load the existing content asset with fields pre-filled
      this.editMode = false; // Set edit mode to false
      this.contentService.getContentAsset(this.contentAssetId).subscribe((contentAsset: ContentAsset) => {
        this.contentTitle = contentAsset.name;
        //this.contentType = ContentType[contentAsset.contentType];
        //this.launchDate = contentAsset.launchDate.toString();
        this.content = contentAsset.content;
        this.contentDetail = {
          title:this.contentTitle,
          contentType: 'Placeholder'
        };
        this.loaded = true;
      });
    } else {
      // Create a new contentAsset and start in edit mode
      this.editMode = true; // Set edit mode to true
      this.contentTitle = ''; // Clear the title
      //this.contentType = 'productDescription'; // Set default content type
      //this.launchDate = new Date().toISOString().substr(0, 10); // Set today's date as the launch date
      this.content = ''; // Clear the content
      this.loaded = true;
    }
  }
  
  
 /* ngAfterViewInit(){
    try{
      var quill = new Quill('#editor-container', {
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['image', 'code-block']
          ]
        },
        placeholder: 'Compose your content here...',
        theme: 'snow'  // or 'bubble'
      });
  
      quill.on('text-change',(this.handleInput.bind(this)));
      console.log(quill);
      //this.stateResults = this.sample;
    } catch(error){
      console.log('Error: ' + error);
    }

  }*/

  handleEditMode(){
    this.editMode = !this.editMode;
  }

  /*handleMetadataSave(event: { title: string, content_type: string, launch_date: Date }){
    this.contentTitle = event.title;
    //this.contentType = event.content_type;
    this.launchDate = event.launch_date.toString();
    this.handleEditMode();
  }*/

  handleMetadataSave(event: { title: string, content_type: string, launch_date: Date }) {
    this.contentTitle = event.title;
    //this.contentType = event.content_type;
    //this.launchDate = event.launch_date.toISOString().substr(0, 10);
    this.handleEditMode();
  }
  
  handleAnalysis(event:any){
    this.onAnalyze.emit(event);
  }

 /* async handleInput(delta: any, oldDelta: any, source: any) {
    try {
      const content = document.querySelector('#editor-container .ql-editor')?.textContent ?? '';
      const analysisResult = await this.analyzeContentService.analyzeContent(content);
      this.onInput.emit(content);
      this.onAnalyze.emit(analysisResult);      
    }catch(error){
      console.log(error);
    }

  }*/

  /*handleSaveContent(){
    const content = document.querySelector('#editor-container .ql-editor')?.textContent ?? undefined;
    if(content){
      const contentAsset: ContentAsset = {
        id: this.contentAssetId,
        name: this.contentTitle,
        //contentType: ContentType[this.contentType as keyof typeof ContentType],
        content: content,
        createdBy: 'User'
      }
      try{
        this.contentService.createContentAsset(contentAsset).then(()=>{
          console.log('Successfully saved content');
        }
        )
      }catch(error){
        console.log(error);
      }
    }
  }*/

  handleSaveContent() {
    
    const content = document.querySelector('#editor-container .ql-editor')?.textContent ?? undefined;
    if (content) {
      const contentAsset: ContentAsset = {
        id: this.contentAssetId || '',
        name: this.contentTitle,
        //contentType: ContentType[this.contentType as keyof typeof ContentType],
        content: content,
        //launchDate: new Date(this.launchDate),
        createdBy: 'User'
      }
      try {
        if (this.contentAssetId) {
          // Update the existing content asset
          this.contentService.updateContentAsset(contentAsset).then(() => {
            console.log('Successfully updated content');
            this.onSave.emit('Successful Update');
          });
        } else {
          // Create a new content asset
          this.contentService.createContentAsset(contentAsset).then(() => {
            console.log('Successfully saved content');
            this.onSave.emit('Successful Insert');

          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  

  handleBack(){
    this.onBack.emit();
  }

  handleInput(event:any){
    this.onInput.emit(event);
  }

    
    // Do something with the analysis result
    //console.log(analysisResult);
  

}
