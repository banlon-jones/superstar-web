import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/register', pathMatch: 'full'
  },
  {
    path: '', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
