import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  imports: [ SignUpComponent, CommonModule ],
  standalone:true
})
export class LandingPageComponent {
  noform = true;

  handleFormToggle(){
    console.log('Entering Form Toggle');
    this.noform = !this.noform;
    //test comments
  }
}
