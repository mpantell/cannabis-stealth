import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication.service';
import { getAuth } from '@firebase/auth';
import { ErrorMessagesService } from 'src/app/services/error-messages.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  email:string = '';
  password:string = '';
  errorMessage:string = '';

  constructor(private router: Router, private authService: AuthService, private errorMessageService: ErrorMessagesService) {}

  async login() {
    try {
      await this.authService.login(this.email, this.password).then(()=>{
        this.router.navigate(['/home']);
      });
    } catch (error:any) {
      console.log('Error With Authentication');
      console.log(error);
      this.errorMessage = this.errorMessageService.removeFirebase(error.message);
    }
  }

  ngOnInit(): void {
    this.email = '';
    this.password = '';
    this.errorMessage = '';
  }

  handleInput(event: any){
    console.log(event);
  }

  onSubmit() {
   this.login();
  }

}
