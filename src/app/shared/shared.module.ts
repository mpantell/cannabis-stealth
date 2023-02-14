import { NgModule } from '@angular/core';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ListViewComponent } from './list-view/list-view.component';
import { CommonModule } from '@angular/common';
import { ContentPageComponent } from './content-page/content-page.component';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    NavMenuComponent, 
    CommonModule, 
    ListViewComponent,
    FormsModule,
    ContentPageComponent,
    QuillModule.forRoot()
  ],
  exports: [
    NavMenuComponent,
    ListViewComponent,
    ContentPageComponent
  ],
  declarations: [
  
  ]
})
export class SharedModule { }
