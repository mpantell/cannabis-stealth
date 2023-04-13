import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  imports: [ SignUpComponent, CommonModule, ReactiveFormsModule, RouterModule ],
  standalone:true
})
export class LandingPageComponent {
  noform = true;

  handleFormToggle(){
    console.log('Entering Form Toggle');
    this.noform = !this.noform;
    //test comments
  }

  navigateToLogin(){

  }
}
