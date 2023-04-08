import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
  imports: [RouterModule]
})
export class NavMenuComponent {

  constructor(private router:Router){

  }

  handleNav(event:any){
    if (event.target.id.includes("home")) {
      this.router.navigate(['/home']);
    } else if (event.target.id.includes("brand")) {
      this.router.navigate(['/brand']);
    } else if (event.target.id.includes("content")) {
      this.router.navigate(['/contentHub']);
    } else if (event.target.id.includes("campaign")) {
      this.router.navigate(['/campaign']);
    }
    }

}
