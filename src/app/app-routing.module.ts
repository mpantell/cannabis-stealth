import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './core/landing-page/landing-page.component';

import { LoginComponent } from './core/login/login.component';
import { SignUpComponent } from './core/sign-up/sign-up.component';
//import { SampleComponent } from './core/sample/sample.component';
import { AdhubComponent } from './features/adhub/adhub.component';
import { ContenthubComponent } from './features/contenthub/contenthub.component';
import { HomeComponent } from './features/home/home.component';
import { AuthGuard } from './services/auth-guard.service';
import { ContentPageComponent } from './shared/content-page/content-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  //{ path: 'sample', component: SampleComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'adhub', component: AdhubComponent, canActivate: [AuthGuard]},
  { path: 'contentHub', component: ContenthubComponent, canActivate: [AuthGuard]},
  { path: 'landing-page', component: LandingPageComponent},
  { path: 'sign-up', component: SignUpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
