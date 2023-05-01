import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormArray, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { StateSelectorComponent } from '../state-selector/state-selector.component';
import { SharedModule } from '../shared.module';
import { FeaturesModule } from 'src/app/features/features.module';
import { ContentType } from 'src/models/content-asset.model';


@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.css']
  //imports: [FormsModule, ReactiveFormsModule, SharedModule, FeaturesModule]
})
export class ContentFormComponent {
  @Input() contentAssetDetail: { title: string, contentType: string } | undefined;
  @Output() onSave = new EventEmitter<{ title: string, content_type: string, launch_date: Date }>();
  selectedStates = [];
  contentTypeOptions: {key:string, type:string}[] = [];


  editMode: boolean = false;
  title = '';

  contentDetails = this.fb.group({
    contentTitle: [''],
    contentLaunchDate: [],
    contentType: [''],
    states: []
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    for (const key of Object.keys(ContentType)) {
      this.contentTypeOptions.push({
        key: key,
        type: ContentType[key as keyof typeof ContentType]
      });
    }

    if (this.contentAssetDetail) {
      this.contentDetails.patchValue({
        contentTitle: this.contentAssetDetail.title,
        contentType: this.contentAssetDetail.contentType
      });
    }
  }

  onSubmit() {
    const formValues = this.contentDetails.value;
    const valuesWithDefaults = {
      title: formValues.contentTitle || '',
      content_type: formValues.contentType || '',
      launch_date: formValues.contentLaunchDate || new Date()
    };
    this.onSave.emit(valuesWithDefaults);
  }
}
