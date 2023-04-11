import { NgModule } from '@angular/core';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ListViewComponent } from './list-view/list-view.component';
import { CommonModule } from '@angular/common';
import { ContentPageComponent } from './content-page/content-page.component';
import { QuillModule } from 'ngx-quill';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContentFormComponent } from './content-form/content-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LayoutComponent } from './layout/layout.component';
import { ProofreaderComponent } from './proofreader/proofreader.component';




@NgModule({
  imports: [
    NavMenuComponent, 
    CommonModule, 
    ListViewComponent,
    FormsModule,
    ContentPageComponent,
    QuillModule.forRoot(),
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ContentFormComponent,
    HttpClientModule,
    ToolbarComponent,
    LayoutComponent
  ],
  exports: [
    NavMenuComponent,
    ListViewComponent,
    ContentPageComponent,
    ContentFormComponent,
    ToolbarComponent,
    LayoutComponent,
    ProofreaderComponent
  ],
  declarations: [
    
  
    ProofreaderComponent
  ]
})
export class SharedModule { }
