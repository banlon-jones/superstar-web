import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import {SharedModule} from '../shared.module';

const route: Routes = [
  { path: 'sign-in', component: SigninPageComponent },
  { path: 'register', component: SignupPageComponent}
];

@NgModule({
  declarations: [
    SigninPageComponent,
    SignupPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AuthenticationModule { }
