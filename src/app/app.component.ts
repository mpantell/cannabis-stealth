import { Component, Input } from '@angular/core';
import { FirebaseApps, provideFirebaseApp } from '@angular/fire/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat';
import { AuthService } from './services/authentication.service';
import { map, tap, first } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cannabis-stealth';
  highlight=false;
  user$: Observable<firebase.User | null>;
  @Input() showNavBar:Boolean = true;
  
  constructor(private store: AngularFirestore, private afAuth: AngularFireAuth, private authService:AuthService){
    this.user$ = afAuth.authState;
  }

  ngOnInit(){
    this.getAll();
  }
  
  getAll(){
    this.store.collection('userInfo').snapshotChanges().subscribe((response) => {
      console.log('reponse ', response);
    })
  }

  logout(){
    this.afAuth.signOut();
  }

  authExperience(): boolean {
    let authed = this.afAuth.authState.pipe(
      map(user => !!user),
      first()
    );
    return authed && this.authService.getCurrentPage() !== '/landing-page' && this.authService.getCurrentPage() !== '/login';
  }

}


