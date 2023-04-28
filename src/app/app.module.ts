import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import QuillType, { Delta } from 'quill';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { ListViewComponent } from './shared/list-view/list-view.component';

import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';
import { FirebaseApps, initializeApp, provideFirebaseApp, getApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
//import { Database } from 'firebase/database';
import { Firestore } from 'firebase/firestore';
import { app, firebaseConfig, firestore, appName } from './firebase';
import { getFirestore } from 'firebase/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import 'reflect-metadata';
import { StatesService } from './services/states.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    FeaturesModule,
    SharedModule,
    QuillModule.forRoot(),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig, appName),
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 10000
    }
    )
  ],
  providers: [
    { provide: Firestore, useValue: firestore },
    StatesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

/*AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),*/