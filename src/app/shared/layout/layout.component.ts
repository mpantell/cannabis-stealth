import { Component } from '@angular/core';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { RouterOutlet } from '@angular/router';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone:true,
  imports: [ToolbarComponent, NavMenuComponent, RouterOutlet, CommonModule]
})
export class LayoutComponent {
  @Input() authedExperience:boolean=false;
}
