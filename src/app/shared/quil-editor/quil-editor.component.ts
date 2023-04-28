import { Component, Output, AfterViewInit, EventEmitter, Input } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import Quill from 'quill';
import { AnalyzeContentService } from 'src/app/services/analyze-content.service';

@Component({
  standalone: true,
  selector: 'app-quil-editor',
  templateUrl: './quil-editor.component.html',
  styleUrls: ['./quil-editor.component.scss'],
  imports: [QuillModule]
})
export class QuilEditorComponent implements AfterViewInit{

  @Input() content: string | undefined;
  @Input() quillEditMode: boolean = true;
  @Output() onAnalyze = new EventEmitter<{state: string; status: string; violations: { code: string; description: string; }[]}[] >;
  @Output() onInput = new EventEmitter<string>;

  constructor(private forbiddenKeywords: AnalyzeContentService){}

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
        placeholder: 'Compose your content here...',
        theme: 'snow',  // or 'bubble'
      });
      if(this.content){
        quill.insertText(0, this.content);
      }
      quill.on('text-change',(this.handleInput.bind(this)));
      console.log(quill);
      quill.enable(this.quillEditMode);
      //this.stateResults = this.sample;
    } catch(error){
      console.log('Error: ' + error);
    }

  }

  async handleInput(delta: any, oldDelta: any, source: any) {
    try {
      const content = document.querySelector('#editor-container .ql-editor')?.textContent ?? '';
      const analysisResult = await this.forbiddenKeywords.analyzeContent(content);
      this.onInput.emit(content);
      this.onAnalyze.emit(analysisResult);      
    }catch(error){
      console.log(error);
    }

  }

}
