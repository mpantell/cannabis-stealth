import { Component } from '@angular/core';
import { provideDatabase, getDatabase, ref, child, push, update, set } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';

import { OnInit } from '@angular/core';
import firebase from 'firebase/app';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  ngOnInit(){
    this.writeSampleData("1234", "Matthew Pantell", "matt@matt.com");
  }

  writeSampleData(sampleId:String, name:String, email:String) {
    //console.log('Firebase apps: ' + firebase.getApps());
    console.log('Entered Write Sample Data');
    const db = getDatabase();
    set(ref(db, 'samples/' + sampleId),{
      name: name,
      email: email
    }).then((result)=>{
      console.log('Successfully saved to database: ' + result)
    })
    .catch(error => {
      console.log('Error Saving to Database :' + error);
    });
  }

}
