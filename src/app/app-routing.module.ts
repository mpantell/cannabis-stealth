import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './core/login/login.component';
//import { SampleComponent } from './core/sample/sample.component';
import { AdhubComponent } from './features/adhub/adhub.component';
import { ContenthubComponent } from './features/contenthub/contenthub.component';
import { HomeComponent } from './features/home/home.component';
import { ContentPageComponent } from './shared/content-page/content-page.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  //{ path: 'sample', component: SampleComponent },
  { path: 'home', component: HomeComponent },
  { path: 'adhub', component: AdhubComponent},
  { path: 'contentHub', component: ContenthubComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
