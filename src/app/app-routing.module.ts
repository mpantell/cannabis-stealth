import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './core/login/login.component';
//import { SampleComponent } from './core/sample/sample.component';
import { AdhubComponent } from './features/adhub/adhub.component';
import { HomeComponent } from './features/home/home.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  //{ path: 'sample', component: SampleComponent },
  { path: 'home', component: HomeComponent },
  { path: 'adhub', component: AdhubComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
