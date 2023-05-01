import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ContentAsset, AssetTableHeaderKey } from 'src/models/content-asset.model';
import { CrudContentService } from 'src/app/services/crud-content.service';
import { stateResult, violation } from 'src/models/content-validation.model';
import { Gpt4AnalyzeContentService } from 'src/app/services/gpt-4-analyze-content.service';
import { ToastrService } from 'ngx-toastr';
import { ProofreaderComponent } from 'src/app/shared/proofreader/proofreader.component';
import { ActivatedRoute, Router, RouterState, RouterStateSnapshot } from '@angular/router';
import { ListViewBuilderService } from 'src/app/services/list-view-builder.service';

@Component({
  selector: 'app-contenthub',
  templateUrl: './contenthub.component.html',
  styleUrls: ['./contenthub.component.css'],
})

export class ContenthubComponent implements OnInit {
  @Input() validation = '';
  @Input() states: string[] = ["IL", "CA", "NV", "MI", "PA"];
  @Input() stateResults: stateResult[] = [];
  @Input() contentEditorActive: boolean = false;
  hoveredIndex: any = null;
  gptResults: string[] = [];
  lv = true;
  content: string | undefined;
  productId: string = '';
  contentAsset: ContentAsset | undefined;
  deleteAccess = true;
  contentAssetId?: string;


  tableData: string[][] = [
    /* ["Sensii Vape Product Launch", "Press Release", "Matthew Pantell", "2023-02-13", "Draft"],
     ["How to Care for Your Vape", "Web Content", "Matthew Pantell", "2023-02-07", "Pending Review"],
     ["Finding Your Terpene", "Web Content", "Mihir Datta", "2023-02-06", "Pending Review"],
     ["Expanding to Arizona!", "Press Release", "Nick Janson", "2023-02-06", "Approved"],
     ["Sensii Vape - Paid Ad", "Paid Ad", "Mike Liu", "2023-02-05", "Approved"],
     ["FLOWERZ Dispensary Grand Opening", "Press Release", "Matthew Pantell", "2023-02-05", "Approved"],
     ["Sensii Vape Coming Soon!", "Web Content", "Nick Janson", "2023-02-05", "Active"],*/
  ];

  headers = [
    'Content Title', 'Content Type', 'Created By', 'Created Date', 'Status'
  ];

  constructor(private gpt4: Gpt4AnalyzeContentService, private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private contentService: CrudContentService, private listViewBuilder: ListViewBuilderService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.populateTableData().then(()=>{
      const routerState = this.router.routerState.snapshot;
      const productId = routerState.root.firstChild?.queryParams['productId'];
      const contentId = routerState.root.firstChild?.queryParams['assetId'];
      if (productId && productId !== '') {
        this.lv = false;
        this.productId = productId;
      }
      if (contentId && contentId != '') {
        this.contentService.getContentAsset(contentId).subscribe(asset => {
          this.contentAsset = asset;
          this.content = asset.content;
        });
      }
    });
    
  }

  /*getStateStatus(state:string){
    const result = this.stateResults.find(record => record.state === state);
    if(result?.status=='Violation'){
      return 'violation';
    }else{
      return 'compliant'
    }
  }*/

  setContent(event: any) {
    this.content = event;
  }

  setStateResults(event: { state: string; status: string; violations: { code: string; description: string; }[] }[]) {
    this.stateResults = event;
    this.contentEditorActive = true;
  }

  onHover(stateResult: { state: string; status: string; violations: { code: string; description: string; }[] }[]) { }

  setHoverIndex(i: any, stateResult: any) {
    this.hoveredIndex = i && stateResult.status === 'Violation' ? i : null;
    console.log('HOVER INDEX: ' + i);
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

  showError(errorMessage: string) {
    this.toastr.error(errorMessage, 'Error',
      {
        timeOut: 5000,
        positionClass: 'toast-top-right',
      });
  }

  async populateTableData() {
    try {
      await this.contentService.getContentAssets().subscribe(assets => {
        const headerKey = new AssetTableHeaderKey();
        this.tableData = this.listViewBuilder.buildListViewData(headerKey, assets);
      });
    }catch(error){
      console.log('Content Hub populate table data error ' + error);
    }
    this.lv = true;
  }

 /* async populateTableData() {
    try {
      this.tableData = await this.listViewBuilder.buildListViewData(this.headerKey, this.products);
      console.log(this.tableData);
    } catch (error) {
      console.error('Error while building list view data:', error);
      // handle the error here, e.g. show a message to the user or take some other action
    } finally{
      console.log('TABLE DATA: ' + this.tableData);
    }
}*/

  handleCreate() {
    this.contentAssetId = undefined;
    this.lv = false;
  }

  handleDelete(event: any) {

  }

  handleBack() {
    this.lv = true;
  }


  handleOpen(event: any) {
    this.contentService.getContentAsset(event[0]).subscribe((contentAsset: ContentAsset) => {
      if (contentAsset) {
        this.contentAsset = contentAsset;
        this.contentAsset['id'] = event[0];
        this.contentAssetId = event[0];
        this.content = contentAsset.content;
        console.log('CONTENT ASSET RECORD: ' + this.contentAsset);
        this.lv = false;
      } else {
        console.log('Content Asset Not found');
      }
    });
  }

  handleSave() {
    this.populateTableData();
    this.showSuccess();
    
  }

  showSuccess() {
    this.toastr.success('Content Successfully Saved!', 'Success',
      {
        timeOut: 5000,
        positionClass: 'toast-top-right',
      });
    this.lv = true;
  }


}

