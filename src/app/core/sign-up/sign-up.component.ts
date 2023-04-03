import { Component, EventEmitter, Output } from '@angular/core';
import { provideDatabase, getDatabase, ref, child, push, update, set } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseApps, getApp } from '@angular/fire/app';
import { OnInit } from '@angular/core';
import firebase from 'firebase/app';
import { firestore } from 'firebase-functions/v1';
//import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  standalone: true
})
export class SignUpComponent implements OnInit {

  constructor(private firestore: AngularFirestore){}

  formData = {
    first_name: '',
    last_name: '',
    company: '',
    email: '',
    phone_number: '',
    source: ''
  };

  @Output() backevent = new EventEmitter<string>();

  ngOnInit(){
    this.writeSampleData("1234", "Matthew","Pantell", "PwC", "matt@matt.com", "8182198161", "Lead");
  }

  writeSampleData(sampleId:string, first_name:string, last_name:string, company:string, email:string, phone_number:string, source:string) {
    //console.log('Firebase apps: ' + firebase.getApps());
    //console.log('Entered Write Sample Data');
    //const db = getDatabase();

    const db = this.firestore.collection('demo-requests');
    db.doc(sampleId).set({
      name: first_name,
      last_name: last_name,
      company: company,
      email: email,
      phone_number: phone_number,
      source: source
    })
    .then((result)=>{
      console.log('Successfully saved to database: ' + result)
    })
    .catch((error)=>{
      console.log('Error Saving to Database :' + error);
    })

    /*
    set(ref(db, 'demo-requests/' + sampleId),{
      name: name,
      email: email
    }).then((result)=>{
      console.log('Successfully saved to database: ' + result)
    })
    .catch(error => {
      console.log('Error Saving to Database :' + error);
    });*/
  }

  submitForm(){
    console.log('Submitting Form');
    console.log(this.formData);
  }

  dispatchBack(){
    this.backevent.emit('Go Back');
  }

}
