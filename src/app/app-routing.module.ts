import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { ReleaseComponent } from './release/release.component';
import { LoginActivate } from './_helpers/Login.activate';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoginActivate],
  },
  {
    path: 'release',
    component: ReleaseComponent,
    canActivate: [LoginActivate],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [LoginActivate],
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
