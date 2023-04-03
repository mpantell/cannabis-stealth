import { Component } from '@angular/core';
import { FirebaseApps, provideFirebaseApp } from '@angular/fire/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cannabis-stealth';
  highlight=false;
  
  constructor(private store: AngularFirestore){
    
  }

  ngOnInit(){
    this.getAll();
  }
  
  getAll(){
    this.store.collection('userInfo').snapshotChanges().subscribe((response) => {
      console.log('reponse ', response);
    })
  }

}
