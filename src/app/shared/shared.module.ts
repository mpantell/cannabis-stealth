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
import { AccordionHorizontalComponent } from './accordion-horizontal/accordion-horizontal.component';
import { SegmentSelectorComponent } from './segment-selector/segment-selector.component';
import { FabricCanvasComponent } from './fabric-canvas/fabric-canvas.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { FabricToolbarComponent } from './fabric-toolbar/fabric-toolbar.component';
import { FabricWidgetMenuComponent } from './fabric-widget-menu/fabric-widget-menu.component';
import { SvgUploadComponent } from './svg-upload/svg-upload.component';
import { QuilEditorComponent } from './quil-editor/quil-editor.component';
import { StateSelectorComponent } from './state-selector/state-selector.component';
import { StatesService } from '../services/states.service';



@NgModule({
  imports: [
    NavMenuComponent,
    CommonModule,
    ListViewComponent,
    FormsModule,
    
    QuillModule.forRoot(),
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToolbarComponent,
    LayoutComponent,
    
  ],
  exports: [
    NavMenuComponent,
    ListViewComponent,
    ContentPageComponent,
    ContentFormComponent,
    ToolbarComponent,
    LayoutComponent,
    ProofreaderComponent,
    AccordionHorizontalComponent,
    ProductFormComponent,
    QuilEditorComponent,
    StateSelectorComponent
  ],
  declarations: [
    ProofreaderComponent,
    AccordionHorizontalComponent,
    SegmentSelectorComponent,
    FabricCanvasComponent,
    ProductFormComponent,
    FabricToolbarComponent,
    FabricWidgetMenuComponent,
    SvgUploadComponent,
    StateSelectorComponent,
    ContentFormComponent,
    QuilEditorComponent,
    ContentPageComponent,
  ]
})
export class SharedModule { }
