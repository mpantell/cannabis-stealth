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
import { FirebaseApps, initializeApp,provideFirebaseApp, getApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Database } from 'firebase/database';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FeaturesModule,
    SharedModule,
    QuillModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    {provide: Database, useFactory: getDatabase},
    {provide: FirebaseApps, useFactory: () => [getApp()]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
