import { Component, Input } from '@angular/core';
import { Gpt4AnalyzeContentService } from 'src/app/services/gpt-4-analyze-content.service';
import { ToastrService } from 'ngx-toastr';
import { stateResult } from 'src/models/content-validation.model';

@Component({
  selector: 'app-proofreader',
  templateUrl: './proofreader.component.html',
  styleUrls: ['./proofreader.component.css']
})
export class ProofreaderComponent {
  gptResults: string[] = ['Click \'Analyze Content\' when your ready to complete a full compliance analysis'];
  @Input() validation = '';
  @Input() states: string[] = ["Illinois"];
  @Input() stateResults: stateResult[] = [];
  @Input() contentEditorActive: boolean = false;
  @Input() content: string = '';
  hoveredIndex: any = null;

  constructor(private gpt4:Gpt4AnalyzeContentService, private toastr:ToastrService){}

  setStateResults(event: {state: string; status: string; violations: { code: string; description: string; }[]}[]){
    this.stateResults = event;
    this.contentEditorActive = true;
  }

  setHoverIndex(i: any, stateResult: any) {

    this.hoveredIndex = i && stateResult.status === 'Violation' ? i : null;
   // console.log('HOVER INDEX: ' + i);
  }

  async analyzeContent(event: any) {

    //let contentElement = document.getElementById('content-page');
    //let content = contentElement?.innerText;
    let content = this.content;
    
    if (content) {
      const prompts = this.gpt4.buildPrompts(['IL'], content);
      //let results = this.gpt4.executePrompts(prompts);
      //console.log(results);

      this.gpt4.executePromptsFrontend(prompts).then(responses => {
        console.log(responses[0]);
        this.gptResults[0] = responses[0];
      }).catch(err => {
        console.log(err);
        this.showError(err.errorMessage.toString());
      });
    }
  }

  showError(errorMessage:string) {
    this.toastr.error(errorMessage, 'Error', 
    {
      timeOut:5000,
      positionClass: 'toast-top-right',
    });
  }

}
