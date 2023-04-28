import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormArray, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';


@Component({
  standalone: true,
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.css'],
  imports: [FormsModule, ReactiveFormsModule]
})
export class ContentFormComponent {
  @Input() contentAssetDetail: {title:string, contentType:string } | undefined;
  @Output() onSave = new EventEmitter<{ title: string, content_type: string, launch_date: Date }>();

  editMode: boolean = false;
  title='';

  contentDetails = this.fb.group({
    contentTitle: [''],
    contentLaunchDate: [ ],
    contentType: ['']
  });

  constructor(private fb : FormBuilder){}

  ngOnInit(){
    if(this.contentAssetDetail){
      this.contentDetails.patchValue({
        contentTitle: this.contentAssetDetail.title,
        contentType: this.contentAssetDetail.contentType
      });
    }
  }

  onSubmit(){
    const formValues = this.contentDetails.value;
    const valuesWithDefaults = {
      title: formValues.contentTitle || '',
      content_type: formValues.contentType || '',
      launch_date: formValues.contentLaunchDate || new Date()
    };
    this.onSave.emit(valuesWithDefaults);
  }
}
