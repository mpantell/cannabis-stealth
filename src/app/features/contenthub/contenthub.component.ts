import { Component, Input } from '@angular/core';
import { stateResult, violation } from 'src/models/content-validation.model';



@Component({
  selector: 'app-contenthub',
  templateUrl: './contenthub.component.html',
  styleUrls: ['./contenthub.component.css']
})



export class ContenthubComponent {
  @Input() validation = '';
  @Input() states: string[] = ["IL", "CA", "NV", "MI", "PA"];
  @Input() stateResults: stateResult[] = [];
  @Input() contentEditorActive: boolean = false;
  hoveredIndex:any = null;

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

  handleCreate(){
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

  setStateResults(event: {state: string; status: string; violations: { code: string; description: string; }[]}[]){
    this.stateResults = event;
    this.contentEditorActive = true;
  }

  onHover(stateResult:{state: string; status: string; violations: { code: string; description: string; }[]}[]){

  }

  setHoverIndex(i:any, stateResult:any){

    this.hoveredIndex = i && stateResult.status==='Violation' ? i : null;
    console.log('HOVER INDEX: ' + i);
  }
}
