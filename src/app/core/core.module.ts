import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AngularFireModule } from '@angular/fire/compat';



@NgModule({
  declarations: [
    LandingPageComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AngularFireModule
  ]
})
export class CoreModule { }
