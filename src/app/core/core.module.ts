import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
//import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LandingPageComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
  //  BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    Input
  ]
})
export class CoreModule { }
