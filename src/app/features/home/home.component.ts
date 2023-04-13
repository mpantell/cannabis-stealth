import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavMenuComponent } from '../../shared/nav-menu/nav-menu.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  teamTab: string = 'none';
  aboutTab: string = 'block';
  aboutActive: boolean = true;
  teamActive: boolean = false;

  constructor(private router:Router){}

  handleNav(event: any) {
    if (event.target.id.includes("home")) {
      this.router.navigate(['/home']);
    } else if (event.target.id.includes("brand")) {
      this.router.navigate(['/brandHub']);
    } else if (event.target.id.includes("content")) {
      this.router.navigate(['/contentHub']);
    } else if (event.target.id.includes("campaign")) {
      this.router.navigate(['/campaignHub']);
    }
  }

  setTab(event: Event, tabName: string) {
    let x = Array.from(document.getElementsByClassName('tab') as HTMLCollectionOf<HTMLElement>)
    if (tabName === 'about') {
      this.aboutTab = 'block';
      this.teamTab = 'none';
      this.setActiveTabs();
    } else {
      this.teamTab = 'block';
      this.aboutTab = 'none';
      this.setActiveTabs();
    }
  }

  setActiveTabs() {
    this.teamActive = !this.teamActive;
    this.aboutActive = !this.aboutActive;
  }


}
