import { Component } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormArray, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';


@Component({
  standalone: true,
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.css'],
  imports: [FormsModule, ReactiveFormsModule]
})
export class ContentFormComponent {
  
  editMode: boolean = false;
  title="Sample Title";

  contentDetails = this.fb.group({
    contentTitle: [''],
    contentLaunchDate: [''],
    contentType: ['']
  });

  constructor(private fb : FormBuilder){}

  onSubmit(){
    
  }
}
