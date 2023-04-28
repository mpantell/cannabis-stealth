import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NavMenuComponent } from '../shared/nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AdhubComponent } from './adhub/adhub.component';
import { ListViewComponent } from '../shared/list-view/list-view.component';
import { ContentPageComponent } from '../shared/content-page/content-page.component';
import { ContenthubComponent } from './contenthub/contenthub.component';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { ProofreaderComponent } from '../shared/proofreader/proofreader.component';
import { CampaignhubComponent } from './campaignhub/campaignhub.component';
import { BrandhubComponent } from './brandhub/brandhub.component';
import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from '../shared/product-form/product-form.component';
import { DatePipe } from '@angular/common';
import { ListViewBuilderService } from '../services/list-view-builder.service';
import { SocialHubComponent } from './social-hub/social-hub.component';
import { ForbiddenKeywordsDictionaryComponent } from './forbidden-keywords-dictionary/forbidden-keywords-dictionary.component';
import { ForbiddenKeywordFormComponent } from './forbidden-keyword-form/forbidden-keyword-form.component';
import { StateSelectorComponent } from '../shared/state-selector/state-selector.component';




@NgModule({
  declarations: [HomeComponent, AdhubComponent, ContenthubComponent, CampaignhubComponent, BrandhubComponent, ProductsComponent, SocialHubComponent, ForbiddenKeywordsDictionaryComponent, ForbiddenKeywordFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    NavMenuComponent,
    ListViewComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [HomeComponent],
  providers: [ListViewBuilderService, DatePipe]
})
export class FeaturesModule { }
