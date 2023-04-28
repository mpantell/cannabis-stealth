import { Component, OnInit } from '@angular/core';
import { ForbiddenKeyword } from 'src/models/forbidden-keyword.model';
import { CrudForbiddenKeywordsService } from 'src/app/services/crud-forbidden-keywords.service';
import { ForbiddenKeywordHeaderKey } from 'src/models/forbidden-keyword.model';
import { ListViewBuilderService } from 'src/app/services/list-view-builder.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forbidden-keywords-dictionary',
  templateUrl: './forbidden-keywords-dictionary.component.html',
  styleUrls: ['./forbidden-keywords-dictionary.component.scss']
})
export class ForbiddenKeywordsDictionaryComponent {
  forbiddenKeywords: ForbiddenKeyword[] = [];
  headers: string[] = ["id", "Keyword", "Category", "States", "Provisions"];
  deleteAccess = true;
  headerKey = new ForbiddenKeywordHeaderKey();
  tableData: string[][] = [];
  lv = true;
  selectedKeyword: any | undefined;


  constructor(private forbiddenKeywordsService: CrudForbiddenKeywordsService, private listViewBuilderService: ListViewBuilderService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getForbiddenKeywords();


  }

  async setTableData() {
    this.tableData = await this.listViewBuilderService.buildListViewData(this.headerKey, this.forbiddenKeywords);
  }

  handleDelete(event: any) {
    this.deleteForbiddenKeyword(event[0]);
  }

  handleOpen(event: any) {
    this.forbiddenKeywordsService.getForbiddenKeyword(event[0]).subscribe(keyword => {
      this.selectedKeyword = keyword;
      this.selectedKeyword.id = event[0];
      this.lv = false;
    });

  }

  handleCreate() {
    this.lv = false;
  }

  getForbiddenKeywords(): void {
    this.forbiddenKeywordsService.getForbiddenKeywords()
      .subscribe((forbiddenKeywords: ForbiddenKeyword[]) => {
        this.forbiddenKeywords = forbiddenKeywords;
        this.setTableData();
      });
  }

  saveForbiddenKeyword(forbiddenKeyword: { form: ForbiddenKeyword, isUpdate: boolean }): void {
    if (forbiddenKeyword.isUpdate) {
      this.forbiddenKeywordsService.updateForbiddenKeyword(forbiddenKeyword.form)
        .subscribe((updatedForbiddenKeyword: ForbiddenKeyword) => {
          console.log('subscriber');
        });
      this.showSuccess();
      this.lv = true;
    } else {
      this.forbiddenKeywordsService.addForbiddenKeyword(forbiddenKeyword.form)
        .subscribe((newForbiddenKeyword: ForbiddenKeyword) => this.forbiddenKeywords.push(newForbiddenKeyword));
      this.showSuccess();
      this.lv = true;
    }
  }

  deleteForbiddenKeyword(forbiddenKeywordId: string): void {
    this.forbiddenKeywordsService.deleteForbiddenKeyword(forbiddenKeywordId)
      .subscribe(() => this.forbiddenKeywords = this.forbiddenKeywords.filter(k => k.id !== forbiddenKeywordId));
  }

  showSuccess() {
    this.toastr.success('Keyword Successfully Saved!', 'Success',
      {
        timeOut: 5000,
        positionClass: 'toast-top-right',
      });
  }

  handleBack(){
    this.selectedKeyword = undefined;
    this.lv = true;
  }

}
