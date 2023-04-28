import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ForbiddenKeyword } from 'src/models/forbidden-keyword.model';
import { StateSelectorComponent } from 'src/app/shared/state-selector/state-selector.component';

@Component({
  selector: 'app-forbidden-keyword-form',
  templateUrl: './forbidden-keyword-form.component.html',
  styleUrls: ['./forbidden-keyword-form.component.scss']
})
export class ForbiddenKeywordFormComponent implements OnInit {
  @Output() saveForbiddenKeyword = new EventEmitter<any>();
  @Output() onBack = new EventEmitter<null>;
  @Input() forbiddenKeyword : ForbiddenKeyword | undefined;
  pageTitle:string = '';
  loaded = false;
  selectedStates: string[] = [];
  isUpdate:boolean = false;
  @ViewChild('stateSelector') stateSelector: StateSelectorComponent | undefined;


  forbiddenKeywordForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    keyword: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    states: new FormControl([]),
    provisions: new FormControl('', Validators.required)
  });
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() { 
    if(this.forbiddenKeyword){
      this.pageTitle = "Update Forbidden Keyword";
      this.selectedStates = this.forbiddenKeyword.states;
      this.forbiddenKeywordForm.patchValue(this.forbiddenKeyword);
      this.isUpdate = true;
      this.loaded = true;
    }else{
      this.pageTitle = 'New Forbidden Keyword';
      this.loaded = true;
    }
  }

  handleSave() {
    if (this.forbiddenKeywordForm.valid) {
      const selectedStates = this.stateSelector?.selectedStates;
      this.forbiddenKeywordForm.get('states')?.setValue(selectedStates);
      if(this.forbiddenKeyword){
        this.forbiddenKeywordForm.get('id')?.setValue(this.forbiddenKeyword.id);
      }
      this.saveForbiddenKeyword.emit({form: this.forbiddenKeywordForm.value, isUpdate: this.isUpdate});
      this.forbiddenKeywordForm.reset();
    }
  }

  handleBack(){
    this.onBack.emit();
  }

}
