import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NavMenuComponent } from '../shared/nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AdhubComponent } from './adhub/adhub.component';
import { ListViewComponent } from '../shared/list-view/list-view.component';
import { ContentPageComponent } from '../shared/content-page/content-page.component';
import { ContenthubComponent } from './contenthub/contenthub.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [HomeComponent, AdhubComponent, ContenthubComponent],
  imports: [
    CommonModule,
    SharedModule,
    NavMenuComponent,
    ListViewComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [HomeComponent]
})
export class FeaturesModule { }
