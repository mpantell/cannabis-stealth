import { Component, EventEmitter, Output } from '@angular/core';
import { provideDatabase, getDatabase, ref, child, push, update, set } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseApps, getApp } from '@angular/fire/app';
import { OnInit } from '@angular/core';
import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
//import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  imports: [ReactiveFormsModule, FormsModule],
  standalone: true
})
export class SignUpComponent implements OnInit {

  formData: FormGroup = new FormGroup({});
  constructor(private firestore: AngularFirestore, private fb: FormBuilder, private toastr: ToastrService){}

  /*formData = {
    first_name: '',
    last_name: '',
    company: '',
    email: '',
    phone_number: '',
    source: ''
  };*/

  @Output() backevent = new EventEmitter<string>();

  ngOnInit(){
    this.formData = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      phone_number: ['', Validators.required],
      source: ['']
    })
    //this.writeSampleData("1234", "Matthew","Pantell", "PwC", "matt@matt.com", "8182198161", "Lead");
  }

  writeDemoRequest(first_name:string, last_name:string, company:string, email:string, phone_number:string, source:string) {
    const db = this.firestore.collection('demo-requests');
    const now = firebase.firestore.Timestamp.fromDate(new Date());
    db.doc().set({
      name: first_name,
      last_name: last_name,
      company: company,
      email: email,
      phone_number: phone_number,
      source: source,
      timesubmitted: now
    })
    .then((result)=>{
      this.showSuccess();
      this.backevent.emit('Go Back');
    })
    .catch((error)=>{
      console.log('Error Saving to Database :' + error);
    });
  }

  showSuccess() {
    this.toastr.success('Thank you for your interest! We will contact you soon with next steps', 'Success', {
      timeOut:1000,
      toastClass: 'custom-toast' // Add custom class to the toast message
    });
  }

  submitForm(){
    console.log('Submitting Form');
    console.log(this.formData);
    this.writeDemoRequest(this.formData.value.first_name, this.formData.value.last_name, this.formData.value.company, 
      this.formData.value.email, this.formData.value.phone_number, this.formData.value.source);
  }

  dispatchBack(){
    this.backevent.emit('Go Back');
  }

}
