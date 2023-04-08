import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat';
import { getAuth } from '@firebase/auth';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User | null>;

  constructor(public afAuth: AngularFireAuth, public activatedRoute:ActivatedRoute, public location:Location) {
    this.user$ = afAuth.authState;

    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        console.log('user is logged in');
      } else {
        console.log('user not logged in');
      }
    });
    console.log('Activated Route: ');
    console.log(this.activatedRoute.snapshot.url[0]);
  }
  
  async login(email: string, password: string) {
    await this.afAuth.signInWithEmailAndPassword(email, password);
  }
  
  async logout() {
    await this.afAuth.signOut();
  }

  getCurrentPage():string {
    //return this.activatedRoute.snapshot.url[0].path;
    //return this.snapshot.url[0].path;
    return this.location.path();

  }
   
}

