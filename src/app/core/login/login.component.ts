import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  username = '';
  password = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  handleInput(event: any){
    console.log(event);
  }

  onSubmit() {
    console.log(`Username: ${this.username} Password: ${this.password}`);

    this.router.navigate(['/sample']);

  }
}
