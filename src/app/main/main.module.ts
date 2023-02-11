import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared.module';

const route: Routes = [
  { path: '/home', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent
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
export class MainModule { }
