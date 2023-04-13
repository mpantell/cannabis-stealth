import { Component, Input } from '@angular/core';
import { stateResult } from 'src/models/content-validation.model';
import { Gpt4AnalyzeContentService } from 'src/app/services/gpt-4-analyze-content.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adhub',
  templateUrl: './adhub.component.html',
  styleUrls: ['./adhub.component.css'],
})
export class AdhubComponent {
  @Input() validation = '';
  @Input() states: string[] = ["Illinois"];
  @Input() stateResults: stateResult[] = [];
  @Input() contentEditorActive: boolean = false;
  gptResults: string[] = [];
  hoveredIndex: any = null;

  constructor(private gpt4: Gpt4AnalyzeContentService, private toastr:ToastrService) { }

  tableData = [
    ["Sensii Vape Product Launch", "Press Release", "Matthew Pantell", "2023-02-13", "Draft"],
    ["How to Care for Your Vape", "Web Content", "Matthew Pantell", "2023-02-07", "Pending Review"],
    ["Finding Your Terpene", "Web Content", "Mihir Datta", "2023-02-06", "Pending Review"],
    ["Expanding to Arizona!", "Press Release", "Nick Janson", "2023-02-06", "Approved"],
    ["Sensii Vape - Paid Ad", "Paid Ad", "Mike Liu", "2023-02-05", "Approved"],
    ["FLOWERZ Dispensary Grand Opening", "Press Release", "Matthew Pantell", "2023-02-05", "Approved"],
    ["Sensii Vape Coming Soon!", "Web Content", "Nick Janson", "2023-02-05", "Active"],
  ];

  headers = [
    'Content Title', 'Content Type', 'Created By', 'Created Date', 'Status'
  ];

  lv = true;

  handleCreate() {
    this.lv = false;
  }

  /*getStateStatus(state:string){
    const result = this.stateResults.find(record => record.state === state);
    if(result?.status=='Violation'){
      return 'violation';
    }else{
      return 'compliant'
    }
  }*/

  setStateResults(event: { state: string; status: string; violations: { code: string; description: string; }[] }[]) {
    this.stateResults = event;
    this.contentEditorActive = true;
  }

  onHover(stateResult: { state: string; status: string; violations: { code: string; description: string; }[] }[]) {

  }

  setHoverIndex(i: any, stateResult: any) {

    this.hoveredIndex = i && stateResult.status === 'Violation' ? i : null;
   // console.log('HOVER INDEX: ' + i);
  }

  async analyzeContent(event: any) {

    let contentElement = document.getElementById('content-page');
    let content = contentElement?.innerText;
    if (content) {
      const prompts = this.gpt4.buildPrompts(['IL'], content);
      //let results = this.gpt4.executePrompts(prompts);
      //console.log(results);

      this.gpt4.executePromptsFrontend(prompts).then(responses => {
        console.log(responses[0]);
        this.gptResults.push(responses[0]);
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
