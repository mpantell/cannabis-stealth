import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NavMenuComponent } from '../shared/nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AdhubComponent } from './adhub/adhub.component';
import { ListViewComponent } from '../shared/list-view/list-view.component';
import { ContentPageComponent } from '../shared/content-page/content-page.component';



@NgModule({
  declarations: [HomeComponent, AdhubComponent],
  imports: [
    CommonModule,
    SharedModule,
    NavMenuComponent,
    ListViewComponent
  ],
  exports: [HomeComponent]
})
export class FeaturesModule { }
